import {Employees} from "./Employees"
import {Employee} from "./Employee"

Employees.add(new Employee("John","manager",1000));
Employees.add(new Employee("Bill","developer",5000));
Employees.add(new Employee("James","director",4000));

let employees = Employees.list()

let html = "";
for (let e of employees) {
    html += e.getInfo()+"<br>"
}
let avg = Employees.averageSalary();

for (let e of employees) {
    e.total().then(total=> {
            html += `${e.name} total: ${total}<br>`
            render()
        }
    )
}
html += `Average salary: ${avg} <br>`

let names = [...Employees.names()];
html += `Names: ${names.join(", ")} <p>`

for (e of Employees) {
    html+= e.getInfo()+"<br>"
}

function render() {
    document.getElementById("employees").innerHTML = html;
}

render();