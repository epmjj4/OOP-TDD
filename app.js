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
            const manager = new Manager(response.managerName, response.managerEmail, response.managerID, response.officeNum);
            //push all the input to emp array
            empArr.push(manager);
            idARR.push(response.managerID);
            teamChoices();
        })

    }

    const teamChoices = () => {
        inquirer.prompt([{
            type: 'list',
            name: 'empType',
            message: 'Which type of employee do you want to add?',
            choices: ["Intern", "Engineer", "I'm finished!"]
        }]).then(response => {
            // switch to toggle between assigned function
            switch (response.empType) {
                case 'Intern':
                    createIntern();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                    default:
                    createEmpTeam();
            }
        })
    }
    // function to prompt user input for intern information
    const createIntern = () => {
        inquirer.prompt([{
                type: 'input',
                message: "What is your intern's name?",
                name: "internName"
            },
            {
                type: 'input',
                message: "What is your intern's id?",
                name: "internId"
            },
            {
                type: 'input',
                message: "What is your intern's email?",
                name: "internEmail"
            },
            {
                type: 'input',
                message: "What is your intern's school?",
                name: "internSchool"
            },
        ]).then(answer => {
            // grab all input about the intern from the answers hash
            const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
            //push the intern variable to the employee array
            empArr.push(intern);
            // push only the internalID answer to hash to the id array
            idARR.push(answer.internId);
            //run prompts to crweate team members again
            teamChoices();
        })

    }

    const createEngineer = () => {
        inquirer.prompt([{
            type: 'input',
            message: "What is your engineer's name?",
            name: "engineerName"
        },
        {
            type: 'input',
            message: "What is your engineer's id?",
            name: "engineerId"
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: "engineerEmail"
        },
        {
            type: 'input',
            message: "What is your engineer's Github?",
            name: "engineerGithub"
        },
    ]).then(answer => {
        // grab all input about the engineer from the answers hash
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        //push the engineer variable to the employee array
        empArr.push(engineer);
        // push only the engineeralID answer to hash to the id array
        idARR.push(answer.engineerId);
        //run prompts to create team members again
        teamChoices();
    })

    }

    const createEmpTeam = () => {
        // in case the ouput directory doesn't exist, create one
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSyn(OUTPUT_DIR);
        }
        fs.writeFileSync(outputPath, render(empArr), 'utf8')
    }
managerPrompts();
}

runApp();
