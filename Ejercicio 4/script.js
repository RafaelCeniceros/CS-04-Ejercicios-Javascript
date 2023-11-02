let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
function compareArrays(arr1, arr2) {
  let commonCourses = "";

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonCourses += arr1[i];
        if (i !== arr1.length - 1) {
          commonCourses += " , ";
        }
        break; 
      }
    }
  }

  if (commonCourses.length > 0) {
    console.log(`Common courses: ${commonCourses}`);
  } else {
    console.log("No common courses");
  }
}

compareArrays(student1Courses, student2Courses);

