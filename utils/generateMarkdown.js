// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  }
    return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
        Licensed under the ${license} license.`;
  }
    return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Project Title
  ${data.Title}
  ## Installation
  ${data.Installation}
  ## Instructions
  ${data.Instructiosn}
  ## Usage
  ${data.Usage}
  ## Credits
  ${data.Credits}
  ## GitHub Username
  ${data.GitHub}
  ## Email
  ${data.E-mail}`;
  }

  
module.exports = generateMarkdown;
