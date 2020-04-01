const img = document.querySelector('.boton_modal');
const offset = img.getBoundingClientRect();

window.addEventListener('scroll', function() { 
    console.log(offset.top);

    console.log(window.pageYOffset);


  if (window.pageYOffset > 262.8) { 
   img.style.position = 'fixed';
    img.style.top = '56px';
    
  } else {
    img.style.position = 'absolute';
    img.style.top = '';
  }

//   if (window.pageYOffset > offset.top + 10) {
//     img.style.position = 'fixed';
//      img.style.top = 5;
     
//    }
});

