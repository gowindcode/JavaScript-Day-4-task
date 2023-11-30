console.log("_____________________Using Anonymous function and IIFE to getting Odd numbers_________________________");

// Using Anonymous function getting Odd numbers if input is multiple
console.log("Before Anonymous // Actual Array Numbers are:", "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]");

const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log("Odd Numbers using Anonymous function:",num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

  ////////////////Another example to get Odd number in Anonymous function if input is single 
  console.log("____________________Single input_________________");
  const printOddn = function (num) {
    if (num %2 !=0) {
        console.log("I am Odd Number:", num);
    } else {
        console.log("I am Not a ODD NUMBER:", num);
    }
};
printOddn(7);
printOddn(8);






  console.log("___________________________________________________________________________");
  
  // Using IIFE getting Odd numbers
  console.log("Before IIFE // Array Numbers are:","[21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 55, 56, 57, 58, 59, 60]");
  (function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log("After using IFFE function Odd Numbers is :", num, (num % 2 !==0));
      }
    });
  })([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 55, 56, 57, 58, 59, 60]);

  





  
  console.log("_____________________Using Anonymous function and IIFE to convert Title Caps in string Array_________________________");

  // Using Anonymous function for Title Caps

const noTitleCaps = ['apple', 'banana', 'cherry', 'drumstick', 'fruits', 'guvava', 'graps'];

console.log("Before Anonymous Actual Array:", noTitleCaps);
const convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  };
  
  console.log("After using Anonymous function to get Title Caps result is:",convertToTitleCaps(['apple', 'banana', 'cherry', 'drumstick', 'fruits', 'guvava', 'graps']));
  
  //Title caps pera with captial and small letter mixing

function toTitleCase(inputString) {
    return inputString
      .toLowerCase()
      .split(' ')
      // .replace(/^[, ]/g, '')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  const userInputString = "This is a saMple title case example in gUvI zEN class tAsK";
  const titleCaseString = toTitleCase(userInputString);
  
  console.log("Before Title caps ===>", userInputString);
  console.log("After Title caps ===>",titleCaseString);

  //output => This Is A Sample Title Case Example In Guvi Zen Class Task

  // Using IIFE for titleCaps
  const titleCapsArray = (function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  })(['america', 'british', 'canada', 'dutch', 'europe', 'france', 'greece']);
  console.log("Before IIFE:", "'america', 'british', 'canada', 'dutch', 'europe', 'france', 'greece'");
  console.log("After using IIFE to get Title Caps result is:",titleCapsArray);
 
  





console.log("_____________________Using Anonymous function and IIFE to get Sum of all numbers in an array_________________________");

  // Anonymous function to get Sum in Array
const sumArray = function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  };
  
  console.log("Using Anonymous function Array Sum is:",sumArray([1, 22, 33, 44, 55]));
  console.log("Actual Array is:", "[1, 22, 33, 44, 55]");
  // IIFE to get all numbers Sum
  const arraySum = (function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  })([1, 22, 33, 44, 55]);
  console.log("Using IIFE function Array Sum is:", arraySum);
 
  





  console.log("_____________________Using Anonymous function and IIFE to find and return Prime Numbers in an array_________________________");

  // Anonymous function
const getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  };
  
  console.log("Actual Array:", "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 21, 23, 27, 32]");
  console.log("Using Anonymous function to find Prime Numbers result is:",getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 21, 23, 27, 32]));
  
  // IIFE
  const primeNumbers = (function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 21, 23, 27, 32]);
  console.log("Using IIFE Prime Numbers are:", primeNumbers);
  





  console.log("_______________________Using Anonymous function & IIFE to find Palindromes result_________________");


  // Anonymous function
const getPalindromes = function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    });
  };
  
  console.log("Before Array:", "['mom','dad','level', 'hello', 'civic', 'world', 'reviver']");
  console.log("Anonymous function Palindrome results are:",getPalindromes(['mom','dad','level', 'hello', 'civic', 'world', 'reviver']));
  
  // IIFE
  const palindromesArray = (function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    });
  })(['mom','dad','level', 'hello', 'civic', 'world', 'reviver']);
  console.log("Before IIFE Array:", "['mom','dad','level', 'hello', 'civic', 'world', 'reviver']");
  console.log("After using IIFE Palindrome result Array:",palindromesArray);
  




  console.log("_____________________Return median of two sorted arrays of the same size_________________________");

  // Anonymous function to find and return Median
const findMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    // console.log("Merged Array:",mergedArray);
    const length = mergedArray.length;
    // console.log("length:",length);
    const mid = Math.floor(length / 2);
    // console.log("Math.floor = mid:",mid);
    return length % 2 === 0 ? (mergedArray[mid - 1] + mergedArray[mid]) / 2 : mergedArray[mid];
  };

  console.log("Using Anonymous function Find Median Result is:",findMedian([1, 3, 5, 7], [2, 4, 6, 8]));
  
  // IIFE
  const median = (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    return length % 2 === 0 ? (mergedArray[mid - 1] + mergedArray[mid]) / 2 : mergedArray[mid];
  })([1, 3, 5, 7], [2, 4, 6, 8]);
  console.log("Using IIFE Median result is:",median);






  console.log("_____________________Remove duplicates from an array_________________________");

  // Anonymous function to remove Duplicates
function RemoveDuplicates () {
const actual = [1, 2, 2, 3, 4, 4, 5];
    return actual.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  };
  
  console.log("Actual Array:","[1, 2, 2, 3, 4, 4, 5]");
  console.log("Duplicates Removed Array:",RemoveDuplicates());
  
  // IIFE to Remove duplicates
  const uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  })([1, 2, 2, 3, 4, 4, 5]);
  console.log("IIFE duplicates Removed Array:",uniqueArray);
  





  console.log("_____________________Rotate an array by k times_________________________");

  // Anonymous function
const rotateArray = function(arr, k) {
  const rotations = k % arr.length;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
};
console.log("Actual Array [1, 2, 3, 4, 5] & k [2]")
console.log("Rotate Array result is:",rotateArray([1, 2, 3, 4, 5], 2));

// IIFE - Rotate an array by k times
const rotated = (function(arr, k) {
  const rotations = k % arr.length;
//   console.log(rotations);
  return arr.slice(rotations).concat(arr.slice(0, rotations));
})([1, 2, 3, 4, 5], 2);
console.log("Using IIFE Rotate Array result is:", rotated);


console.log(`
\\
\\\
\\
\\\
\\
arrow functions
\\
\\\
\\
\\\
\\
`);


console.log("_____________________ Use arrow functions and Print odd numbers in an array_________________________");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 68, 69, 70, 71, 72, 73, 74, 75, 78, 79, 80, 81, 82, 85, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, ,101, 102];
console.log("Actual Array:", numbers);

const printOddNumbersArrow = arr => arr.forEach(num => num % 2 !== 0 && console.log("Arrow function Odd number result is:",num));

printOddNumbersArrow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 68, 69, 70, 71, 72, 73, 74, 75, 78, 79, 80, 81, 82, 85, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, ,101, 102]);


console.log("_____________________ Use arrow functions and Convert all the strings to title caps in a string array_________________________");

const convertToTitleCapsArrow = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log("Before Title Caps:","'this taks for title caps', 'yEs this task for titleCaps', 'cherrs'");
console.log("After converted to Title Caps results is:",convertToTitleCapsArrow(['this taks for title caps', 'yEs this task for titleCaps', 'cherrs']));


console.log("_____________________ Use arrow functions and Print Sum of all numbers in an array_________________________");

const sumArrayArrow = arr => arr.reduce((acc, num) => acc + num, 0);

console.log("Actual Array: [1, 2, 3, 4, 5]");
console.log("Total SUM = ",sumArrayArrow([1, 2, 3, 4, 5]));


console.log("_____________________ Use arrow functions and Return all the prime numbers in an array_________________________");

const getPrimeNumbersArrow = arr => arr.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return (num > 1);
  });
  
  console.log("Actual Array", "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 49, 50]");
  console.log("Prime Number is:",getPrimeNumbersArrow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 49, 50]));
  

console.log("_____________________ Use arrow functions and Return all the palindromes in an array_________________________");


const getPalindromesArrow = arr => arr.filter(str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  });
  
  console.log("Before Palindrome Array:", "['Ana', 'pop', 'cat', 'car', 'level', 'hello', 'civic', 'world']")
  console.log("Palindrome result = ",getPalindromesArrow(['Ana', 'pop', 'cat', 'car', 'level', 'hello', 'civic', 'world']));
  
