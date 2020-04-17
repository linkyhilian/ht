<?php

include 'lib/MailChimp.php';

use \DrewM\MailChimp\MailChimp;

$api_key = '777bab9c043320898323556e22b854ab-us19';
$list_id = '16c03d7046';

$MailChimp  =  new  MailChimp($api_key);

if ($_POST) {
  $name= $_POST['name'];
  $email= $_POST['email'];
  $susc= $_POST['susc'];
  $dat= $_POST['dat'];


  $result = $MailChimp->post("lists/$list_id/members", [
        'email_address' => $email,
        'tags'  => array('HOTSALE'),
        'merge_fields' => ['NAME'=>$name, 'CHECKBOX'=>$susc, 'LASTDAT'=>$dat],
				'status' => 'subscribed',
			]);

  if ($MailChimp->success()) {
    /* print_r($result); */	//Mostrar array
    /*Regresa manana*/
    echo "Suerte la próxima vez";
    echo '<script type="text/javascript">', 'innerWheel.startAnimation();', '</script>'; 
    echo '<script type="text/javascript">', 'outerWheel.startAnimation();', '</script>'; 
    ///echo '<script type="text/javascript">', 'Mensaje();', '</script>'; 
  } else { 
    /* echo $MailChimp->getLastError(); */

    //SI NO ES UN NUEVO CONTACTO.... VAMOS A HACER UN GET A LA ULTIMA FECHA GUARDADA
    //......................................GET

    $subscriber_hash = MailChimp::subscriberHash($email);

      $result = $MailChimp->get("lists/$list_id/members/$subscriber_hash");
      $t = $result['merge_fields']['LASTDAT'];
        //echo "Consulta: Usuario ya existe. Fecha de ultima jugada: $t";
         
      //FECHA ACTUAL
        // echo "<br><br>";
        $newDate = date("d/m/Y");
        //echo "FECHA ACTUAL: $newDate";
        //echo "<br><br>";

      //AQUI IRIAN LAS CONDICIONES DE TIEMPO
      if ($newDate==$t) {
        //echo "Accion: Las fechas son iguales. No puede girar la ruleta";
        echo '<script type="text/javascript">', 'messageTomorrow();', '</script>'; 
      } else {
        echo "Accion: Las fechas son diferentes. Se va a girar la ruleta y se actualizaran los datos en mailchimp";
        //Actualiza los datos
        $result = $MailChimp->patch("lists/$list_id/members/$subscriber_hash", [
          'merge_fields' => ['NAME'=>$name, 'CHECKBOX'=>$susc,'LASTDAT'=>$dat]
        ]);
        echo "Se actualizaron los datos de un contacto en mailchimp";      //Funciona
        //Gira ruleta
        echo '<script type="text/javascript">', 'innerWheel.startAnimation();', '</script>'; 
        echo '<script type="text/javascript">', 'outerWheel.startAnimation();', '</script>'; 

      }
      



    /*PLAN: si $dat = $f2 ... entonces NO se gira la ruleta*/

    /*ACTUALIZACION DE CONTACTO..........PATCH REQUEST*/
      

      // $result = $MailChimp->patch("lists/$list_id/members/$subscriber_hash", [
      //  'merge_fields' => ['NAME'=>$name, 'CHECKBOX'=>$susc,'LASTDAT'=>$dat]
      //]);
      
      // print_r($result);

        //if ($MailChimp->success()) {
        /* print_r($result);	 */     //Mostrar array
        //echo "Se actualizaron los datos de un contacto en mailchimp";      //Funciona
        
       // } else {
        //echo $MailChimp->getLastError();
        //echo "Hubo un error actualizando los datos"; 
       // } 
    }
} 

?>