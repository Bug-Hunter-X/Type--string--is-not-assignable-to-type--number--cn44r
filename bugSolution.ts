function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return 0; // Or handle the error appropriately
  }
}

let result1 = addSafe(1, 2); // Correct usage
let result2 = addSafe("1", 2); // Type safe handling of string
let result3 = addSafe(1, "2"); // Type safe handling of string
console.log(result1, result2, result3); // Outputs 3 0 0