const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5];

let strings = ['hello', 'world', 'javascript', 'node'];

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Function to multiply all elements in an array by the given number
function multiplynumbers(numbers, multiplier) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * multiplier);
  }

  return result;
}

//Endpoint 1: Multiply All Numbers in an Array
app.get('/numbers/multiply', (req, res) => {
  let multiplier = req.query.multiplier;
  let result = multiplynumbers(numbers, multiplier);
  res.json({ result: result });
});

//Function to concatenate the given string to all elements in an array
function concatStrings(strArray, suffix) {
  let result = [];
  for (let i = 0; i < strArray.length; i++) {
    result.push(strArray[i] + suffix);
  }
  return result;
}

//Endpoint 2: Concatenate Strings
app.get('/strings/concat', (req, res) => {
  let suffix = req.query.suffix;
  let result = concatStrings(strings, suffix);
  res.json({ result: result });
});

//Function to filter out odd numbers
function removeOddNumbers(numArray) {
  let result = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      result.push(numArray[i]);
    }
  }
  return result;
}

//Endpoint 3: Remove All Odd Numbers from an Array
app.get('/numbers/remove-odds', (req, res) => {
  let result = removeOddNumbers(numbers);
  res.json({ result: result });
});

//Function to join each string in the array
function joinStrings(strArray) {
  let result = '';
  for (let i = 0; i < strArray.length; i++) {
    result = result + ' ' + strArray[i];
  }
  return result;
}

//Endpoint 4: Join All Strings in an Array
app.get('/strings/join', (req, res) => {
  let result = joinStrings(strings);
  res.json({ result });
});

//Function to double each number in the array
function doubleNumbers(numArray) {
  let result = [];
  for (let i = 0; i < numArray.length; i++) {
    result.push(numArray[i] * 2);
  }
  return result;
}

//Endpoint 5: Double All Numbers in an Array
app.get('/numbers/double', (req, res) => {
  let result = doubleNumbers(numbers);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
