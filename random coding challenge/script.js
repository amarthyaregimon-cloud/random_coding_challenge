const challenges = [
  {
    text: "Reverse a string without using built-in reverse methods.",
    instructions: "Write a function that takes a string as input and returns the reversed string. Example: Input: 'hello', Output: 'olleh'. Do not use built-in reverse methods. Write your solution as a function body, e.g., `let result = ''; for (let i = input.length - 1; i >= 0; i--) result += input[i]; return result;`",
    testCases: [
      { input: '"hello"', expected: "olleh" },
      { input: '"Grok"', expected: "korG" },
    ],
    solution: function(input) {
      let result = '';
      for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
      }
      return result;
    }
  },
  {
    text: "Find the largest number in an unsorted integer array.",
    instructions: "Write a function that takes an array of integers and returns the largest number. Example: Input: [3, 1, 4, 1, 5], Output: 5. Write your solution as a function body, e.g., `let max = input[0]; for (let i = 1; i < input.length; i++) if (input[i] > max) max = input[i]; return max;`",
    testCases: [
      { input: '[3, 1, 4, 1, 5]', expected: 5 },
      { input: '[-1, -5, 0, 2]', expected: 2 },
    ],
    solution: function(input) {
      let max = input[0];
      for (let i = 1; i < input.length; i++) {
        if (input[i] > max) max = input[i];
      }
      return max;
    }
  },
  {
    text: "Check if a string is a palindrome.",
    instructions: "Write a function that takes a string and returns true if it reads the same forwards and backwards (ignoring case and spaces). Example: Input: 'racecar', Output: true. Write your solution as a function body, e.g., `let cleaned = input.toLowerCase().replace(/\\s/g, ''); return cleaned === cleaned.split('').reverse().join('');`",
    testCases: [
      { input: '"racecar"', expected: true },
      { input: '"hello"', expected: false },
      { input: '"A man a plan a canal Panama"', expected: true },
    ],
    solution: function(input) {
      let cleaned = input.toLowerCase().replace(/\s/g, '');
      let reversed = '';
      for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
      }
      return cleaned === reversed;
    }
  },
  {
    text: "Sum all numbers in an array.",
    instructions: "Write a function that takes an array of numbers and returns their sum. Example: Input: [1, 2, 3, 4], Output: 10. Write your solution as a function body, e.g., `let sum = 0; for (let i = 0; i < input.length; i++) sum += input[i]; return sum;`",
    testCases: [
      { input: '[1, 2, 3, 4]', expected: 10 },
      { input: '[-1, 0, 5]', expected: 4 },
    ],
    solution: function(input) {
      let sum = 0;
      for (let i = 0; i < input.length; i++) {
        sum += input[i];
      }
      return sum;
    }
  },
  {
    text: "Count vowels in a string.",
    instructions: "Write a function that counts the number of vowels (a, e, i, o, u) in a string, ignoring case. Example: Input: 'hello', Output: 2. Write your solution as a function body, e.g., `let count = 0; const vowels = 'aeiou'; for (let char of input.toLowerCase()) if (vowels.includes(char)) count++; return count;`",
    testCases: [
      { input: '"hello"', expected: 2 },
      { input: '"JavaScript"', expected: 3 },
    ],
    solution: function(input) {
      let count = 0;
      const vowels = 'aeiou';
      for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i].toLowerCase())) {
          count++;
        }
      }
      return count;
    }
  },
  {
    text: "Find the factorial of a number.",
    instructions: "Write a function that calculates the factorial of a given number. Example: Input: 5, Output: 120 (5! = 5*4*3*2*1). Write your solution as a function body, e.g., `let result = 1; for (let i = 2; i <= input; i++) result *= i; return result;`",
    testCases: [
      { input: '5', expected: 120 },
      { input: '0', expected: 1 },
      { input: '3', expected: 6 },
    ],
    solution: function(input) {
      let result = 1;
      for (let i = 2; i <= input; i++) {
        result *= i;
      }
      return result;
    }
  },
  {
    text: "Check if a number is prime.",
    instructions: "Write a function that checks if a given number is prime (only divisible by 1 and itself). Example: Input: 7, Output: true. Write your solution as a function body, e.g., `if (input < 2) return false; for (let i = 2; i < input; i++) if (input % i === 0) return false; return true;`",
    testCases: [
      { input: '7', expected: true },
      { input: '4', expected: false },
      { input: '2', expected: true },
    ],
    solution: function(input) {
      if (input < 2) return false;
      for (let i = 2; i < input; i++) {
        if (input % i === 0) return false;
      }
      return true;
    }
  },
  {
    text: "Remove duplicates from an array.",
    instructions: "Write a function that removes duplicate elements from an array and returns a new array with unique elements only. Example: Input: [1, 2, 2, 3, 1], Output: [1, 2, 3]. Write your solution as a function body, e.g., `let unique = []; for (let item of input) if (!unique.includes(item)) unique.push(item); return unique;`",
    testCases: [
      { input: '[1, 2, 2, 3, 1]', expected: [1, 2, 3] },
      { input: '["a", "b", "a", "c"]', expected: ["a", "b", "c"] },
    ],
    solution: function(input) {
      let unique = [];
      for (let i = 0; i < input.length; i++) {
        if (!unique.includes(input[i])) {
          unique.push(input[i]);
        }
      }
      return unique;
    }
  },
  {
    text: "Find the second largest number in an array.",
    instructions: "Write a function that finds the second largest number in an array. Example: Input: [1, 3, 4, 2], Output: 3. Write your solution as a function body, e.g., `let max = Math.max(...input); let filtered = input.filter(n => n < max); return Math.max(...filtered);`",
    testCases: [
      { input: '[1, 3, 4, 2]', expected: 3 },
      { input: '[10, 5, 8, 2]', expected: 8 },
    ],
    solution: function(input) {
      let max = input[0];
      let secondMax = input[0];
      for (let i = 1; i < input.length; i++) {
        if (input[i] > max) {
          secondMax = max;
          max = input[i];
        } else if (input[i] > secondMax && input[i] < max) {
          secondMax = input[i];
        }
      }
      return secondMax;
    }
  },
  {
    text: "Convert Celsius to Fahrenheit.",
    instructions: "Write a function that converts temperature from Celsius to Fahrenheit. Formula: F = (C * 9/5) + 32. Example: Input: 0, Output: 32. Write your solution as a function body, e.g., `return (input * 9/5) + 32;`",
    testCases: [
      { input: '0', expected: 32 },
      { input: '100', expected: 212 },
      { input: '25', expected: 77 },
    ],
    solution: function(input) {
      return (input * 9/5) + 32;
    }
  },
  {
    text: "Count words in a string.",
    instructions: "Write a function that counts the number of words in a string. Words are separated by spaces. Example: Input: 'hello world', Output: 2. Write your solution as a function body, e.g., `return input.trim().split(' ').filter(word => word.length > 0).length;`",
    testCases: [
      { input: '"hello world"', expected: 2 },
      { input: '"JavaScript is awesome"', expected: 3 },
      { input: '"  one  two  "', expected: 2 },
    ],
    solution: function(input) {
      if (input.trim() === '') return 0;
      return input.trim().split(/\s+/).length;
    }
  },
  {
    text: "Calculate the average of numbers in an array.",
    instructions: "Write a function that calculates the average of all numbers in an array. Example: Input: [1, 2, 3, 4], Output: 2.5. Write your solution as a function body, e.g., `let sum = 0; for (let num of input) sum += num; return sum / input.length;`",
    testCases: [
      { input: '[1, 2, 3, 4]', expected: 2.5 },
      { input: '[10, 20, 30]', expected: 20 },
    ],
    solution: function(input) {
      let sum = 0;
      for (let i = 0; i < input.length; i++) {
        sum += input[i];
      }
      return sum / input.length;
    }
  },
  {
    text: "Capitalize the first letter of each word in a string.",
    instructions: "Write a function that capitalizes the first letter of each word in a string. Example: Input: 'hello world', Output: 'Hello World'. Write your solution as a function body, e.g., `return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');`",
    testCases: [
      { input: '"hello world"', expected: "Hello World" },
      { input: '"javascript programming"', expected: "Javascript Programming" },
    ],
    solution: function(input) {
      let words = input.split(' ');
      let result = [];
      for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
          result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
        } else {
          result.push(words[i]);
        }
      }
      return result.join(' ');
    }
  },
  {
    text: "Check if an array is sorted in ascending order.",
    instructions: "Write a function that checks if an array is sorted in ascending order. Example: Input: [1, 2, 3, 4], Output: true. Write your solution as a function body, e.g., `for (let i = 1; i < input.length; i++) if (input[i] < input[i-1]) return false; return true;`",
    testCases: [
      { input: '[1, 2, 3, 4]', expected: true },
      { input: '[1, 3, 2, 4]', expected: false },
      { input: '[5, 5, 5]', expected: true },
    ],
    solution: function(input) {
      for (let i = 1; i < input.length; i++) {
        if (input[i] < input[i-1]) {
          return false;
        }
      }
      return true;
    }
  },
  {
    text: "Find the index of a specific element in an array.",
    instructions: "Write a function that takes an array and a target value, returning the index of the first occurrence of the target (or -1 if not found). Example: Input: ([1, 2, 3, 2], 2), Output: 1. Write your solution as a function body taking two parameters, e.g., `for (let i = 0; i < input.length; i++) if (input[i] === target) return i; return -1;`",
    testCases: [
      { input: '([1, 2, 3, 2], 2)', expected: 1 },
      { input: '([1, 2, 3], 5)', expected: -1 },
    ],
    solution: function(input, target) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === target) {
          return i;
        }
      }
      return -1;
    }
  },
  {
    text: "Calculate the power of a number without using Math.pow.",
    instructions: "Write a function that calculates base raised to the power of exponent without using Math.pow(). Example: Input: (2, 3), Output: 8. Write your solution as a function body taking two parameters, e.g., `let result = 1; for (let i = 0; i < exponent; i++) result *= base; return result;`",
    testCases: [
      { input: '(2, 3)', expected: 8 },
      { input: '(5, 0)', expected: 1 },
      { input: '(3, 2)', expected: 9 },
    ],
    solution: function(base, exponent) {
      let result = 1;
      for (let i = 0; i < exponent; i++) {
        result *= base;
      }
      return result;
    }
  },
  {
    text: "Find the most frequent element in an array.",
    instructions: "Write a function that finds the most frequently occurring element in an array. Example: Input: [1, 2, 2, 3, 2], Output: 2. Write your solution as a function body, e.g., `let counts = {}; for (let item of input) counts[item] = (counts[item] || 0) + 1; let max = 0, result; for (let key in counts) if (counts[key] > max) { max = counts[key]; result = key; } return result;`",
    testCases: [
      { input: '[1, 2, 2, 3, 2]', expected: "2" },
      { input: '["a", "b", "a", "c", "a"]', expected: "a" },
    ],
    solution: function(input) {
      let counts = {};
      for (let i = 0; i < input.length; i++) {
        counts[input[i]] = (counts[input[i]] || 0) + 1;
      }
      let max = 0;
      let result;
      for (let key in counts) {
        if (counts[key] > max) {
          max = counts[key];
          result = key;
        }
      }
      return result;
    }
  },
  {
    text: "Check if two strings are anagrams.",
    instructions: "Write a function that checks if two strings are anagrams (contain the same characters in different order). Example: Input: ('listen', 'silent'), Output: true. Write your solution as a function body taking two parameters, e.g., `let sorted1 = str1.toLowerCase().split('').sort().join(''); let sorted2 = str2.toLowerCase().split('').sort().join(''); return sorted1 === sorted2;`",
    testCases: [
      { input: '("listen", "silent")', expected: true },
      { input: '("hello", "world")', expected: false },
      { input: '("evil", "vile")', expected: true },
    ],
    solution: function(str1, str2) {
      if (str1.length !== str2.length) return false;
      let count = {};
      for (let i = 0; i < str1.length; i++) {
        let char = str1[i].toLowerCase();
        count[char] = (count[char] || 0) + 1;
      }
      for (let i = 0; i < str2.length; i++) {
        let char = str2[i].toLowerCase();
        if (!count[char]) return false;
        count[char]--;
      }
      return true;
    }
  },
  {
    text: "Generate the Fibonacci sequence up to n terms.",
    instructions: "Write a function that generates the first n numbers of the Fibonacci sequence. Example: Input: 5, Output: [0, 1, 1, 2, 3]. Write your solution as a function body, e.g., `if (input <= 0) return []; if (input === 1) return [0]; let fib = [0, 1]; for (let i = 2; i < input; i++) fib.push(fib[i-1] + fib[i-2]); return fib;`",
    testCases: [
      { input: '5', expected: [0, 1, 1, 2, 3] },
      { input: '1', expected: [0] },
      { input: '3', expected: [0, 1, 1] },
    ],
    solution: function(input) {
      if (input <= 0) return [];
      if (input === 1) return [0];
      let fib = [0, 1];
      for (let i = 2; i < input; i++) {
        fib.push(fib[i-1] + fib[i-2]);
      }
      return fib;
    }
  },
  {
    text: "Flatten a nested array one level deep.",
    instructions: "Write a function that flattens a nested array by one level. Example: Input: [[1, 2], [3, 4], [5]], Output: [1, 2, 3, 4, 5]. Write your solution as a function body, e.g., `let result = []; for (let item of input) if (Array.isArray(item)) result.push(...item); else result.push(item); return result;`",
    testCases: [
      { input: '[[1, 2], [3, 4], [5]]', expected: [1, 2, 3, 4, 5] },
      { input: '[["a", "b"], ["c"], ["d", "e"]]', expected: ["a", "b", "c", "d", "e"] },
    ],
    solution: function(input) {
      let result = [];
      for (let i = 0; i < input.length; i++) {
        if (Array.isArray(input[i])) {
          for (let j = 0; j < input[i].length; j++) {
            result.push(input[i][j]);
          }
        } else {
          result.push(input[i]);
        }
      }
      return result;
    }
  },
  {
    text: "Count the number of digits in a number.",
    instructions: "Write a function that counts the number of digits in a positive integer. Example: Input: 12345, Output: 5. Write your solution as a function body, e.g., `return input.toString().length;` or `let count = 0; while (input > 0) { count++; input = Math.floor(input / 10); } return count;`",
    testCases: [
      { input: '12345', expected: 5 },
      { input: '7', expected: 1 },
      { input: '1000', expected: 4 },
    ],
    solution: function(input) {
      if (input === 0) return 1;
      let count = 0;
      while (input > 0) {
        count++;
        input = Math.floor(input / 10);
      }
      return count;
    }
  }
];

