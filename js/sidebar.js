let sidebar_modal = document.getElementById('sidebar_modal');
let flex_sidebar = document.getElementById('flex_sidebar');
let open_sidebar = document.getElementById('open_sidebar');
let close_sidebar = document.getElementById('close_sidebar');
var img = document.querySelector('.boton_modal');

open_sidebar.addEventListener('click',function(){
  sidebar_modal.style.display='block'
  img.classList.toggle('none')
})

close_sidebar.addEventListener('click',function(){
  sidebar_modal.style.display='none'
  img.classList.toggle('none')
})

window.addEventListener('click',function(e){
  if(e.target == flex_sidebar){
    sidebar_modal.style.display='none'
    img.classList.toggle('none')
  }
})