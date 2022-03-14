// import { open } from "fs/promises";

// const fd = await open("./data.txt");
// // Create a stream from some character device.
// const stream = fd.createReadStream();
// setTimeout(() => {
//   stream; // This may not close the stream.
//   // Artificially marking end-of-stream, as if the underlying resource had
//   // indicated end-of-file by itself, allows the stream to close.
//   // This does not cancel pending read operations, and if there is such an
//   // operation, the process may still not be able to exit successfully
//   // until it finishes.
//   //   stream.push(null);
//   stream.read(0);
//   stream.close();
// }, 100);

// setTimeout(() => {
//   const data = readStream.read(10);
//   console.log(data);

//   const data2 = readStream.read(10);
//   console.log(data2);
// }, 10);

// console.log(readStream);

// const data2 = readStream.read(10);
// console.log(data2);
