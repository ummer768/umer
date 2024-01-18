function removeDivisibleBy5And11(arr) {
    // Filter out elements divisible by both 5 and 11
    const filteredArray = arr.filter((num) => num % 5 !== 0 || num % 11 !== 0);
  
    return filteredArray;
  }
  
  // Example usage:
  const originalArray = [5, 10, 15, 22, 25, 30, 33, 40, 55, 60, 66, 70];
  const newArray = removeDivisibleBy5And11(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("New Array:", newArray);
  