// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');
//child class of manager
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;

    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return "Manager"
    }

}

module.exports = Manager;