const challengeText = document.getElementById('challenge-text');
const challengeInstructions = document.getElementById('challenge-instructions');
const newChallengeBtn = document.getElementById('new-challenge-btn');
const runCodeBtn = document.getElementById('run-code-btn');
const userInput = document.getElementById('user-input');
const output = document.getElementById('output');
let currentChallenge = null;
const showSolutionBtn = document.getElementById('show-solution-btn');

function showSolution() {
  if (!currentChallenge) return;

  const solutionString = currentChallenge.solution.toString();

  // Extract only the function body for cleaner display
  const bodyMatch = solutionString.match(/function\s*\(input\)\s*{([\s\S]*)}/);
  if (bodyMatch && bodyMatch[1]) {
    userInput.value = bodyMatch[1].trim();
  } else {
    userInput.value = solutionString;
  }

  output.textContent = "Solution displayed in the input area.";
}

showSolutionBtn.addEventListener('click', showSolution);


function getRandomChallenge() {
  if (challenges.length === 0) {
    return { text: "No challenges available.", instructions: "", testCases: [] };
  }
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}

function displayChallenge() {
  currentChallenge = getRandomChallenge();
  challengeText.textContent = currentChallenge.text || "Error loading challenge.";
  challengeInstructions.textContent = currentChallenge.instructions || "No instructions provided.";
  userInput.value = '';
  output.innerHTML = '<strong>Test Cases:</strong><br>' + 
    currentChallenge.testCases.map((tc, i) => 
      `Test ${i + 1}: Input: ${tc.input}, Expected: ${tc.expected}`
    ).join('<br>');
}

