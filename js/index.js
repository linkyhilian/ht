var bars_icon = document.querySelector('.bars_icon');
var menu_side = document.querySelector('.menu_side');
var menu_background = document.querySelector('.menu_side_background');
var sidebar = document.querySelector('.nav-sidebar');
var img = document.querySelector('.boton_modal');



// sidebar
function sidebarToggle(){
    menu_side.classList.toggle('menu_side_active');
    menu_background.classList.toggle('menu_side_background_active');
    sidebar.classList.toggle('none')
    img.classList.toggle('none')
    
   
};

menu_background.addEventListener('click', () =>{

    sidebarToggle();
});

// Sticky
window.addEventListener('scroll', function() { 
if(!menu_side.classList.contains('menu_side_active')){
  if (window.pageYOffset > 136) { 
   img.style.position = 'fixed';
    img.style.top = '280px';
    
  } else {
    img.style.position = 'absolute';
    img.style.top = '';
  }

}
});

// navbar 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 522 || document.documentElement.scrollTop > 522) {

    document.getElementById("nav_container").classList.add('nav_expand');
    document.getElementById("navbar").classList.add('nav_expand');

    document.getElementById("navbar").classList.remove('nav_normal');
    document.getElementById("nav_container").classList.remove('nav_normal');
  } else {

    document.getElementById("navbar").classList.add('nav_normal');
    document.getElementById("nav_container").classList.add('nav_normal');

    document.getElementById("navbar").classList.remove('nav_expand');
    document.getElementById("nav_container").classList.remove('nav_expand');
  }
}
