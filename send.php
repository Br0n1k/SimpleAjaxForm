<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$city = $_POST['city'];
$checkStuff = $_POST['checkStuff'];
$text = $_POST['text'];

$to  = "<somemail@something.com>";

$subject = "AjaxForm Заявка"; 

$message = 
	"<p>Заявка с ajax формы</p>  
	<p>От:<b> $name </b></p>
	<p>Телефон:<b> $phone </b></p>
	<p>E-mail:<b> $email </b></p>
	<p>City:<b> $city </b></p>
	<p>Options:<b> $checkStuff </b></p>
	<p><b>Сообщение:</b></p>
	<p>$text</p>";

$headers  = "Content-type: text/html; charset=\"utf-8\" \r\n"; 
$headers  .= "From: Heizung \r\n";

if(mail($to, $subject, $message, $headers)){
	echo 'all ok';
}
else{
	echo 'something not quite right, server error, not sent';
}

?>