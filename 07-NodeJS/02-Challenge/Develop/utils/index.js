// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
    },
    
    {type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
    },
    
    {type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
    },
    
    {type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
    },
    
    {type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    
    {type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
    },
    
    {type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error(`Error writing to file ${fileName}:`, err);
    } else {
        console.log(`Successfully wrote to ${fileName}`);
    }
});
}

// TODO: Create a function to initialize app
//function init() {}
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
  
      // Generate the README markdown content
      const markdownContent = generateMarkdown(answers);
  
      // Write the content to a README file
      writeToFile('README.md', markdownContent);
    } catch (error) {
      console.error('Error during initialization:', error);
      console.log('Please check your inputs and try again.');
    }
  }
// Function call to initialize app
init();
