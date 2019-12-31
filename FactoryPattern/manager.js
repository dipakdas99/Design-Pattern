const Servent = require('./servent');

class Manager{
  constructor(name,age,earnings,type){
    this.name = name;
    this.age = age;
    this.earnings = earnings;
    this.type = type;
  }
  toString(){
    return JSON.stringify(this)
  }
}

module.exports = Manager;
