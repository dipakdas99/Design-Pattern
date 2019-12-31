const Singleton = (()=>{
  let course;
  const assignCourse = () =>{
    console.log('second')
    const course = new Object('JavaScript');
    return course;
  }

  return {
    getInstance : () =>{
      if(!course){
        console.log('first')
        course = assignCourse;
      }
      console.log('Third')
      return course;
    }
  }
})();

const first = Singleton.getInstance;
// const second = Singleton.getInstance;
console.log(first)
//if (first === second){
  //console.log("Go to course");
//}else{
  //console.log("Buy Now");
//}
