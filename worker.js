// const work = () => {
//   postMessage(intervalTime);
//   intervalTime
// }

// onmessage = function (message) {
//   // console.log("Worker: Message received from main script");
//   console.log("Main =====> Worker        Server", message.data);

//   const MAX_INTERVAL_TIME = 1000 * 60 * 5;
//   setTimeout(
//     // async () => {
//     () => {
//       postMessage(intervalTime);
// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   const { status } = response;
//   //if it were no connection and it was restored
//   if (noConnection != 1) {
//     noConnection = 1;
//     postMessage("Connection restored");
//   } //connection restored
//   console.log(
//     `message from main script to worker: ${message.data}, ${result}, status is: ${status},`
//   );
//   // console.log("Posting message back to main script");
//   console.log("Main        Worker <===== Server", result);
//   postMessage(`${result}`);
// },
//     intervalTime
//   );
// };
const url = "http://localhost:3001/";
const options = {
  method: "GET",
};
let intervalTime = 1000;
let noConnection = 1; //counter for how many times was no connection
const MAX_INTERVAL_TIME = 1000 * 60 * 5;

onmessage = function (message) {
  console.log("Worker: Message received from main script");
  console.log("Main =====> Worker        Server", message.data);

  setTimeout(work, intervalTime);
};

const work = async () => {
  postMessage(intervalTime);
  setTimeout(work, intervalTime);
  try {
    //try to reach the server
    const response = await fetch(url, options);
    const result = await response.text();
    const { status } = response;
    //if there were no connection and it was restored
    if (noConnection) {
      noConnection = 0;
      postMessage("Connection restored");
    }
    console.log("Posting message back to main script");
    console.log("Main        Worker <===== Server", result);
    //messaging a main script
    postMessage(`${result}`);
  } catch (error) {
    console.error("Error", error);
    noConnection += 1; //counts how many times there were no connection to server
    if (intervalTime < MAX_INTERVAL_TIME) {
      intervalTime += 1000;
      console.log(`interval time: ${intervalTime}`);
    } else {
      intervalTime += 3000;
      console.log(`interval time: ${intervalTime}`);
    }
  }
};
