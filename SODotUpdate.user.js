// ==UserScript==
// @name          StackOverflow Update
// @description   Lets you press "." to refresh questions the way Twitter does it
// @include       *://*.stackoverflow.com/*
// @version       1.0
// ==/UserScript==

document.body.addEventListener('keyup', function (e){
    if(e.keyCode === 190){
        var newPost = document.getElementsByClassName('new-post-activity');
        if(newPost[0]){
            newPost[0].click();
        }
    }
}, false);