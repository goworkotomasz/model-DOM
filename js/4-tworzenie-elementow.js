'use strict';

var istniejacyWezel = document.getElementById('parSecond').children[0];

console.log(istniejacyWezel);

var header = document.createElement('h2');
var newLine = document.createElement('br');
var textInHeader = document.createTextNode('Nowy nagłówek H2');
var secondText = document.createTextNode('dlaszy tekst');
var attribute = document.createAttribute('id');

header.setAttributeNode(attribute);

header.id = 'nowe-id';

header.appendChild(textInHeader);
header.appendChild(secondText);

console.log(header);


istniejacyWezel.parentElement.insertBefore(header, istniejacyWezel);

istniejacyWezel.parentElement.removeChild(istniejacyWezel);