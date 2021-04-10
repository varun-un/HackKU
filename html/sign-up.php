<?php
    if($_SERVER['REQUEST_METHOD']=='POST')
    {
        add();
    } 
?>

<?php
      function add(){
        // read json file
        $data = file_get_contents('../db/logins.json');

        // decode json
        $json_arr = json_decode($data, true);

        // add data
        $json_arr[] = array('userID'=>rand(1000000000,9999999999), 'email'=>$_POST['Email'], 'password'=>$_POST['Password']);

        // encode json and save to file
        file_put_contents('../db/logins.json', json_encode($json_arr));
      }

?>

<script>
    window.location.href = '../html/home.html';
</script>