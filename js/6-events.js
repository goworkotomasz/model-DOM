'use strict';

function alertFunction(par) {
    
    par.style.backgroundColor = 'pink';
}


var mainHeader = document.getElementById('main-header');

mainHeader.onclick = changeBackground;

function changeBackground() {
    this.style.backgroundColor = 'red';
}



var firstLink = document.getElementsByClassName('inna-klasa')[0];


firstLink.addEventListener('click', highlight);

function highlight(event) {
    event.preventDefault();
    event.stopPropagation();
    this.style.border = '2px yellow solid';
    alert('kliknięto w link');
}


function changeBackground() {
    this.style.backgroundColor = 'red';
    firstLink.removeEventListener('click', highlight);
}

mainHeader.onclick = changeBackground;


document.getElementById('sectionFirst').addEventListener('click', function(){
    alert('kliknięto w sekcję');
})