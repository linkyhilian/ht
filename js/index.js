var bars_icon = document.querySelector('.bars_icon');
var menu_side = document.querySelector('.menu_side');
var menu_background = document.querySelector('.menu_side_background');
const img = document.querySelector('.boton_modal');
const offset = img.getBoundingClientRect();



function sidebarToggle(){
    menu_side.classList.toggle('menu_side_active');
    menu_background.classList.toggle('menu_side_background_active');
    img.classList.toggle('none')
    
   
}


menu_background.addEventListener('click', () =>{

    sidebarToggle();
    
});





window.addEventListener('scroll', function() { 
    
if(!menu_side.classList.contains('menu_side_active')){
   console.log("ejecutando")
  if (window.pageYOffset > 250) { 
   img.style.position = 'fixed';
    img.style.top = '70px';
    
  } else {
    img.style.position = 'absolute';
    img.style.top = '';
  }

}
});

