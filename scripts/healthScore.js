function autofill (foodName)
{
  let caloProt = [0,0,0,0]; //at 0 is calories, at 1 is water, at 2 is vegetables, at 3 is protein
  
  foodName = foodName.toLowerCase().trim();
  
  if ((foodName === "water cup") || (foodName === "cup of water") || (foodName === "water")){
    caloProt[1]=8;} //this makes it so the array holds one cup of water, since 1 cup is 8 fl oz
	
  if ((foodName === "veggies") || (foodName === "veggie") || (foodName === "vegetables") || (foodName === "vegetable") || (foodName === "carrot") || (foodName === "carrots") || (foodName === "spinach") || (foodName === "salad") || (foodName === "squash") || (foodName === "cucumber") || (foodName === "cucumbers") || (foodName === "tomatoes") || (foodName === "tomato") || (foodName === "green beans") || (foodName === "peas")){
    caloProt[2]=1;} //each of these keywords correspond to one serving of vegetables
	
  if((foodName === "pizza")  || (foodName === "pizza slice"))
  {
    caloProt[0]=200; //calories
    caloProt[3]=9; //protein
  }
  if(foodName === "cheeseburger")
  {
    caloProt[0]=840; 
    caloProt[3]=47;
  }
  if((foodName === "bread") || (foodName === "bread slice") || (foodName === "sliced bread") || (foodName === "slice of bread"))
  {
    caloProt[0]=69; 
    caloProt[3]=4;
  }
  if((foodName === "macaroni and cheese") || (foodName === "macaroni & cheese") || (foodName === "mac & cheese"))
  {
    caloProt[0]=230; 
    caloProt[3]=7;
  }
  if(foodName === "burrito")
  {
    caloProt[0]=380; 
    caloProt[3]=14;
  }
  if((foodName === "spaghetti and meatballs") || (foodName === "spaghetti & meatballs"))
  {
    caloProt[0]=412; 
    caloProt[3]=20;
  }
  if(foodName === "steak")
  {
    caloProt[0]=207; 
    caloProt[3]=35;
  }
  if((foodName === "fish") || (foodName === "salmon"))
  {
    caloProt[0]=233; 
    caloProt[3]=25;
  }
  if((foodName === "chili") || (foodName === "stew") || (foodName === "beef stew"))
  {
    caloProt[0]=177; 
    caloProt[3]=7;
  }
  
  return(caloProt);
}

const calcScore = function(recCalories, recWater, recVeggie, recProtein, userCalories, userWater, userVeggie, userProtein){
  //recommended food and drink intake values
  var recCalories = 2000; //cals
  var recWater = 125; //fl oz
  var recVeggie = 3; //cups
  var recProtein = 54; //grams

  function healthScore(cal, water, veg, prot)
  {
    var healthScore = 0; //declared and initialized
    var maxHealth = 0; //this is used to standardize the healthScore at the end
    for (var i = 0; i < 6; i++)
    {
      if ((cal <= (recCalories + (recCalories/(Math.pow(2,(i+1))))) && (cal >= (recCalories - (recCalories/(Math.pow(2,(i+1)))))))){  //interval set to make sure user isn't being rewarded for eating too much or too little
        healthScore+=(Math.pow((i+1),2));} //as the loop proceeds, it gives the user more healthScore points if their caloric intake is within the smaller intervals
      if ((recCalories <= (recCalories + (recCalories/(Math.pow(2,(i+1))))) && (recCalories >= (recCalories - (recCalories/(Math.pow(2,(i+1)))))))){
        maxHealth+=(Math.pow((i+1),2));}
    }
    for (i = 1; i < recWater; i++)
    {
      if (water >= 2*i){
        healthScore++;}
      if (recWater >= 2*i){
        maxHealth++;}
    }
    for (i = 1; i < (recVeggie+4); i++) //plus 4 as extra credit towards those eating over the recommended veggies
    {
      if (veg >= i){
        healthScore+=25;}
      if (recVeggie >= i){
        maxHealth+=25;}
    }
    for (i = 4; i > 1; i--) 
    {
      if (prot >= (recProtein/i)){
        healthScore+=10;}
      if (recProtein >= (recProtein/i)){
        maxHealth+=10;}
    }
    //console.log(healthScore); //uncomment to print healthScore numerator and denominator
    //console.log(maxHealth); 
    healthScore/=maxHealth;
    healthScore*=100;
    return healthScore;
  }
  return (Math.round(healthScore(userCalories, userWater, userVeggie, userProtein)));
}

export {calcScore};

