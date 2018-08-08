require("babel-polyfill");

import {Employees} from "./Employees"
import {Employee} from "./Employee"
var co = require('co');

Employees.add(new Employee("John","manager",1000));
Employees.add(new Employee("Bill","developer",5000));
Employees.add(new Employee("James","director",4000));

let html="";

let employees = Employees.list()
for (let e of Employees) {
    html += e.getInfo()+"<br>"
}

html += `Average salary: ${Employees.averageSalary()} <p>`;

let names = [...Employees.names()];
html += `Names: ${names.join(", ")} <p>`

function render() {
    document.getElementById("employees").innerHTML = html;
}

render();

Promise.all(Employees.list().map(e=>e.total()))
    .then(a=>a.forEach(total=>
        html += `total: ${total} <br>`
    ))
    .catch(a=>html += `ERROR ${a} <br>`);

html += "<br>Promise version:<br>";
for (let e of Employees) {
    e.total()
        .then(total=>
            html += `${e.name} total: ${total} <br>`)
        .catch(bonus=>
            html += `${e.name} bonus is too big (${bonus}!) <br>`)
        .then(render)
}

co(function *() {
    html += "<br>co version:<br>";
    for (let e of Employees) {
        try {
            let bonus = yield e.bonus();
            html += `${e.name} bonus: ${bonus} total: ${e.salary+bonus}<br>`;
        } catch(ex) {
            html += `${e.name} bonus is too BIG (${ex}) <br>`;
        }
        render();
    }
});

async function printBonus() {
    html += "<br>Async/await version:<br>";
    for (let e of Employees) {
        let bonus = await e.bonus();
        html += `${e.name} bonus: ${bonus} 
              total: ${e.salary+bonus}<br>`;
        render();
    }
}

