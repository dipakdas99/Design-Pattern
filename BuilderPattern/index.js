const CourseBuilder = require('./CourseBuilder');

const course_1 = new CourseBuilder('Javascript').makepaid(100).makeCampain().build()
const course_2 = new CourseBuilder('css').build()

course_1.toString();
course_2.toString();
