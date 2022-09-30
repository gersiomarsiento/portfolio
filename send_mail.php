<?php 
// if(!isset($_POST['submit']))
// {
//     echo 'error; you need to submit the form!';
// }
if(isset($_POST['submit'])){
    //Get mail content
    $name = $_POST['name'];
    $company = $_POST['company'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    //Validation
    // if(empty($name)||empty($visitor_email)||empty($message))
    // {
    //     echo 'name, email and message are mandatory!';
    //     exit;
    // }

    $email_from = 'bloodyserbian@gmail.com';
    $email_subject = 'New message from Portfolio';
    $email_message = "New message from: $name.\n".
                    "email address: $visitor_email\n".
                    "Message: $message";
    $to = 'bloodyserbian@gmail.com';
    $headers = "From: $email_from \r\n";

    //Send the email
    mail($to, $email_subject, $email_message, $headers);
    // Done
    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
}
?>