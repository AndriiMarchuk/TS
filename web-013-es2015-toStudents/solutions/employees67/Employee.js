import {Person} from './Person'

export class Employee extends Person {

    constructor(name, position, salary) {
        super(name);
        this.position = position;
        this.salary = salary;
    }

    getInfo() {
        return super.getInfo()+` ${this.position} ${this.salary}`
    }

    bonus() {
        var bonus = Math.round(Math.random()*1000);
        return new Promise((resolve,reject)=>
            setTimeout(()=>bonus<700?resolve(bonus):reject(bonus),1000))
    }

    total() {
        return new Promise((resolve,reject)=>
            this.bonus()
                .then(bonus=>resolve(this.salary+bonus))
                .catch(bonus=>reject(bonus))
        )
    }
}
