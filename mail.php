<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "lubosgulan@seznam.cz";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="containerwe">
        <h1>ĎAKUJEME ŽE STE NÁS KONTAKTOVALI. HNEĎ AKO NÁM PRÍDE SPRÁVA SA OZVEME!</h1>
        <p class="back">Choď späť na <a href="index.html">Domovská stránka</a>.</p>
        
    </div>
</body>
</html>
';
?>