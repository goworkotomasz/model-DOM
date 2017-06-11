'use strict'

var paragraf = document.getElementById('parFirst');


/* Rodzice */
console.log(paragraf);
console.log(paragraf.parentNode);
console.log(paragraf.parentElement);


/* Dzieci */
console.log(paragraf.childNodes);
console.log(paragraf.children);
console.log(paragraf.firstChild);
console.log(paragraf.lastChild);


/* Rodzeństwo */

console.log(paragraf.nextSibling);
console.log(paragraf.previousSibling);
console.log(paragraf.nextElementSibling);
console.log(paragraf.previousElementSibling);


paragraf.childNodes.forEach(function(element, i){
    if(element.nodeType === 8) {
        console.log('Komentarz');
        
        element.parentNode.removeChild(element);
    }
})