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

    static averageSalary() {
        return Math.round(
            _employees.map(e=>e.salary).reduce((a,b)=>a+b)
                /_employees.length);
    }
}