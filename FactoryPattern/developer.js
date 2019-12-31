const Servent = require('./Servent')

class Developer{
  constructor(name,age,earnings,type,level){
    this.name = name;
    this.age = age;
    this.earnings = earnings;
    this.type = type;
    this.level = level;
  }

  toString(){
    return JSON.stringify(this)
  }
}

module.exports = Developer;
