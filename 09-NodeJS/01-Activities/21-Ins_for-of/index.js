// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

for (const value of songs) console.log(value);

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');  // this is a character that marks the end of a line of tex, it implies to start a new line. Adding Newline Characters in a String

// 2. Using multidimensional arrays
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
];

for (const [key, value] of moreSongs) {
  console.log(`${key}'s chart position is ${value}`);
}

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/
