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

  
  // TODO: Create a function to generate markdown for README
 
  
  module.exports = generateMarkdown;