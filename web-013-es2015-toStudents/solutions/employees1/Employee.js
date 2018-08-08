import {Person} from "./Person"

export class Employee extends Person {
    constructor(name, position, salary) {
        super(name);
        this.position = position;
        this.salary = salary;
    }

    getInfo() {
        return super.getInfo()+` ${this.position} ${this.salary}`
    }
}