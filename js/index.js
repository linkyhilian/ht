var bars_icon = document.querySelector('.bars_icon');
var menu_side = document.querySelector('.menu_side');
var menu_background = document.querySelector('.menu_side_background');


function sidebarToggle(){
    menu_side.classList.toggle('menu_side_active');
    menu_background.classList.toggle('menu_side_background_active');

}


menu_background.addEventListener('click', () =>{

    sidebarToggle();
    
});





