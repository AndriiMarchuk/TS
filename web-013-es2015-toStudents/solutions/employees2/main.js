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

html += `Average salary: ${avg} <br>`

document.getElementById("employees").innerHTML = html;
