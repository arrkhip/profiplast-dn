<?php

$recepient = "arkhipovvladislav@mail.ru";
$sitename = "profiplast-dn.ru";

$phone = trim($_POST["tel"]);
$message = "Телефон: $phone \nНе забудь перезвонить!";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");