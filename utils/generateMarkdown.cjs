// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
global.gblob = {};

function renderLicenseBadge(license) 
{
    if(!license)
    {
        return "No license found";
    }
    var licenseBadge=![License_badge](licenseImageLink);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
    if(!license)
    {
        
        return "No license found";
    }
    var licenseImageLink=`https://img.shields.io/badge/dynamic/json?url=https://img.shields.io/packagist/l/Georgina5-2/README-generator?style=flat-square&label=LICENSE&query=${license}`
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) 
// {

// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) =>
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
        <a href=https://github.com/Georgina5-2>${username}</a>
        You can reach out to me with additional questions to this email:<a>${email}</a>`

  };
// function generateMarkdown(data) {
//   return `# ${data.title}`;
// }

module.exports = GenerateMarkdown;
