// type coercion = https://medium.com/front-end-weekly/implicit-coercion-in-javascript-5077ad5510d

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const arr = [1, 2, 3, 4, 5];

const nested = [1, 2, 3, [4, 5, 6, [7, [[8, 9, [10, 11]], 12]], 13]];

// let obj = {
//   firstName: "salmaan",
//   lastName: "khan",
//   arrowFn: () => {
//     console.log("arrow ", this);
//     function arrowFnInnerFn() {
//       console.log("arrow k andr fn ", this);
//     }
//     arrowFnInnerFn();

//     const arrowFnInnerArrow = () => {
//       console.log("arrow k andr arrow fn ", this);
//     };
//     arrowFnInnerArrow();
//   },
//   Fn: function () {
//     console.log("function ", this);
//     let self = this;
//     function FnInnerFn() {
//       console.log("Fn k andr Fn ", self);
//     }
//     FnInnerFn();

//     const FnInnerArrow = () => {
//       console.log("Fn k andr arrow fn", this);
//     };
//     FnInnerArrow();
//   },
// };

// obj.arrowFn();
// obj.Fn();

// let a = 1;
// const b = 2;
// var c = 3;
// let d = 4;
// const e = 5;
// var f = 6;

// function fn() {
//   // console.log(a, b ,c ,d, e, f)
//   let a = 7;
//   const b = 8;
//   var c = 9;
//   console.log(a, b, c, d, e, f);

//   function fn2() {
//     // console.log(a, b ,c ,d, e, f)
//     let a = 10;
//     const b = 11;
//     var c = 12;
//     console.log(a, b, c, d, e, f);

//     function fn3() {
//       // console.log(a, b ,c ,d, e, f)
//       let a = 13;
//       const b = 14;
//       var c = 15;
//       console.log(a, b, c, d, e, f);

//       const fn4 = () => {
//         // console.log(a, b ,c ,d, e, f)
//         let a = 16;
//         const b = 17;
//         var c = 18;
//         console.log(a, b, c, d, e, f);
//       };
//       fn4();
//     }
//     fn3();
//   }
//   fn2();
// }
// fn();

// Object.defineProperties(obj, {
//   a: {
//     value: true,
//     writable: true,
//     configurable: true,
//   },
//   b: {
//     value: "Hello",
//     writable: false,
//     configurable: true,
//   },
//   // etc. etc.
// });

// obj.a = false;

// console.log(obj);

// obj.b = "world";

// console.log(obj);

// const apifn = async () => {
//   const req = await fetch("https://foodish-api.herokuapp.com/api");
//   const data = await req.json();
//   console.log(data.image);

//   document.getElementById("img").src = data.image;
// };

// const apifn = async () => {
//   fetch("https://foodish-api.herokuapp.com/api")
//     .then((req) => req.json())
//     .then((data) => {
//       document.getElementById(
//         "img"
//       ).innerHTML = `<img src="${data.image}"   style="height: 500px; width:500px; border-radius:20px">`;
//     })
//     .catch((err) => console.log(err));
// };

// apifn();

