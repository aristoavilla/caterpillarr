const menu=document.querySelector('.menu-button'),nav=document.querySelector('#site-nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')});
