// ==UserScript==
// @name          Duolingo
// @description   Lets you use alt+up or alt+down to scroll down to your next lesson, or up to the top of the page, and alt+enter to go to practice
// @include       *://*.duolingo.com/*
// @version       1.0
// ==/UserScript==


var down = function() {
    [].pop.apply(document.querySelectorAll('.gold')).scrollIntoView();
};

var up = function() {
    window.scrollTo(0, 0);
};


document.body.addEventListener('keydown', function (e) {
    if (e.altKey) {
        if (e.keyCode === 38) {
            up();
        }
        else if(e.keyCode === 40) {
            down();
        }
        else if(e.keyCode === 13) {
            location.href = 'https://www.duolingo.com/practice';
        }
    }
}, false);

console.log('Init');