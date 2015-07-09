// ==UserScript==
// @name          WhatsApp Web Switch Chats using Keyboard
// @description   Lets you use alt+up or alt+down to switch chats on WhatsApp Web
// @include       *://web.whatsapp.com/*
// @version       1.0
// ==/UserScript==

var findOther = function(elemList, zIndex) {
    var other;
    for (var i = 0; i < elemList.children.length; i++) {
        if (elemList.children[i].style.zIndex == zIndex) {
            other = elemList.children[i];
        }
    }
    return other;
};

var move = function(dir) {
    var current = document.querySelector('.active');
    var target;
    if (current && current.className.indexOf('chat') !== -1) {
        var parent = current.parentElement;
        var i = +parent.style.zIndex;
        var otherParent = findOther(parent.parentElement, i - dir);
        if (otherParent) {
            target = otherParent.children[0];
            target.click();
            // target.scrollIntoView();
        }
    }
    else {
        var target = document.querySelector('.infinite-list-viewport .chat');
        target.click();
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
        else if(e.keyCode === 39) {
            move(2);
        }
        else if(e.keyCode === 37) {
            move(-2);
        }
        else if(e.keyCode === 191) {
            document.querySelector('.input-search').focus();
        }
    }
}, false);