// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// ******The "Spread" parameter syntax allows us to represent an indefinite number of arguments as an array. ********
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
/******This is going to print the array list assigned to songs const*****/
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // return the sum of all of the Elements in an array
  // add each Element, starting with a total of 0
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
//6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// an  a "Rest" because its in a function
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
//6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
//110
console.log(additionSpread(1, 2, 3, 4, 100));