// Run user code and test against test cases
function runCode() {
  if (!currentChallenge) {
    output.textContent = "No challenge selected.";
    return;
  }
  try {
    // Create a function from user input
    const userFunction = new Function('input', `return ${userInput.value}`);
    
    // Run test cases
    const results = currentChallenge.testCases.map((testCase, index) => {
      const input = JSON.parse(testCase.input); // Parse input (string or array)
      const result = userFunction(input);
      const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
      return `Test ${index + 1}: Input: ${testCase.input}, Expected: ${testCase.expected}, Got: ${JSON.stringify(result)} - ${passed ? '<span style="color: green;">Passed</span>' : '<span style="color: red;">Failed</span>'}`;
    });
    output.innerHTML = results.join('<br>');
  } catch (e) {
    output.textContent = `Error: ${e.message}`;
  }
}

// Show a challenge on page load
window.onload = () => {
  if (!challengeText || !challengeInstructions || !runCodeBtn) {
    console.error("Required DOM elements not found.");
    return;
  }
  displayChallenge();
};

// Show a new challenge when button clicked
newChallengeBtn.addEventListener('click', displayChallenge);

// Run code when Run Code button clicked
runCodeBtn.addEventListener('click', runCode);

// Show user input in output area when they press Ctrl+Enter
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    e.preventDefault();
    output.textContent = "Your input:\n" + userInput.value;
  }
});