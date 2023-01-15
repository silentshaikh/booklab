burger = document.querySelector('.burger')
logo = document.querySelector('.logo')
searchbar = document.querySelector('.search-bar')
navlist = document.querySelector('.li-list')
navbar = document.querySelector('.nav-br')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    searchbar.classList.toggle('v-class');
    logo.classList.toggle('h-img');
    navlist.classList.toggle('v-class');
});