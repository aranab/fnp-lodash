var _ = require("lodash");

var employees = [
    { name: "John", salary: 50000 },
    { name: "Susan", salary: 60000 },
    { name: "Greg", salary: 100000 },
    { name: "Mary", salary: 120000 },
];

var dueForARasie =  _.filter(employees, function(employee) {
    return (employee.salary < 70000);
});

// for (let i = 0; i < employees.length; i++) {
//     const employee = employees[i];
//     if (employees.salary < 70000) {
//         dueForARasie.push(employee);
//     }    
// }

console.log(dueForARasie);
