import {Employee} from "./Employee"
let _employees = []

export class Employees {
    static add(employee) {
        if (!employee instanceof Employee)
            throw "Can add only employees";
        _employees.push(employee)
    }

    static list() {
        return [..._employees]
    }
}