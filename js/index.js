var bars_icon = document.querySelector('.bars_icon');
var menu_side = document.querySelector('.menu_side');
var menu_background = document.querySelector('.menu_side_background');
var img = document.querySelector('.boton_modal');
// const offset = img.getBoundingClientRect();

document.querySelector('body').addEventListener('click', function(event){
  // event.target 

  console.log(event.target)

})



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
  if (window.pageYOffset > 160) { 
   img.style.position = 'fixed';
    img.style.top = '160px';
    
  } else {
    img.style.position = 'absolute';
    img.style.top = '';
  }

}
});

