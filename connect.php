<?php
    if(isset($_POST['submit'])) {

        $Website_Name=$_POST['Website_Name'];
        $Password=$_POST['Password'];

        $host='localhost';
        $user='root';
        $pass='';
        $dbname='Password_Manager';

        $conn = mysqli_connect($host,$user,$pass,$dbname);

        $sql = "INSERT INTO user_data(Website_Name,Password) values ('$Website_Name','$Password')";
        if(mysqli_query($conn,$sql)){
            echo "Data Saved Successfully";
        }else{
            echo "Error in Saving Password" . $sql . "<br>" . mysqli_error($conn);;
        }
        mysqli_close($conn);
    }
?>