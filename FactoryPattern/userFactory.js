const Manager = require('./manager')
const Developer = require('./developer')

const userFactory = (name,age,earnings,type,level='l7') =>{
  if(type === 'manager'){
    return new Manager(name,age,earnings,type);
  }
  else if(type === 'developer'){
    return new Developer(name,age,earnings,type,level);
  }
}

module.exports = userFactory;
