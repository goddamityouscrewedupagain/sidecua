<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Введите имя и фамилию ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Некоректный email ";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Пустой отзыв ";
} else {
    $message = $_POST["message"];
}

//Add your email here
$EmailTo = "donbod8@gmail.com";
$Subject = "[Sidec.ua] - shop";

// prepare email body text
$Body = "";
$Body .= "Имя и фамилия: ";
$Body .= $name;
$Body .= "\n";
$Body .= "email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Отзыв: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong";
    } else {
        echo $errorMSG;
    }
}

?>
