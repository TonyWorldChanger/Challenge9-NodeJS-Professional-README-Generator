// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown =require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
       type:"input",
       name:"Project Title",
       message:"What is the your project's title?", 
    },
    {
        type:"input",
        name:"Installation",
        message:"How do you install your application?", 
     },
     {
        type:"input",
        name:"Instructions",
        message:"What instructions does the user need to follow?", 
     },
     {
        type:"input",
        name:"Credits",
        message:"Do you have any credits to add?", 
     },
     {
        type:"input",
        name:"Usage",
        message:"How to use this app?", 
     },
     {
        type:"input",
        name:"License",
        message:"What liscense did you use?", 
     },
     {
        type:"input",
        name:"GitHub",
        message:"GitHub username: ",
     },
     {
        type:"input",
        name:"E-mail",
        message:"Email",
     },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
