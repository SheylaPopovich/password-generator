const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require("./generateMarkdown")



const questions = [
     {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "location",
        message: "Where are you located?",
       
    },
    {
        type: "input",
        name: "bio",
        message: "Tell us about yourself.",
       
    },
    {
        type: "input",
        name: "linked URL",
        message: "Insert your LinkedIn URL.",
       
    },
    {
        type: "input",
        name: "GitHub",
        message: "Insert your GitHub URL.",
       
    },
    {
        type: "list",
        name: "contributors",
        message: "Are you open to contributors?",
        choices: ["Yes", "No"],
    }];


    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(),fileName),data);
    }
    
    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
            .then((inquirerAnswers) => {
                console.log("Generating.... Please wait....");
                writeToFile("index.html", generateMarkdown({ ...inquirerAnswers }));
            });
    }

    // Function call to initialize app
    init();
    