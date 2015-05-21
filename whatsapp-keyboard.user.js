// ==UserScript==
// @name          WhatsApp Web Switch Chats using Keyboard
// @description   Lets you use alt+up or alt+down to switch chats on WhatsApp Web
// @include       *://web.whatsapp.com/*
// @version       1.0
// ==/UserScript==

var move = function(dir) {
    var current = document.querySelector('.active');
    var otherParent = current.parentElement[dir == -1 ? 'previousSibling' : 'nextSibling'];
    if (otherParent) {
        otherParent.children[0].click();
    }
};

document.body.addEventListener('keydown', function (e) {
    if (e.altKey) {
        if (e.keyCode === 38) {
            move(-1);
        }
        else if(e.keyCode === 40) {
            move(1);
        }
    }
}, false);