const img = document.querySelector('.boton_modal');
const offset = img.getBoundingClientRect();

window.addEventListener('scroll', function() { 
   
    console.log(window.pageYOffset);
    console.log(img.style.top);

  if (window.pageYOffset > 6000) { 
   
   img.style.position = 'fixed';
    img.style.top = '1200px';
    
  } else {
    img.style.position = 'absolute';
    img.style.top = '';
  }


});

