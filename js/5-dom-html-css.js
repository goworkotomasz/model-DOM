'use strict';


var mainHeader = document.getElementById('main-header');

console.log(mainHeader.innerHTML);

mainHeader.innerHTML = 'Nowy <span>nagłówek</span>';



var link = document.getElementsByClassName('link')[0];

console.log(link);

link.href = 'http://akademia108.pl';

console.log(link.className);

link.className = 'pierwsza-klasa druga-klasa';

link.className += ' trzecia-klasa';


var allLinks = document.getElementsByName('a');

console.log(allLinks);

for(var i=0; i<allLinks.length; i++) {
    allLinks[i].className += ' zupełnie-nowa-klasa';
}


mainHeader.style.color = '#ff0000';
mainHeader.style.backgroundColor = '#00ff00';