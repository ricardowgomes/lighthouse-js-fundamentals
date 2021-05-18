const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let lines = 0;
while (lines < ingredients.length) {
  console.log(ingredients[lines]);
  lines++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let counter = ingredients.length - 1;
while (counter >= 0) {
  console.log(ingredients[counter]);
  counter--;
}
