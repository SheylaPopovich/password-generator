// Array.prototype.forEach()
const myArray = [2, 4, 6, 8];

myArray.forEach((num) => console.log(num));

// String.prototype.toLowerCase()
//CREATE AN OBJECT LIKE BELOW THIS IS AN EXAMPLE OF "OBJECT LITERAL"
const person = {
  name: 'Eric',    // THESE ARE KNOWN AS PROPERTIES
  age: 28,
  occupation: 'Full-Stack Web Developer',
};

console.log(person.occupation.toLowerCase());

// Prototype methods on constructor function
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

const superman = new Movie('Superman', 1978);
// ASSOCIATE THE PROTOTYPE TO THE CLASS  SEE LINE 17 "Movie"
Movie.prototype.logInfo = function () {
  console.log(`${this.title} was released in ${this.releaseYear}`);
};

superman.logInfo();
