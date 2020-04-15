let modal = document.getElementById('modal');
let flex= document.getElementById('flex');
let abrir = document.getElementById('open_modal');
let abrir_menu = document.getElementById('open_modal_menu');
let cerrar = document.getElementById('close');
var img = document.querySelector('.boton_modal');

abrir_menu.addEventListener('click',openModal);
abrir.addEventListener('click',openModal);
cerrar.addEventListener('click',closeModal);
window.addEventListener('click',aroundModal);


function closeModal(){
  modal.style.display='none';
  img.classList.toggle('none');
}
function openModal(){
  modal.style.display='block';
  img.classList.toggle('none');
}
function aroundModal(e){
  if(e.target == flex){
    modal.style.display='none';
    img.classList.toggle('none');
  }
}



