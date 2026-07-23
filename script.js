const menu=document.querySelector('.menu-button'),nav=document.querySelector('#site-nav'),play=document.querySelector('.play'),cassette=document.querySelector('.cassette');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')});
play.addEventListener('click',()=>{const playing=play.dataset.playing==='true';play.dataset.playing=String(!playing);play.querySelector('span').textContent=playing?'▶':'❚❚';play.setAttribute('aria-label',playing?'Play Less than 0 preview':'Pause Less than 0 preview');cassette.classList.toggle('is-playing',!playing)});
