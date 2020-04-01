let modal = document.getElementById('modal');
let flex= document.getElementById('flex');
let abrir = document.getElementById('open_modal');
let cerrar = document.getElementById('close');
var img = document.querySelector('.boton_modal');

abrir.addEventListener('click',function(){
  modal.style.display='block'
  img.classList.toggle('none')
})

cerrar.addEventListener('click',function(){
  modal.style.display='none'
  img.classList.toggle('none')
})

window.addEventListener('click',function(e){
  if(e.target == flex){
    modal.style.display='none'
    img.classList.toggle('none')
  }
})