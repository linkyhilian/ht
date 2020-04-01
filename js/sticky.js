const img = document.querySelector('.boton_modal');
const offset = img.getBoundingClientRect();

window.addEventListener('scroll', function() { 
   
 

  if (window.pageYOffset > 250) { 
   img.style.position = 'fixed';
    img.style.top = '70px';
    
  } else {
    img.style.position = 'absolute';
    img.style.top = '';
  }


});

