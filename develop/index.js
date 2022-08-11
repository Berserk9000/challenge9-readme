// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation ",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project for?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for this project: ",
    choices: ["OPEN", "MIT", "NONE",],
  },
  {
    type: "input",
    name: "contribute",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: ",
  },
];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app

    

// Function call to initialize app
init();