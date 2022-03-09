var user = {
    name: "salmaan",
    id: 32
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 5] = "Up";
    Direction[Direction["Down"] = 6] = "Down";
    Direction[Direction["Left"] = 7] = "Left";
    Direction[Direction["Right"] = 8] = "Right";
})(Direction || (Direction = {}));
console.log(user);
console.log(Direction.Down);
var E2;
(function (E2) {
    E2[E2["A"] = 0] = "A";
    E2[E2["B"] = 1] = "B";
    E2[E2["C"] = 2] = "C";
})(E2 || (E2 = {}));
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
var a;
a = "hello";
console.log(typeof a);
a = 2;
console.log(typeof a);
console.log(a.__proto__);
