const ProgressBar = require("progress");
const bar = new ProgressBar(":bar", { total: 100 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});
console.log("1");
console.log("2");
// process.nextTick(() => {
//   console.log("3");
// });
// setImmediate(() => {
//   console.log("6");
// });
// setTimeout(() => {
//   console.log("7");
// }, 0);
// console.log("4");
// let done: boolean = false;
// const isItDoneYet: Promise<string> = new Promise<string>((resolve, reject) => {
//   if (done) {
//     const workDone = "Here is the thing I built";
//     resolve(workDone);
//   } else {
//     const why = "Still working on something else";
//     reject(why);
//   }
// });
// const checkIfItsDone: () => void = () => {
//   isItDoneYet
//     .then((ok) => {
//       console.log(ok);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };
// checkIfItsDone();
// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// eventEmitter.on("start", () => {
//   console.log("started");
// });
// eventEmitter.emit("start");
// const fs = require("fs");
// fs.stat("./sample.txt", (err: Error, stats: any) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stats);
//   //we have access to the file stats in `stats`
// });
// const path = require("path");
// const notes = "./sample.txt";
// console.log(path.dirname(notes)); // /users/joe
// console.log(path.basename(notes)); // notes.txt
// console.log(path.extname(notes)); // .txt
// const fs = require("fs");
// fs.readFile("./sample.txt", "hex", (err: Error, data: any) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// const fs = require("fs");
// const http = require("http");
// const server = http.createServer((req: any, res: any) => {
//   // const stream = fs.createReadStream("./res.jpg");
//   // stream.pipe(res);
//   const image: any = fs.readFileSync("./highres.jpg", "binary");
//   res.end(image);
// });
// server.listen(3000, "localhost", () => {
//   console.log("server started");
// });
// const buf = Buffer.from("Hey~~");
// console.log(
//   buf.forEach((item) => {
//     console.log(item);
//   })
// );

var myName = require("./utils");
myName();
