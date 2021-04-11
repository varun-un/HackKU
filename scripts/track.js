const smartFill = function() {

    function autofill(foodName) {
        let caloProt = [0, 0, 0, 0]; //at 0 is calories, at 1 is water, at 2 is vegetables, at 3 is protein

        foodName = foodName.toLowerCase().trim();

        if ((foodName === "water cup") || (foodName === "cup of water") || (foodName === "water")) {
            caloProt[1] = 8;
        } //this makes it so the array holds one cup of water, since 1 cup is 8 fl oz

        if ((foodName === "veggies") || (foodName === "veggie") || (foodName === "vegetables") || (foodName === "vegetable") || (foodName === "carrot") || (foodName === "carrots") || (foodName === "spinach") || (foodName === "salad") || (foodName === "squash") || (foodName === "cucumber") || (foodName === "cucumbers") || (foodName === "tomatoes") || (foodName === "tomato") || (foodName === "green beans") || (foodName === "peas")) {
            caloProt[2] = 1;
        } //each of these keywords correspond to one serving of vegetables

        if ((foodName === "pizza") || (foodName === "pizza slice") || (foodName === "slice of pizza")) {
            caloProt[0] = 200; //calories
            caloProt[3] = 9; //protein
        }
        if (foodName === "cheeseburger") {
            caloProt[0] = 840;
            caloProt[3] = 47;
        }
        if ((foodName === "bread") || (foodName === "bread slice") || (foodName === "sliced bread") || (foodName === "slice of bread")) {
            caloProt[0] = 69;
            caloProt[3] = 4;
        }
        if ((foodName === "macaroni and cheese") || (foodName === "macaroni & cheese") || (foodName === "mac & cheese")) {
            caloProt[0] = 230;
            caloProt[3] = 7;
        }
        if (foodName === "burrito") {
            caloProt[0] = 380;
            caloProt[3] = 14;
        }
        if ((foodName === "spaghetti and meatballs") || (foodName === "spaghetti & meatballs")) {
            caloProt[0] = 412;
            caloProt[3] = 20;
        }
        if (foodName === "steak") {
            caloProt[0] = 207;
            caloProt[3] = 35;
        }
        if ((foodName === "fish") || (foodName === "salmon")) {
            caloProt[0] = 233;
            caloProt[3] = 25;
        }
        if ((foodName === "chili") || (foodName === "stew") || (foodName === "beef stew")) {
            caloProt[0] = 177;
            caloProt[3] = 7;
        }
        if ((foodName === "fries") || (foodName === "french fries") || (foodName === "potato french fries")) {
            caloProt[0] = 267;
            caloProt[3] = 3;
        }
        return (caloProt);
    }

    var name = document.getElementById("foodInput").value;
    var results = autofill(name);

    document.getElementById("calInput").value = results[0];
    document.getElementById("waterInput").value = results[1];
    document.getElementById("vegInput").value = results[2];
    document.getElementById("proteinInput").value = results[3];

    console.log(name);
}