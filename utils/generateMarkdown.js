// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
global.gblob = {};

function renderLicenseBadge(license) {
  if (!license) {
    return "No license found";
  }
  var licenseImageLink = `https://img.shields.io/github/license/Georgina5-2/README-Generator`;
  return "![GitHub](https://img.shields.io/github/license/Georgina5-2/README-Generator)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license) {
//     return "No license found";
//   }
//   var licenseImageLink = `https://img.shields.io/github/license/Georgina5-2/README-Generator`;
//   return licenseImageLink;
// }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license)
//https://img.shields.io/badge/dynamic/json?url=<URL>&label=<LABEL>&query=<$.DATA.SUBDATA>
//https://shields.io/category/license
// {

// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  const {
    title,
    desc,
    install,
    usage,
    guide,
    tests,
    license,
    username,
    email,
  } = answers;

  return `
  ${renderLicenseBadge(license)}
  # Project Title 
  ${answers.title}
  # Project Description
  ${answers.desc}

  # Table Of Contents:
  
 * [Installation Instructions](#installation-instructions)
 * [Usage Instructions](#usage-instructions)
 * [Contribution Guidelines](#contribution-guidelines)
 * [Tests](#tests)
 * [License](#license)
 * [Questions](#questions)


  ## Installation instructions
  ${answers.install}
  ## Usage instructions
  ${answers.usage}
  ## Contribution Guidelines  
  ${answers.guide}
  ## Tests
  ${answers.tests}
  ## License
  ${renderLicenseBadge(license)}
  ## Questions 
  You can reach out to me with additional questions to this email:
  [${answers.email}](mailto:${answers.email})<br/>
  Github: [${answers.username}](https://github.com/Georgina5-2)`

};

export default generateMarkdown;
