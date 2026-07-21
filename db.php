<?php
$host = "sql103.infinityfree.com";
$user = "if0_42463932";
$pass ="LCSKpzdWttjkzf"; 
$dbname = "if0_42463932_my_project_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>