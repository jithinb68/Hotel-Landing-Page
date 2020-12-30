<?php

$firstName=$_POST["firstName"];
$lastName=$_POST["lastName"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$noOfAdults=$_POST["noOfAdults"];
$noOfKids=$_POST["noOfKids"];
$DOA=$_POST["DOA"];
$DOD=$_POST["DOD"];
$EmailTo = "sujith.nair711@gmail.com";
$Subject = "Madhava Inn Booking Information";
$headers = "From: Madhava Inn <noreply@madhavainn.com>\n"; 
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// prepare email body text
$Body = '<html><head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title></title>
        </head><body>';
$Body .= '<table rules="all" style="border: 1px solid #d8c8c3;width: 95%;" cellpadding="10">';
$Body .= "<tr><td style='width: 200px;'><img src='https://madhavainn.in/assets/images/logo.svg' /></td><td style='text-align: center;font-size: 25px;text-transform: uppercase;color: #e75b44;'>Booking Information</td></tr>";
$Body .= "<tr><td style='background: #e86c4d;color: #fff;text-align: right;    width: 200px;'><strong>First Name</strong></td><td style='font-size: 14px;text-align: justify;color: #212121;'>$firstName</td></tr>";
$Body .= "<tr><td style='background: #e86c4d;color: #fff;text-align: right;    width: 200px;'><strong>Last Name</strong></td><td style='font-size: 14px;text-align: justify;color: #212121;'>$lastName</td></tr>";
$Body .= "<tr><td style='background: #e86c4d;color: #fff;text-align: right;    width: 200px;'><strong>Email</strong></td><td style='font-size: 14px;text-align: justify;color: #212121;'>$email</td></tr>";
$Body .= "<tr><td style='background: #e86c4d;color: #fff;text-align: right;    width: 200px;'><strong>Phone Number</strong></td><td style='font-size: 14px;text-align: justify;color: #212121;'>$phone</td></tr>";
$Body .= "<tr><td style='background: #e86c4d;color: #fff;text-align: right;    width: 200px;'><strong>Adults</strong></td><td style='font-size: 14px;text-align: justify;color: #212121;'>$noOfAdults</td></tr>";
$Body .= "<tr><td style='background: #e86c4d;color: #fff;text-align: right;    width: 200px;'><strong>Childrens</strong></td><td style='font-size: 14px;text-align: justify;color: #212121;'>$noOfKids</td></tr>";
$Body .= "<tr><td style='background: #e86c4d;color: #fff;text-align: right;    width: 200px;'><strong>Check-In Date</strong></td><td style='font-size: 14px;text-align: justify;color: #212121;'>$DOA</td></tr>";
$Body .= "<tr><td style='background: #e86c4d;color: #fff;text-align: right;    width: 200px;'><strong>Check-Out Date</strong></td><td style='font-size: 14px;text-align: justify;color: #212121;'>$DOD</td></tr>";

$Body .= "</table>";
$Body .= "</body></html>";

// send email
$success = mail($EmailTo, $Subject, $Body, $headers);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>