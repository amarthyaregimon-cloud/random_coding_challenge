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
];

const challengeText = document.getElementById('challenge-text');
const challengeInstructions = document.getElementById('challenge-instructions');
const newChallengeBtn = document.getElementById('new-challenge-btn');
const runCodeBtn = document.getElementById('run-code-btn');
const userInput = document.getElementById('user-input');
const output = document.getElementById('output');
const showSolutionBtn = document.getElementById('show-solution-btn');
let currentChallenge = null;
let lastChallengeIndex = -1;

function showSolution() {
  if (!currentChallenge) {
    output.textContent = "No challenge selected.";
    return;
  }

  const solutionString = currentChallenge.solution.toString();
  const bodyMatch = solutionString.match(/function\s*\(input\)\s*{([\s\S]*)}/);
  userInput.value = bodyMatch && bodyMatch[1] ? bodyMatch[1].trim() : solutionString;
  output.textContent = "Solution displayed in the input area.";
}

function getRandomChallenge() {
  if (challenges.length === 0) {
    return { text: "No challenges available.", instructions: "", testCases: [] };
  }
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * challenges.length);
  } while (randomIndex === lastChallengeIndex && challenges.length > 1);
  lastChallengeIndex = randomIndex;
  return challenges[randomIndex];
}

function displayChallenge() {
  currentChallenge = getRandomChallenge();
  challengeText.textContent = currentChallenge.text || "Error loading challenge.";
  challengeInstructions.textContent = currentChallenge.instructions || "No instructions provided.";
  userInput.value = '';
  output.innerHTML = currentChallenge.testCases.length > 0
    ? '<strong>Test Cases:</strong><br>' + 
      currentChallenge.testCases.map((tc, i) => 
        `Test ${i + 1}: Input: ${tc.input}, Expected: ${tc.expected}`
      ).join('<br>')
    : "No test cases available.";
}

function runCode() {
  if (!currentChallenge) {
    output.textContent = "No challenge selected.";
    return;
  }
  if (!userInput.value.trim()) {
    output.textContent = "Error: No code entered.";
    return;
  }
  try {
    const userFunction = new Function('input', userInput.value);
    const results = currentChallenge.testCases.map((testCase, index) => {
      let input;
      try {
        input = JSON.parse(testCase.input);
      } catch (e) {
        return `Test ${index + 1}: Error parsing input: ${e.message}`;
      }
      let result;
      try {
        result = userFunction(input);
      } catch (e) {
        return `Test ${index + 1}: Execution error: ${e.message}`;
      }
      const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
      return `Test ${index + 1}: Input: ${testCase.input}, Expected: ${testCase.expected}, Got: ${JSON.stringify(result)} - ${passed ? '<span style="color: green;">Passed</span>' : '<span style="color: red;">Failed</span>'}`;
    });
    output.innerHTML = results.join('<br>');
  } catch (e) {
    output.textContent = `Error: Invalid code - ${e.message}`;
  }
}

window.onload = () => {
  if (!challengeText || !challengeInstructions || !newChallengeBtn || !runCodeBtn || !userInput || !output || !showSolutionBtn) {
    console.error("One or more required DOM elements not found.");
    output.textContent = "Error: Page setup incomplete.";
    return;
  }
  displayChallenge();
};

newChallengeBtn.addEventListener('click', displayChallenge);
runCodeBtn.addEventListener('click', runCode);
showSolutionBtn.addEventListener('click', showSolution);

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    e.preventDefault();
    output.textContent = "Your input:\n" + userInput.value;
    runCode();
  }
});