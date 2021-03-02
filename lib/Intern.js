// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
//child class of intern
class Intern extends Employee {
constructor(id,email,school){
    super(id);
    this.email = email;
    this.school = school;
}
 
getSchool(){
return this.school
}

getRole(){
    return "Intern";
}

}
module.exports = Intern;