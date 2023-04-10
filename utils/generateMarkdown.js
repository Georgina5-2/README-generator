// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
global.gblob = {};

function renderLicenseBadge(license) 
{
    if(!license)
    {
        return "No license found";
    }
    return '[![GitHub](`https://img.shields.io/github/license/Georgina5-2/README-Generator`)](`https://github.com/Georgina5-2/README-generator`)';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
    if(!license)
    {
        
        return "No license found";
    }
    var licenseImageLink=`https://img.shields.io/github/license/Georgina5-2/README-Generator`
    return licenseImageLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) 
//https://img.shields.io/badge/dynamic/json?url=<URL>&label=<LABEL>&query=<$.DATA.SUBDATA>
//https://shields.io/category/license
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
        ${renderLicenseBadge(license)}
        ## Questions
        [${username}](https://github.com/Georgina5-2)
        You can reach out to me with additional questions to this email:[${email}](mailto:${email})`

  };

export default generateMarkdown;
