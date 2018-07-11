<?php
$captcha;
if(isset($_POST['g-recaptcha-response'])){
$captcha=$_POST['g-recaptcha-response'];
}
if(!$captcha){
    echo '<h2>Please check the the captcha form.</h2>';
    exit;
}
$secretKey = "6LdeTlAUAAAAAI3EyXLSv47kp9cdlxhM00Qah2ig";
$ip = $_SERVER['REMOTE_ADDR'];
$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
$responseKeys = json_decode($response,true);
if(intval($responseKeys["success"]) !== 1) {
    echo '<h2>You are spammer ! Get the @$%K out</h2>';
} else {
    $to  = "sic4buisness@gmail.com" ;
    $to1  = "pankov9224@yandex.ru" ;

    $subject = "Заявка";

    $message = '<p>Обратная связь</p><br><b>Имя:</b>'.$_POST['name'].' <br><b>Телефон:</b>'.$_POST['phone'].'</br><br><b>Сообщение:</b>'.$_POST['message'].'</br>';

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: От кого письмо <borodaboroda.com>\r\n";
    $headers .= "Reply-To: borodaboroda.com\r\n";

    mail($to, $subject, $message, $headers);
    mail($to1, $subject, $message, $headers);


    header('Location: ' . $_SERVER['HTTP_REFERER']);
}
?>