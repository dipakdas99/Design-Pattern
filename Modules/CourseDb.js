const CourseDb = () => {
    return{
        dbInfo: (course) => {
            console.log('Course id: ' + course.id + '...Course title: ' + course.course);
        }
    }
}


module.exports = CourseDb();
