// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
//child clas of Engineer
class Engineer extends Employee {
constructor(name, id, email)

getGithub(){
    return this.github;
}

getRole() {
    return "Engineer";
}
}
