// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  let message = 'How are you?';

  if (name.length > 0) {
    let message = 'Hello ' + name;
    console.log(message);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  let callout = 'Outside of the loop';
  let counter = 5;

  while (counter > 0) {
    let callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    let line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      let element = line[i];
      console.log(element);
    }
  }
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
