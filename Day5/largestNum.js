function findLargest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log("Largest Number:", num1);
  } else if (num2 >= num1 && num2 >= num3) {
    console.log("Largest Number:", num2);
  } else {
    console.log("Largest Number:", num3);
  }
}

findLargest(10, 25, 15);