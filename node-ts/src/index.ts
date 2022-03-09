import { writeFileSync, readFileSync, fstat } from "fs";
import express from "express";

// 1 =======================

// import yargs, { ArgumentsCamelCase } from "yargs";

// yargs.command({
//   command: "add",
//   describe: "does what you think it does",
//   builder: {
//     numArray: {
//       describe: "gets the number array",
//     },
//   },
//   handler: (argv: ArgumentsCamelCase<unknown>): void => {
//     const nums: Array<number> = JSON.parse(argv.numArray as string);
//     const result: number = nums[0] + nums[1];
//     console.log(result);
//   },
// });

// yargs.parse();

// 2 ==========

// const person = { name: "salmaaan", age: 21 };

// writeFileSync("data.json", JSON.stringify(person));

// const dataBuffer: Buffer = readFileSync("data.json");

// console.log(JSON.parse(dataBuffer.toString()));

// 3 ==========================

// function add(a: number, b: number, cb: (sum: number) => void): void {
//   const sum: number = a + b;

//   console.log("wait for 2 seconds");

//   setTimeout(cb, 2000, sum);
// }

// add(1, 2, (item) => {
//   console.log(item);
// });

// 4 ===========================

import axios from "axios";

async function getWeatherInfo(city: string): Promise<void> {
  const data = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=94d1cfec0e1b48d0afb122227220903&q=${city}&aqi=no`
  );

  console.log(data.data.current);
}

getWeatherInfo("Delhi");
// server ======================

// const app = express();
// app.use(express.json());

// app.get("/", (req: any, res, next) => {
//   req.name = "salmaan";
//   res.end("connected");
// });

// app.listen(5000, () => {
//   console.log("now listening to 3000");
// });
