//Complete the function to print out the string: This is a sentence.
let arr = ["This", "is", "a", "sentence."];
function printOutString(arr) {
  // your code here
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i != arr.length-1) {
      str = str + " ";
    }
  }
  return console.log(str);
}

printOutString(arr);
