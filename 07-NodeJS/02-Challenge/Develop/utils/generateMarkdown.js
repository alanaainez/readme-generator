// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
console.log(renderLicenseBadge(license));
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
  };
  return licenseLinks[license] || '';
}
console.log(renderLicenseLink(license));
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License\nThis project is licensed under the ${license} license.`;
}
console.log(renderLicenseSection(license));

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
To install the necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
${licenseSection}
For more information, see the [${data.license} License](${licenseLink}).
`;
}
module.exports = generateMarkdown;