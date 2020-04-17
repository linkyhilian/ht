//CONTENIDO 
var innerWheel = new Winwheel({
  'numSegments': 8,
  'lineWidth'   : 1,
  'strokeStyle': 'transparent',
  'outerRadius': 170,
  // 'pointerAngle': 0,
  'innerRadius': 30,
  'textAlignment': 'center',
  'textMargin' : 0,
  'responsive': true,
  'segments': [
      { 'fillStyle': '#ff5751', 'text': 'Envío gratis'},
      { 'fillStyle': '#ffc837', 'text': 'Suerte la próxima'},
      { 'fillStyle': '#ff5751', 'text': 'Cupón de $5.000'},
      { 'fillStyle': '#ffc837', 'text': 'Casi aciertas'},
      { 'fillStyle': '#ff5751', 'text': 'Perchas'},
      { 'fillStyle': '#ffc837', 'text': 'Suerte la próxima'},
      { 'fillStyle': '#ff5751', 'text': 'Maniquies'},
      { 'fillStyle': '#ffc837', 'text': 'Casi aciertas'},
  ],
  'pins' : {
      'number'      : 16,
      'responsive' : true,
      'outerRadius' : 5,
      'margin'      : -14,
      'fillStyle'   : '#ffc837',
      'strokeStyle' : '#transparent'
  },
  'animation': {
      'type': 'spinToStop',
      'duration': 5,
      'callbackFinished': 'Mensaje()',
      /* 'callbackAfter': 'outerWheel.draw()', */
      'callbackAfter': 'drawTriangle();'
  },
  // Turn pointer guide on.
   /* 'pointerGuide' :        
   {
       'display'     : true,
       'strokeStyle' : 'red',
       'lineWidth'   : 3
   } */
});

//.........................................BORDE 

var outerWheel = new Winwheel({
      'numSegments': 1,
      'lineWidth'   : 1,
      'strokeStyle': 'transparent',
      'textMargin' : 0,
      'outerRadius' : 190,
      'innerRadius' : 170,    // Set inner radius to the size of the inner wheel since the inner part of the wheel
      'responsive': true,
      'segments': [           //   is being drawn by the inner wheel we don't need to draw there.
          {'fillStyle' : '#edece9'},
      ],
      'animation':
      {
        'type': 'spinToStop',                     // Define animation more or less as normal, except for the callbackAfter().
        'duration': 5,
        'spins': 1,
        'callbackAfter' : 'drawInnerWheel()',     // Call back after each frame of the animation a function we can draw the inner wheel from.
      }
  });
  outerWheel.draw();
  innerWheel.draw(false);   // Pass false to stop it clearing the canvas and wiping the outer wheel.

  // This function is called after the outer wheel has drawn during the animation.
  function drawInnerWheel()
  {
      innerWheel.rotationAngle = outerWheel.rotationAngle;
      innerWheel.draw(false);
      drawTriangle();
  }

//.......................................FIN BORDE 
//Resultado por defecto:
function calculatePrize(){
  var stopAt = (46 + Math.floor((Math.random() * 43))); 
  //240 para nro 6, 46 para numero 2
  innerWheel.animation.stopAngle = stopAt;
  outerWheel.animation.stopAngle = stopAt;
  // innerWheel.startAnimation(); Lo comente porque hacia que la ruleta comenzara a girar apenas cargaba la pagina
};
calculatePrize();

//Mensaje y reinicio de la ruleta
function Mensaje() {
   var SegmentoSeleccionado = innerWheel.getIndicatedSegment();
   document.querySelector(".message_result").innerHTML= SegmentoSeleccionado.text;
   /* alert("Elemento seleccionado:" + SegmentoSeleccionado.text + "!"); */
   //Reiniciar ruleta (tal vez no sea necesario)
   innerWheel.stopAnimation(false);
      outerWheel.stopAnimation(false);
      //  innerWheel.rotationAngle = 0;
      //  innerWheel.draw();
      //  drawTriangle();
      outerWheel.draw();
   //Fin de Reiniciar ruleta
};

//Indicador de resultado

function drawTriangle()
{
  // Get the canvas context the wheel uses.
  var ctx = innerWheel.ctx;
  ctx.strokeStyle = '#154f80';     // Set line colour.
  ctx.fillStyle   = '#154f80';     // Set fill colour.
  ctx.lineWidth   = 2;
  ctx.beginPath();              // Begin path.
  ctx.moveTo(170, 5);           // Move to initial position.
  ctx.lineTo(230, 5);           // Draw lines to make the shape.
  ctx.lineTo(200, 40);
  ctx.lineTo(171, 5);
  ctx.stroke();                 // Complete the path by stroking (draw lines).
  ctx.fill();                   // Then fill.
};
drawTriangle();
//Validar que la animacion comience cuando los campos sean validos
/* function myFunction() {
  var inpObj = document.getElementById("nombre");
  var inpObj2 = document.getElementById("email");
  //Validar que la animacion comience cuando los campos sean validos
  if (inpObj.checkValidity() && inpObj2.checkValidity()) {
    document.getElementById("name_message").innerHTML = "Bien!";
      document.getElementById("email_message").innerHTML = "Bien!";
      theWheel.startAnimation();
  };
} */

  //..................CUANDO LA PANTALLA SEA MENOR DE 992: REMOVER INFO EN DESKTOP  Y AGREGAR INFO EN EL MODAL.................
