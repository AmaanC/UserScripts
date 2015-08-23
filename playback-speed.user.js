// ==UserScript==
// @name          Playback Rate changer
// @description   Lets you use alt and + or alt and - to change the playback rate of HTML5 video elements
// @include       *://*/*
// @version       1.0
// ==/UserScript==

var speedDisplayElem;
var lastTimer, lastInnerTimer;

var setToDefault = function() {
    if (!window.resetSpeed) {
        changeSpeedBy(0);
    }
};

var init = function() {
    var video = document.querySelector('video');
    speedDisplayElem = document.createElement('span');
    speedDisplayElem.style.transition = 'opacity 500ms';
    speedDisplayElem.style.position = 'fixed';
    speedDisplayElem.style.right = '10px';
    speedDisplayElem.style.top = '30px';
    speedDisplayElem.style.display = 'none';
    speedDisplayElem.style.zIndex = '99999999999';
    document.body.appendChild(speedDisplayElem);

    console.log('Playback init');
    if (!localStorage.speed) {
        localStorage.speed = '1';
    }
    document.body.addEventListener('load', setToDefault);
    video.addEventListener('playing', setToDefault);
};

var changeSpeedBy = function(delta) {
    window.resetSpeed = false;
    localStorage.speed = +(localStorage.speed) + delta;
    console.log('New speed:', localStorage.speed);
    var videoElem = document.querySelector('video');
    if (videoElem) {
        videoElem.playbackRate = localStorage.speed;
    }
    else {
        console.error('No video element.');
    }

    if (lastTimer) {
        clearTimeout(lastTimer);
        clearTimeout(lastInnerTimer);
    }

    speedDisplayElem.textContent = localStorage.speed;
    speedDisplayElem.style.display = 'block';
    speedDisplayElem.style.opacity = 1;
    lastTimer = setTimeout(function() {
        speedDisplayElem.style.opacity = 0;
        lastInnerTimer = setTimeout(function() {
            speedDisplayElem.style.display = 'none';
        }, 500);
    }, 500);
};

document.body.addEventListener('keydown', function (e) {
    if (e.altKey) {
        if (e.keyCode === 189) {
            // Reduce speed
            changeSpeedBy(-0.25);
        }
        else if(e.keyCode === 187) {
            // Increase speed
            changeSpeedBy(+0.25);
        }
        else if (e.keyCode == 48) {
            console.log('Temporarily reset speed to 1.');
            document.querySelector('video').playbackRate = 1;
            window.resetSpeed = true;
        }
    }
}, false);

init();