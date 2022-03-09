interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "salmaan",
  id: 32,
};

enum Direction {
  Up = 5,
  Down,
  Left,
  Right,
}

console.log(user);

console.log(Direction.Down);

enum E2 {
  A,
  B,
  C,
}

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }

// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;

// // object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.get();

// // Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);

// interface Point {
//   x: number;
//   y: number;
// }

// function logPoint(p: Point) {
//   console.log(`${p.x}, ${p.y}`);
// }

// // logs "12, 26"
// const point = { x: 12, y: 26, z: 23 };
// logPoint(point);

// // TYPE ASSERTION
// var str = "1";
// var str2: number = <number>(<any>str); //str is now of type number
// console.log(typeof str2);

let a: any;
a = "hello";
console.log(typeof a);
a = 2;
console.log(typeof a);
console.log(a.__proto__);