var windowWidth = $(window).width(); if(windowWidth < 992){ 
  console.log("ventana menor de 992");
  //Remover todo el div
  $(".container_game").remove();
  //Insertarlo en otra seccion
  $( ".modal-body" ).append( '<div class="game_info"><div class="info"><span class="text text_info">*Para jugar dejanos tu nombre y tu email.</span><br><span class="text text_info">*Podés jugar solo una vez.</span><br><span class="text text_info">*Si ganás, tendra 15 minutos para reclamar tu premio.</span></div><div class="form"><form action="" name="form" method="POST" autocomplete="on" onsubmit="return send();"><input type="text" id="name" name="name" class="container_text text" placeholder="Ingrese el nombre" required minlength="3" maxlength="40"><p id="name_message"></p><input type="email" id="email" name="email" class="container_text text" placeholder="Introduzca el correo electrónico" required minlength="6" maxlength="40" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"><p id="email_message"></p><label class="susc_label text"><input type="checkbox" name="checkbox" id="susc" value="0"> <span>Deseo suscribirme al Newletter DM</span> </label><br><label for="date" class="text_label date_label" >Fecha</label><input type="text" id="date" name="date" class="container_text text"><input type="submit" id="test" class="action_play" value="Jugá y Ganá"> <p id="resp"> </p></form></div></div></div>' );

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
  //CONTENIDO 
var innerWheel = new Winwheel({
  'canvasId': 'canvas2',
  'textFontSize': 10,
  'numSegments': 8,
  'lineWidth'   : 1,
  'strokeStyle': 'transparent',
  'outerRadius': 110,
  // 'pointerAngle': 0,
  'innerRadius': 15,
  'textAlignment': 'center',
  'textMargin' : 0,
  'responsive': true,
  'segments': [
      { 'fillStyle': '#ff5751', 'text': 'Envío gratis'},
      { 'fillStyle': '#ffc837', 'text': 'Suerte la próxima'},
      { 'fillStyle': '#ff5751', 'text': 'Cupón de $5.000'},
      { 'fillStyle': '#ffc837', 'text': 'Casi aciertas'},
      { 'fillStyle': '#ff5751', 'text': 'Perchas'},
      { 'fillStyle': '#ffc837', 'text': 'Suerte la próxima'},
      { 'fillStyle': '#ff5751', 'text': 'Maniquies'},
      { 'fillStyle': '#ffc837', 'text': 'Casi aciertas'},
  ],
  'pins' : {
      'number'      : 16,
      'responsive' : true,
      'outerRadius' : 4,
      'margin'      : -9,
      'fillStyle'   : '#ffc837',
      'strokeStyle' : '#transparent'
  },
  'animation': {
      'type': 'spinToStop',
      'duration': 5,
      'callbackFinished': 'Mensaje()',
      /* 'callbackAfter': 'outerWheel.draw()', */
      'callbackAfter': 'drawTriangle();'
  },
  // Turn pointer guide on.
   /* 'pointerGuide' :        
   {
       'display'     : true,
       'strokeStyle' : 'red',
       'lineWidth'   : 3
   } */
});

//.........................................BORDE 

var outerWheel = new Winwheel({
      'canvasId': 'canvas2',
      'numSegments': 1,
      'lineWidth'   : 1,
      'strokeStyle': 'transparent',
      'textMargin' : 0,
      'outerRadius' : 120,
      'innerRadius' : 110,    // Set inner radius to the size of the inner wheel since the inner part of the wheel
      'responsive': true,
      'segments': [           //   is being drawn by the inner wheel we don't need to draw there.
          {'fillStyle' : '#edece9'},
      ],
      'animation':
      {
        'type': 'spinToStop',                     // Define animation more or less as normal, except for the callbackAfter().
        'duration': 5,
        'spins': 1,
        'callbackAfter' : 'drawInnerWheel()',     // Call back after each frame of the animation a function we can draw the inner wheel from.
      }
  });
  outerWheel.draw();
  innerWheel.draw(false);   // Pass false to stop it clearing the canvas and wiping the outer wheel.

  // This function is called after the outer wheel has drawn during the animation.
  function drawInnerWheel()
  {
      innerWheel.rotationAngle = outerWheel.rotationAngle;
      innerWheel.draw(false);
      drawTriangle();
  }

  //.......................................FIN BORDE 
  //Resultado por defecto:
  function calculatePrize(){
    var stopAt = (46 + Math.floor((Math.random() * 43))); 
    //240 para nro 6, 46 para numero 2
    innerWheel.animation.stopAngle = stopAt;
    outerWheel.animation.stopAngle = stopAt;
    // innerWheel.startAnimation(); Lo comente porque hacia que la ruleta comenzara a girar apenas cargaba la pagina
  };
  calculatePrize();

  //Mensaje y reinicio de la ruleta
  function Mensaje() {
    var SegmentoSeleccionado = innerWheel.getIndicatedSegment();
    document.querySelector(".message_result").innerHTML= SegmentoSeleccionado.text;
    /* alert("Elemento seleccionado:" + SegmentoSeleccionado.text + "!"); */
    //Reiniciar ruleta (tal vez no sea necesario)
    innerWheel.stopAnimation(false);
        outerWheel.stopAnimation(false);
        //  innerWheel.rotationAngle = 0;
        //  innerWheel.draw();
        //  drawTriangle();
        outerWheel.draw();
    //Fin de Reiniciar ruleta
  };

  //Indicador de resultado

  function drawTriangle()
  {
    // Get the canvas context the wheel uses.
    var ctx = innerWheel.ctx;
    ctx.strokeStyle = '#154f80';     // Set line colour.
    ctx.fillStyle   = '#154f80';     // Set fill colour.
    ctx.lineWidth   = 2;
    ctx.beginPath();              // Begin path.
    ctx.moveTo(96, 5);           // Move to initial position.
    ctx.lineTo(156, 5);           // Draw lines to make the shape.
    ctx.lineTo(126, 40);
    ctx.lineTo(97, 5);
    ctx.stroke();                 // Complete the path by stroking (draw lines).
    ctx.fill();                   // Then fill.
  };
  drawTriangle();
}
  



