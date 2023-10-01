// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const username = (prompt(`What is your username?`))
alert(`Hello ${username}! Let´s get started!`);

// Step 2 - Food choice
// Your code goes here
const selectMenu = prompt(
  `Select from the menu: 
  1 - Pizza 
  2 - Pasta 
  3 - Salad 
  Please enter the number of your choice.`
);
let selectedMenu;

if (selectMenu === "1") {
  selectedMenu = "Pizza"
}
else if (selectMenu === "2") {
  selectedMenu = "Pasta"
}
else if (selectMenu === "3") {
  selectedMenu ="Salad"
}
else {
alert(`Invalid choise, please try again.`);
exit(1);
}
alert(`You chose ${selectedMenu}.`) 

// Step 3 - Subtype choice
// Your code goes here

let subGenre = "";
let subGenreNames = [];

switch (selectedMenu) {
  case "Pizza":
  subGenre = prompt(
    `Select a pizza:
    1 - Funghi
    2 - Calzone
    3 - Vegetariana
    Please enter the number of your choice.`
  );
  subGenreNames = ["Funghi", "Calzone", "Vegetariana"];
  break;

  case "Pasta":
  subGenre = prompt(
    `Select a pasta:
    1 - Vegan pasta
    2 - Bacon pasta
    3 - Chicken pasta
    Please enter the number of your choice.`
  );
  subGenreNames = ["Vegan pasta", "Bacon pasta", "Chicken pasta"];
  break;

  case "Salad":
    subGenre = prompt(
      `Select a salad:
      1 - Ceasar salad
      2 - Vegan salad
      3 - Fetacheese salad
      Please enter the number of your choice.`
    );
    subGenreNames = ["Ceasar salad", "Vegan salad", "Fetacheese salad"];
    break;

    default:
    alert(`Invalid choice.`);
    exit(1);
}
console.log(subGenre);
if (subGenre === "1") {
  alert(`You chose ${subGenreNames[0]}.`)
}
else if (subGenre === "2") {
  alert(`You chose ${subGenreNames[1]}.`)
}
else if (subGenre === "3") {
    alert(`You chose ${subGenreNames[2]}.`)
}
else alert(`Something went wrong!`);

// Step 4 - Age
// Your code goes here
let adultKids = []
const age = prompt(`Is this food for a child or an adult? Type your age:`)
if (age <= 17 ) {
  alert(`You get the kids price!`)
  adultKids = ["kids size"]
}
else if (age >= 18 ) {
  alert(`You will pay the adult price!`)
  adultKids = ["original size"]
}
// Step 5 - Order confirmation
// Your code goes here

let summary = subGenre
if (subGenre =="1") {
  alert(`Thank you ${username} for your order! You chose ${subGenreNames[0]} in ${adultKids}.`)
}
else if (subGenre =="2") {
  alert(`Thank you ${username} for your order! You chose ${subGenreNames[1]} in ${adultKids}.`)
}
else if (subGenre =="3") {
  alert(`Thank you ${username} for your order! You chose ${subGenreNames[2]} in ${adultKids}.`)
}

// Problems! This code would be easier if I knew some way to let the [] be something like [$]. So the variable would pick the number automaticly?



// const summary = alert(`Thank you ${username} for your order! You chose ${subGenreNames} in ${adultKids}.`);