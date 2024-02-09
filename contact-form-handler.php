<?php
/**$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


$email_form = 'peter.mazzloumian@gmail.com';

$email_subject = 'new form submition';

$email_body = "User Name: $name. \n".
                "User email: $visitor_email. \n".
                    "User message: $message. \n";



$to = "pedrosmazloumian@gmail.com";

$headers = "Form: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");
*/
?>