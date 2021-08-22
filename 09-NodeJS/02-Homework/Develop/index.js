const inquirer = require("inquirer");
const fs = require("fs");
//needed to get to the specific file 
const path = require("path");

//this is where the function exports back to index file
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Include packages needed for this application



// TODO: Create an array of questions for user input
const questions = [
//put questions here
    {
    type: "input",
    name: "title",
    message: "What is the title of your repo",
},
{
    type: "list",
    name: "license",
    message: "What is the license used for this project",
    choices: ["MIT", "BSD3", "APACHE2.0", "NONE"]
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)

}

// TODO: Create a function to initialize app
function init() {
// inquirer prompt 
 inquirer.prompt(questions).then(data =>{
     console.log(data)
     writeToFile("README.md", generateMarkdown(data));
 });
}

// Function call to initialize app
init();
