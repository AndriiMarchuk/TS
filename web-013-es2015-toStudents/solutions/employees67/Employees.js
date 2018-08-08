import {Employee} from "./Employee"
require("babel-polyfill");

let _employees = new Set();
let _employeesNameIndex = new Map();

export class Employees {

    static add(employee) {
        if (!employee instanceof Employee) throw "Can add only employees";
        _employees.add(employee);

        // add value to the index by name
        // map contains name=>array of employees with this name
        let employeesByName = [];
        if (_employeesNameIndex.has(employee.name)) {
             employeesByName = _employeesNameIndex.get(employee.name);
        }
        employeesByName.push(employee);
        _employeesNameIndex.set(employee.name, employeesByName);
    }

    static remove(employee) {
        _employees.delete(employee)
    }

    // returns array of employees with this name
    static findByName(name) {
        return _employeesNameIndex.get(name)
    }

    static list() {
        return [..._employees];
    }

    static employeesArr() {
        return _employees.toJSON();
    }

    static *[Symbol.iterator]() {
        yield* Employees.employeesArr();
    }
    
    static *names() {
        yield* employeesArr().map(e=>e.name);
    }

    static averageSalary() {
        return Math.round(
            _employees.toJSON().map(e=>e.salary).reduce((a,b)=>a+b)
            /_employees.toJSON().length)
    }
}

