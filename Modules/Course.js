const CourseDb = require('./CourseDb')
class Course{
  constructor(id, name, course){
    this.id = id;
    this.name = name;
    this.course = course;
  }
  CourseDb(){
    return CourseDb.dbInfo(this);
  }
}

module.exports = Course;
