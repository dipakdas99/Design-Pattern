const userFactory = require('./userFactory');

const santanu = userFactory('Shantanu','45', 1000000, 'manager');
const dipak = userFactory('Dipak','30', 230000, 'developer','l3');

console.log(santanu.toString());
console.log(dipak.toString())
