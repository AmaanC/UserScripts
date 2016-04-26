// ==UserScript==
// @name          Footnote Helper (Gigamonkeys)
// @description   Lets you click on notes to jump to the footnote and back
// @include       *://gigamonkeys.com/book/*
// @version       1.0
// ==/UserScript==

var superNodes = [].slice.apply(document.querySelectorAll('sup'));
document.body.addEventListener('click', function(e) {
    var curNode = e.target;
    if (superNodes.indexOf(curNode) !== -1) {
       var pairNode = superNodes.filter(function(elem) {
       	   return elem !== curNode && elem.textContent === curNode.textContent;
       })[0];
       // console.log(pairNode);
       pairNode.scrollIntoView();
    }
}, false);
// conosle.log('Running footnote helper');
