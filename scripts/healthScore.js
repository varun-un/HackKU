
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

