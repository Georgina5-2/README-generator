// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (answers) =>
  {

    const {title, desc, install, usage, guide, tests, license, username, email} = answers;

    return `# Project Title 
    ${title}
    # Project Description
    ${desc}
    
    # Table Of Contents:
       [Installation instructions](#Installation instructions)
       [Usage instructions](#Usage instructions)
       [Contribution Guidelines](#Contribution Guidelines)
       [Tests](#Tests)
       [License](#License)

       [Questions](#Questions)


       ## Installation instructions
        ${install}
        ## Usage instructions
        ${usage}
        ## Contribution Guidelines  
        ${guide}
        ## Tests
        ${tests}
        ## License
        ${license}
        ## Questions
        ${username}
        ${email}  
    `

  };
// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
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
      choices:['Freeware','MIT','Trial'],
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
    },

  ])
  .then((answers) => {nod
    console.log('Answers: ', JSON.stringify(answers));
     const readMePageContent = generateReadMe(answers);
     console.log('readMePageContent: ', readMePageContent);
     fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