// PROMISES;

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(
//     () => {
//       reject(new Promise((res) => setTimeout(res, 2000, "yolo")))
//     },
//     5000,
//     "one"
//   );
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(
//     () => {
//       resolve("dusra reject");
//     },
//     3000,
//     "two"
//   );
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(
//     () => {
//       resolve("teesra reject");
//     },
//     7000,
//     "three"
//   );
// });

// async function callfn() {
//   try {
//     console.log(await Promise.all([promise1, promise2, promise3]));
//     //  console.log(await Promise.any([promise1, promise2, promise3]))
//   } catch (error) {
//     console.error("reject async vala v");
//   }
//    Promise.allSettled([promise1, promise2, promise3]).then((res)=> console.log(res), err => console.error(err))
//   Promise.any([promise1, promise2, promise3]).then(
//     (res) => console.log(res),
//     (err) => console.log(err)
//   );
// }

// callfn();

// async function callfn() {
//   try {
//     console.log(await Promise.all([promise1, promise2, promise3]));
//     //  console.log(await Promise.any([promise1, promise2, promise3]))
//   } catch (error) {
//     console.error("reject async vala v");
//   }
//   Promise.all([promise1, promise2, promise3])
//     .then(
//       (res) => console.log(res)
//     )
//     .catch(err =>err).then(err => console.log(err))

//   Promise.any([promise1, promise2, promise3]).then(
//     (res) => console.log(res),
//     (err) => console.log(err)
//   );
// }

// callfn();

// const sum = (...arr) => arr.reduce((sum, i) => sum += i, 0)

// const fact = (...arr) => arr.reduce((sum, i) => sum *= i, 1)

// let a = 0;
// setInterval("console.log(a++);",[1000]);

// bind
// const inter = function(...a){
//     console.log(a, this)
// }.bind( obj.a, 9)

// function timerInc() {
//   let a = 1;
//   setInterval(() => {
//     a += 1;
//     console.log(a);
//   }, a * 1000);
// }

// timerInc();

// console.log(1);
// console.log(2);
// console.log(3);

// const apifn = async () => {
//   console.log(4);
//     console.log(5);

//   const req = await fetch("https://foodish-api.herokuapp.com/api");
//   console.log(6);
//   console.log(7);

//   const data = await req.json();
//   console.log(data.image);
//   console.log(8);

//   console.log(9);

// };

// console.log(10);
// console.log(11);

// apifn();

// console.log(12);
// console.log(13);
// console.log(14);

// BLOCKING CODE
// function fn() {
//   console.log(1);
//   return new Promise((res, rej) => {});
// }

// console.log(2);

// async function fn2() {
//   console.log(4);

//   let a = await fn();

//   console.log(5);

//   console.log(a);
// }

// fn2();

// console.log(3);

// FINALLY RETURNS
// const promise = new Promise((res) => res(2));
// promise
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .finally((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//   });

// class ClassWithPrivateField {
//   #privateField;

//   constructor() {
//     this.#privateField = 42;
//   }
// }

// class SubClass extends ClassWithPrivateField {
//   #subPrivateField;

//   constructor() {
//     super();
//     this.#subPrivateField = 23;
//   }
// }

// new SubClass();
// // SubClass {#sub

// class ClassWithPrivateMethod {
//   #privateMethod() {
//     return "hello world";
//   }

//   get getPrivateMessage() {
//     return this.#privateMethod();
//   }
// }

// const instance = new ClassWithPrivateMethod();
// console.log(instance.getPrivateMessage);

//

//generator
// function* fnto() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// gen = fnto();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// iterator
// array = [1,2,3,4];

// function iter(arr) {
//   let i = 0;
//   return {
//     next: function () {
//       if (i < arr.length) {
//         return {
//           value: arr[i++],
//           done: false,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// }

// const iterator = iter(array)

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// using assign
// o = {e: 5, f: 6}

// const obj1 = { a: 1, b: 2, c: 3, d: 4 , o : {m : 5, n : 0} };

// const obj2 = Object.assign({},obj1)

// using spread
// o = { e: 5, f: 6 };

// const obj1 = { a: 1, b: 2, c: 3, d: 4, o: { m: 5, n: 0 } };

// const obj2 = { ...obj1 };

// using JSON
// o = { e: 5, f: 6 };

// const obj1 = { a: 1, b: 2, c: 3, d: 4, o: { m: 5, n: 0 } };

// const obj2 = JSON.parse(JSON.stringify(obj1));

// using double spread
// o = { e: 5, f: 6 };

// const obj1 = { a: 1, b: 2, c: 3, d: 4, o: { m: 5, n: 0 } };

// const obj2 = { ...obj1, o : {...obj1.o}};

// Stringify
// JSON.stringify({ a: "hello", c: function () {} });

// fetch can't read local file
// fetch("./sample.txt").then(res=>res.json()).then(data=> console.log(data))

// TYPE COERCION
// JavaScript primitives include boolean, string, number, null, and undefined.

// Primitives are coerced to boolean when using logical operators (the last evaluated operand is returned from each expression).
// Primitives are coerced to string when using the binary + operator — if any operand is a string.
// Primitives are coerced to number when using comparison operators……and arithmetic operators (except for + when one operand is a string) …and the unary + operator ….and loose equality operators (except for when both arguments are already the same primitive)

// Objects are coerced to boolean when using logical operators. Objects always resolve to true.
// The process by which objects are coerced to either string or number is a bit more involved. The Object prototype has two methods that affect coercion behavior — valueOf and toString.

// Symbols are treated as true when it comes to boolean coercion.
// Symbols can’t be implicitly coerced to string.
// Symbols can’t be implicitly or explicitly coerced to number.

// console.log(undefined == null); // true

// console.log([] == 0); // true
// console.log("" == 0); // true
// console.log({} == 0); // false
// console.log([] == {}); //false
// console.log([] == null); // false

// console.log("1" ==  1)            // true
// console.log(1 == "1")             // true
// console.log(0 == false)           // true
// console.log(0 == null)            // false
// console.log(0 == undefined)       // false
// console.log(0 == !!null)          // true, look at Logical NOT operator
// console.log(0 == !!undefined)     // true, look at Logical NOT operator
// console.log(null == undefined)    // true

// const number1 = new Number(3);
// const number2 = new Number(3);
// number1 == 3;         // true
// number1 == number2;   // false

// var y = 0;
// if (() => {}) {
//   y = y + typeof y;
// }
// console.log(y);

// var y = 0;
// if (function y(){}) {
//   y = +typeof y;
// }
// console.log(y);

// function fn(data) {
//   return new Promise((res, rej) => {
//     if (data) {
//       res("success");
//     } else {
//       rej("error");
//     }
//   });
// }

// fn(true)
//   .then((data) => {
//     console.log(data);
//     // return fn(true);
//    fn(3);
//   })
//   .then((data) => {
//     console.log(data);
//     // return fn(3);
//     // fn()
//     // fn(3);
//   })
//   .then((data) => {
//     console.log(data);
//     return fn();
//   })
//   .catch((err) => {
//     console.log("error");
//     return 99;
//     // throw new Error();
//   })
//   .then((data) => {
//     console.log(data);
//     return "error";
//   })

// x = {}
// y = {}

// x[y] = {"name":"one"}
// z[x] = {"name":"two"}

// console.log(x[y])

// sort array of objects
// var items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];

// // sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });

// // sort by name
// items.sort(function (a, b) {
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });

// implementing map
// Array.prototype.myMap = function (callBackFunc) {
//   let output = [];

//   this.forEach((element, i, arr) => {
//     output.push(callBackFunc(element, i, arr));
//   });

//   return output;
// };

// function sum(a, b, c) {
//   if (b !== undefined) {
//     a += b;

//     if (c !== undefined) {
//       a += c;
//       return a;
//     }

//     return function (c) {
//       return a + c;
//     };
//   }

//   return function (b, c) {
//     if (c !== undefined) {
//       b += c;
//       return a + b;
//     }

//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// // 1.
// function sum(n) {
//   let v = function (x) {
//     return sum(n + x);
//   };
//   // "+" in front calls stop the return of sum and return
//   v.valueOf = v.toString = function () {
//     return n;
//   };

//   return v;
// }

// // 2.
// function sum(a) {
//   let count = a;
//   return function add(numberTwo) {
//     if (numberTwo === undefined) {
//       return count;
//     } else {
//       count += numberTwo;
//       return add;
//     }
//   };
// }

// // 3.
// const sum = a => b => b ? sum (a +b) : a;

// function findMostOccured(arr) {
//   let obj = {};

//   arr.forEach((item) => {
//     if (!obj[item]) {
//       obj[item] = 1;
//     } else obj[item] += 1;
//   });

//   return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
// }

// function findMostOccured(arr) {

//   let obj = arr.reduce((obj, item)=> {
//     if (!obj[item]) {
//       obj[item] = 1;
//     } else obj[item] += 1;
//   }, {});

//   return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
// }

// 5. Question Git
// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// 9. Question Git
// const obj = {
//   prop1: function () {
//     return 0;
//   },
//   prop2() {
//     return 1;
//   },
//   ["prop" + 3]() {
//     return 2;
//   },
// };
// console.log(obj.prop1());
// console.log(obj.prop2());
// console.log(obj.prop3());

// 10. Question Git
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// 11. Question Git
// function printNumbers(first, second, first) {
//   console.log(first, second, first);
// }
// printNumbers(1, 2, 3);

// 12. Question
// const printNumbersArrow = (first, second, first) => {
//   console.log(first, second, first);
// };
// printNumbersArrow(1, 2, 3);

// 14. Question
// console.log(String.prototype.trimLeft.name === "trimLeft");
// console.log(String.prototype.trimLeft.name === "trimStart");

// 22. Question
// let numbers = [1, 2,{}, 3, 4, NaN];
// console.log(numbers.indexOf(NaN));
// console.log(numbers.includes(NaN));
// console.log(numbers.findIndex(Number.isNaN));

// 25. Question
// async function func() {
//   return 10;
// }
// console.log(func());

// 26. Question
// async function func() {
//    await 10;
// }
// console.log(func());

// 27. Question
// function delay(item) {
//   return new Promise((resolve) => setTimeout(resolve, item*2000));
// }

// async function delayedLog(item) {
//   await delay(item);
//   console.log(item);
// }

// function processArray(array) {
//   array.forEach(async (item) => {
//     await delayedLog(item);
//   });
// }

// processArray([1, 2, 3, 4]);

// 33. Question
// console.log(
//   JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
// );
// console.log(
//   JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")])
// );

// 48. Question
// const num = 0o37 + 10;
// console.log(num);

// const abc = [4, 5, 3, 9, 8, 2, 7, 1, 6, 0];

// abc.sort((a, b) => {
//   console.log(a, " ", b);
//   return a - b;
// });

// const abc = ["e", "f", "d", "j", "i", "c", "h", "b", "g", "a"];

// abc.sort((a, b) => {
//   console.log(a, " ", b);
//   return a.charCodeAt() - b.charCodeAt();
// });

// console.log(abc)

// function replaceZeroWithNumber(num) {
//   let temp = num;
//   let output = 0;

//   while (num > 0) {
//     temp = num % 10;
//     num = Math.floor(num / 10);

//     if (temp === 0) {
//       output = output * 10 + 5;
//     } else {
//       output = output * 10 + temp;
//     }
//   }

//   let newOutput = 0;

//   while(output > 0){
//     newOutput = newOutput*10 + output%10;
//     output = Math.floor(output / 10);
//   }

//   return newOutput;
// }

// console.log(replaceZeroWithNumber(20085027310));

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);
