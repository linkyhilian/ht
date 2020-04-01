const img = document.querySelector('.boton_modal');
const offset = img.getBoundingClientRect();

window.addEventListener('scroll', function() {
  if (window.pageYOffset > offset.top) {
   img.style.position = 'fixed';
    img.style.top = 0;
  } else {
    img.style.position = 'relative';
    img.style.top = '';
  }
});
