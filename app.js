const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const empArr = [];
const idARR = [];

const runApp = () => {

    const managerPrompts = () => {
        inquirer.prompt([
            //objects to get input on Managers name, email, id, and office number
            {
                type: 'input',
                message: "What is your manager's name?",
                name: "managerName"
            },
            {
                type: 'input',
                message: "What is your manager's email?",
                name: "managerEmail"
            },
            {
                type: 'input',
                message: "What is your manager's id?",
                name: "managerID"
            },
            {
                type: 'input',
                message: "What is your manager's office number?",
                name: "managerOfficeNumber"
            },


        ]).then(response => {
            // variable to store all response hash for the manager's name, id, office number
            const manager = Manager(response.managerName, response.managerEmail, response.managerID, response.officeNum);
            //push all the input to emp array
            empArr.push(manager);
            idARR.push(response.managerID);
            createEmpTeam();
        })

    }

    const createEmpTeam = () => {
        inquirer.prompt([{
            type: 'list',
            name: 'empType',
            message: 'Which type of employee do you want to add?',
            choices = ["Intern", "Engineer", "I'm finished!"]
        }]).then(response => {
            // switch to toggle between assigned function
            switch (response.empType) {
                case 'Intern':
                    createIntern();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                    createEmpTeam();
            }
        })
    }

    const createIntern = () => {


    }

    const createEngineer = () => {


    }

    const createEmpTeam = () => {


    }

}

runApp();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```