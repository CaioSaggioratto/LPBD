//Expandindo menu

var btnExp = document.querySelector('#btn_exp');
var menuSide = document.querySelector('.menu_lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})