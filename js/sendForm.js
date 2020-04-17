//ENVIO DE FORMULARIO
function send() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var susc = document.getElementById('susc').value; 
  var dat = document.getElementById('date').value; 
  
  var dataen = 'name='+name+'&email='+email+'&susc='+susc+'&dat='+dat;


  $.ajax({
      type: 'post',
      url: 'send.php',
      data: dataen,
      success:function(res) {
          $('#resp').html(res);
      },
  });

  
  return false;
}