// question 1

function findLongestSubStr(s) {
  if (typeof s !== "string") return "Invalid Input, only strings accepted";

  let maxStr = "";

  for (i = 0; i < s.length; i++) {
    let currMax = [s[i]];

    for (j = i + 1; j < s.length; j++) {
      if (!currMax.includes(s[j])) {
        currMax += s[j];
      } else {
        if (maxStr.length <= currMax.length) {
          maxStr = currMax;
          currMax = [];
        }
        break;
      }
    }
  }

  return maxStr;
}

// console.log(findLongestSubStr("ababcdefgba"));

// ============================

// // question 2

function findTheOtherHalf(arr, target) {
  let output = [];

  // naive approach

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (target === arr[i] + arr[j]) {
        output.push([arr[i], arr[j]]);
      }
    }
  }

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      for (k = j + 1; k < arr.length; k++) {
        if (target === arr[i] + arr[j] + arr[k]) {
          output.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return output;
}

// console.log(findTheOtherHalf([2, 7, 11, 0, 9, 8, 1, 15], 9));

// ============================

// question 3

function maxWaterWalls(heights) {
  let maxArea = 0;
  for (left = 0; left < heights.length; left++) {
    let currArea = 0;

    for (right = left + 1; right < heights.length; right++) {
      currArea = Math.min(heights[left], heights[right]) ** 2;
    }
    if (currArea > maxArea) maxArea = currArea;
  }

  return maxArea;
}

// console.log(maxWaterWalls([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// ============================

// question 4

let winnerFound = false;

const sum = (...arr) => arr.reduce((sum, cur) => (sum += cur), 0);

function logWinner(arr, dim, place) {
  if (winnerFound) return;
  if (sum(...arr) === dim) {
    console.log(`1 is winner, check ${place}`);
    winnerFound = true;
  }
  if (sum(...arr) === 0) {
    console.log(`0 is winner, check ${place} `);
    winnerFound = true;
  }
}

function checkWhoWins(matrix) {
  const dim = matrix.length;

  // check rows
  matrix.forEach((item, i) => logWinner(item, dim, `row ${i + 1}`));

  // check cols
  for (let i = 0; i < dim; i++) {
    let col = [];
    for (let j = 0; j < dim; j++) {
      col.push(matrix[i][j]);
    }

    logWinner(col, dim, `col ${i + 1}`);
    // empty col
    col = [];
  }

  // check diags
  let diag = [];
  for (let i = 0; i < dim; i++) {
    diag.push(matrix[i][i]);
  }
  logWinner(diag, dim, "diagnol");
}

// checkWhoWins([
//   [1, 1, 0],
//   [0, 1, 1],
//   [0, 1, 1],
// ]);

// checkWhoWins([
//   [1, 0, 0, 1],
//   [1, 0, 1, 0],
//   [1, 1, 1, 1],
//   [0, 1, 0, 1],
// ]);
