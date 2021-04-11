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
        $GLOBALS['userID'] = rand(1000000,9999999);
        // add data
        $json_arr[] = array('userID'=>$GLOBALS['userID'], 'email'=>$_POST['Email'], 'password'=>$_POST['Password']);
        // encode json and save to file
        file_put_contents('../db/logins.json', json_encode($json_arr));

        $data2 = file_get_contents('../db/userData.json');
        $json_arr2 = json_decode($data2, true);
        $json_arr[] = array('userID'=>$GLOBALS['userID'], 'name'=>$_POST['Name'], 'curCalories'=>0, 'curVeg'=>0, 'curWater'=>0, 'curProtein'=>0, 'recCalories'=>2000, 'recVeg'=>3, 'recWater'=>125, 'recProtein'=>50);
        file_put_contents('../db/userData.json', json_encode($json_arr));
      }

?>

<script>
    window.location.href = '../html/home.html';
    document.cookie = "<?php $GLOBALS['userID']; ?>";
</script>