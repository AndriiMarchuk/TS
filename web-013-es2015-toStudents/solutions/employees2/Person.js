export class Person {
    constructor(name) {
        this._name = name;
    }

    getInfo() {
        return `person: ${this.name}`
    }

    set name(name) {
        if (name.length<3) throw `incorrect name ${name}`
        this._name = name
    }

    get name() {
        return this._name
    }
}