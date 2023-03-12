let favoriteSnack = "Waffles";
document.write("Favorite snack: ", favoriteSnack +"<br/>");
let currentAge = 20;
document.write("Current Age: ", currentAge +"<br/>");
let maxAge = 65;
document.write("Estimated Maximum Age: ", maxAge +"<br/>");
let amountPerDay = 2;
document.write("Amount of Snacks Per Day: ", amountPerDay +"<br/>");
let yearsRemaining = maxAge - currentAge;
let totalSnacks = yearsRemaining  *amountPerDay;
document.write("You will need " + totalSnacks + " " + favoriteSnack +
 " to last you until the ripe old age of " + maxAge + ".");