// ==UserScript==
// @name          Playback Rate changer
// @description   Lets you use alt and + or alt and - to change the playback rate of HTML5 video elements
// @include       *://*/*
// @version       1.0
// ==/UserScript==

var setToDefault = function() {
    changeSpeedBy(0);
};

var init = function() {
    var video = document.querySelector('video');

    console.log('Playback init');
    if (!localStorage.speed) {
        localStorage.speed = '1';
    }
    document.body.addEventListener('load', setToDefault);
    video.addEventListener('playing', setToDefault);
};

var changeSpeedBy = function(delta) {
    localStorage.speed = +(localStorage.speed) + delta;
    console.log('New speed:', localStorage.speed);
    var videoElem = document.querySelector('video');
    if (videoElem) {
        videoElem.playbackRate = localStorage.speed;
    }
    else {
        console.error('No video element.');
    }
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
    }
}, false);

init();