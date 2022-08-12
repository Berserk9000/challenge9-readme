// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseType = license.license;
    let yourLicense = ''
    if(licenseType !== ''){
      return yourLicense  = `![License: ${licenseType}](https://img.shields.io/badge/License-${licenseType}-yellow.svg)`; 
    }
    
    return yourLicense;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let licenseType = license.license;
    if(licenseType !== ''){
    return (`- [License](#license)`)
    }
  
    return '';
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    let licenseType = license.license;
    let yourLicenseSection = `This application is covered by the ${licenseType} license.`;
    return yourLicenseSection;
  }

  
  // TODO: Create a function to generate markdown for READMEfunction generateMarkdown(data)
  function generateMarkdown (data){
  return `
  ${data.projectTitle}
  ${renderLicenseBadge(data)}<br/>
    
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  
  ## Installation
   ${data.installation}
  
  ## Usage
   ${data.usage}
  
  ## License
  ${renderLicenseSection(data)}<br/>
  
  ## Contributors
  ${data.contribute}
  
  ## Tests
   ${data.tests}
  

  Find me on GitHub: [${data.username}](https://github.com/${data.username})
  Email me with any questions: ${data.email}
      `;
}

 
  
  module.exports = generateMarkdown;