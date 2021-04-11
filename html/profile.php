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

        foreach ($json_arr as $key => $value) {
            if ($value['userID'] == $_POST['userID']) {

                $json_arr[$key]['recCalories'] = (float)$_POST['Calories'];
                $json_arr[$key]['recVeg'] = (float)$_POST['Water'];
                $json_arr[$key]['recWater'] = (float)$_POST['Veggies'];
                $json_arr[$key]['recProtein'] = (float)$_POST['Protein'];
            }
        }

        // encode array to json and save to file
        file_put_contents('../db/userData.json', json_encode($json_arr));
    }
?>

<script>
    window.location.href = '../html/profile.html';
</script>
