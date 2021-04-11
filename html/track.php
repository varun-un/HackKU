<?php
    if($_SERVER['REQUEST_METHOD']=='POST')
    {
        update();
    } 
?>


<?php
    function update() {
        // read file
        $data = file_get_contents('../db/userData.json');

        // decode json to array
        $json_arr = json_decode($data, true);

        // echo($_POST['Calories']);
        // echo($value['curCalories']);
        // echo("<script>document.cookie</script>");

        foreach ($json_arr as $key => $value) {
            if ($value['userID'] == $_POST['userID']) {
                echo('hello');
                $json_arr[$key]['curCalories'] = $_POST['Calories'] + $json_arr[$key]['curCalories'];
                $json_arr[$key]['curVeg'] = $_POST['Veggies'] + $value['curVeg'];
                $json_arr[$key]['curWater'] = $_POST['Water'] + $value['curWater'];
                $json_arr[$key]['curProtein'] = $_POST['Protein'] + $value['curProtein'];
            }
        }

        // encode array to json and save to file
        file_put_contents('../db/userData.json', json_encode($json_arr));
    }
?>

<script>
    window.location.href = '../html/track.html';
</script>
