
// TODO: Include packages needed for this application

// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.cjs');
// const inquirer = require('inquirer');

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!'));
    
}

// TODO: Create a function to initialize app
function init()
{
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project',
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Provide a description for your project',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Provide the instructions for installing your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provided the instructions for its usage',
    },
    {
      type: 'input',
      name: 'guide',
      message: 'Contribution guidelines you would like to provide',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provided the test instructions',
    },
    {
      type: 'list',
      name: 'license',
      choices:['Apache','MIT','GPL'],
      message: 'Choose the license type',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username? ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your support email address?',
    }
  ])
  .then((answers) => {
    console.log('Answers: ', JSON.stringify(answers));
     const readMePageContent = generateMarkdown(answers);
     console.log('readMePageContent: ', readMePageContent);
     writeToFile('README.md',readMePageContent);
  });
}

// Function call to initialize app
init();
