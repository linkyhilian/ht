$(function() {
  
  // elementos de la lista
  var menues = $("nav li"); 

  // manejador de click sobre todos los elementos
  menues.click(function() {
     // eliminamos active de todos los elementos
     menues.removeClass("active");
     // activamos el elemento clicado.
     $(this).addClass("active");
  });

});

$(function() {
  
  // elementos de la lista
  var menues = $(".nav-sidebar .sidebar_item"); 

  // manejador de click sobre todos los elementos
  menues.click(function() {
     // eliminamos active de todos los elementos
     menues.removeClass("active_border");
     // activamos el elemento clicado.
     $(this).addClass("active_border");
  });

});

$(function() {
  
  // elementos de la lista
  var menues = $(".nav-sidebar a"); 

  // manejador de click sobre todos los elementos
  menues.click(function() {
     // eliminamos active de todos los elementos
     menues.removeClass("active");
     // activamos el elemento clicado.
     $(this).addClass("active");
  });

});