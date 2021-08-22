// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'


//DANS REVIEW ANSWER
// function Developer(name, tech) {
//     this.name = name;
//     this.tech = tech;
//     this.introduction = () => {
//         console.log(`${this.name} loves ${this.tech}`);
//     }
// }

// const user = new Developer("Sheyla", "all of it");


// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object


// MY ANSWER**************
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {(`hi this is ${this.name} I like ${this.tech}`);
};
}
const person1 = new Developer ("Sheyla","All of it");


person1.introduction();