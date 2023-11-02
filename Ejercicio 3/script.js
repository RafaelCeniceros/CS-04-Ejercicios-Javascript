/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */
let arr = [1,2,3,4,5];

function sumAndProduct(arr) {
  // your code here
  let suma = 0;
  let multiplication =1;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
    multiplication *= arr[i];
  }
  return console.log(`The sum is : ${suma} . The product is : ${multiplication}`);
}

sumAndProduct(arr);
