/////////SIDEBAR///////////////////////////
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const sideBar = document.querySelector('.side-bar');


bar.addEventListener('click', ()=> {
  sideBar.classList.add('open');
  sideBar.classList.remove('close');
});

close.addEventListener('click', ()=> {
  sideBar.classList.add('close');
  sideBar.classList.remove('open');
});
///////////////////////////////////////////////////////////////


