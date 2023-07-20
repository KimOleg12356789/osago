$(document).ready(function(){

    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.mt-mobile');
    const body = document.querySelector('body');
    
    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
        body.classList.toggle('body-open');
        burger.classList.toggle('burger-open');
        
    });


});