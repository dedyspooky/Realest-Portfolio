<?php
$fname = $_POST["FName"];
$lname = $_POST["LName"];
$email = $_POST["Email"];
$message = $_POST["message"];

$mailheader = "From:".$name."<".$email.">\r\n";
$recipient = "aviralale@gmail.com";
$subject = "Client";
mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo'<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/thankyou.css">
    <link rel="shortcut icon" href="../Media/logo.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.0/css/all.css">
    <title>Thank You!!</title>
</head>

<body>
    <div id="container-positioning">
        <div class="container">
            <div class="thankyou">
                <h2 class="thankyou-text">
                    Thank you for Contacting me :)<br>
                    You will be soon notified.
                </h2>
                <h4 class="redicect-text">
                    <a href="index.html">Go back-></a>
                </h4>
            </div><div class="counter">
                <div class="loader"></div>
        </div>
        </div>
        <div class="penguin-container">
            <div class="left-mountain"></div>
            <div class="back-mountain"></div>
            <div class="sun"></div>
            <div class="penguin">
                <div class="penguin-head">
                    <div class="face left"></div>
                    <div class="face right"></div>
                    <div class="chin"></div>
                    <div class="eye left">
                        <div class="eye-lid"></div>
                    </div>
                    <div class="eye right">
                        <div class="eye-lid"></div>
                    </div>
                    <div class="blush left"></div>
                    <div class="blush right"></div>
                    <div class="beak top"></div>
                    <div class="beak bottom"></div>
                </div>
                <div class="shirt">
                    <div></div>
                    <p></p>
                </div>
                <div class="penguin-body">
                    <div class="arm left"></div>
                    <div class="arm right"></div>
                    <div class="foot left"></div>
                    <div class="foot right"></div>
                </div>
            </div>

            <div class="ground"></div>
        </div>
        <script src="../thankyou.js"></script>
</body>

</html>';
?>