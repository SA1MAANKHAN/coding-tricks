// Using JS, convert:
// [ "AND", ["<", "var1", "var2"], [ "OR", [">", "var3", "var4"], ["==", "var5", "var6"] ] }
// To:
// "var1 < val2 AND (var3 > val4 OR val5 == val6)"

// Approach 1==========================================

let input = [
  "AND",
  ["<", "var1", "var2"],
  ["OR", [">", "var3", "var4"], ["==", "var5", "var6"]],
];

function swap(arr) {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}

function evalExp1(input) {
  if (!Array.isArray(input)) return;

  swap(input);

  input.forEach((item) => {
    if (Array.isArray(item)) evalExp1(item);
  });
}

evalExp1(input);
// console.log(input);

let outputStr = "";

function generateExp(input) {
  const output = input.every((item) => {
    return !Array.isArray(item);
  });

  if (output) {
    outputStr += "(" + input + ")";
  } else {
    outputStr += "(";
    generateExp(input[0]);
    outputStr += input[1];
    generateExp(input[2]);
    outputStr += ")";
  }
}

generateExp(input);

console.log(outputStr.replaceAll(",", " "));

// Approach 2 ============================

let exp = [
  "AND",
  ["<", "var1", "var2"],
  ["OR", [">", "var3", "var4"], ["==", "var5", "var6"]],
];

let ans = [];

function evalExp2(input) {
  console.log(input);

  let containsArray = false;

  input.forEach((item) => {
    if (Array.isArray(item)) {
      const out = evalExp2(item);
      containsArray = true;
    }
  });

  if (!containsArray) {
    ans += [input[1], input[0], input[2]];
  } else {
    ans = input[0] + ans;
  }
}

// solution incomplete

// evalExp2(exp);
// console.log(ans);
