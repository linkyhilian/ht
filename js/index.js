var bars_icon = document.querySelector('.bars_icon');
var menu_side = document.querySelector('.menu_side');
var menu_background = document.querySelector('.menu_side_background');
var sidebar = document.querySelector('.nav-sidebar');
var img = document.querySelector('.boton_modal');



// sidebar
function sidebarToggle(){
    // sidebar.classList.remove('none');
  
    menu_side.classList.toggle('menu_side_active');
    menu_background.classList.toggle('menu_side_background_active');
    sidebar.classList.toggle('menu_side_active')
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

    document.getElementById("nav_container").classList.add('nav_contract');
    document.getElementById("navbar").classList.add('nav_contract');

    document.getElementById("navbar").classList.remove('nav_normal');
    document.getElementById("nav_container").classList.remove('nav_normal');
  } else {

    document.getElementById("navbar").classList.add('nav_normal');
    document.getElementById("nav_container").classList.add('nav_normal');

    document.getElementById("navbar").classList.remove('nav_contract');
    document.getElementById("nav_container").classList.remove('nav_contract');
  }
}
/*..........CAMBIAR VALUE DE CHECKBOX, 1 si se marca, 0 si se desmarca..........*/ 
$("#susc").change(function(){ 
  if ($('#susc').is(":checked")) {
    /* console.log("La caja está marcada"); */
    $(this).attr("value","1");
    
  }else {
    // Hacer algo si el checkbox ha sido deseleccionado
   /*  console.log("La caja está desmarcada"); */
    $(this).attr("value","0");
  }
});

/* ...........FECHA ACTUAL JS............. */

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd;
} 
if(mm<10) {
    mm='0'+mm;
} 
today = dd+'/'+mm+'/'+yyyy;
/* console.log('Fecha actual: '+today); */

/* AGREGAR VALOR PREDEFINIDO DE FECHA AL INPUT DATE*/

document.getElementById("date").value = today;

 /* NECESITO CONSULTAR EL VALOR DE DATE QUE SE GUARDO ANTERIORMENTE EN EL CONTACTO...
     SI, DAT ES IGUAL A TODAY (FECHA ACTUAL): NO PUEDE GIRAR LA RULETA
     SI, DAT NO ES IGUAL A TODAY: SI PUEDE GIRAR
  */
 var dat = '13/04/2020'; //Esta seria la fecha almacenada en mailchimp (a taves de input) 

 console.log('Fecha de prueba: '+ dat);
 if (today==dat) {
     //Puede girar la ruleta
     console.log("no gires");
 } else{
     console.log("gira");
 }
 //MENSAJE INTENTA MANANA
function messageTomorrow() {
  $(".modal_container_action").show();
}
 //MENSAJE INTENTA MANANA