const worker = new Worker("worker.js");
const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

const result = document.querySelector(".result");

// sumButton.addEventListener("click", (event) => {
 
//  worker.postMessage("hello, worker");
// });
worker.postMessage("hello, worker");
//listens using the onmessage event handler property:
// worker.onmessage = function(message){
//   console.log(message.data);
//   result.textContent = message.data;
// }
worker.onmessage = (event) => {
  console.log(`Received message from worker: ${event.data}`);
  result.textContent = event.data;
};

bgButton.addEventListener("click", (event) => {
  if (document.body.style.background !== "green")
    document.body.style.background = "green";
  else document.body.style.background = "blue";
});

// if (window.Worker) {

// //   const myWorker = new Worker("worker.js");

// //   [first, second].forEach((input) => {
// //     input.onchange = function () {
// //       myWorker.postMessage([first.value, second.value]);
// //       console.log("Message posted to worker");
// //     };
// //   });

// //   myWorker.onmessage = function (e) {
// //     result.textContent = e.data;
// //     console.log("Message received from worker");
// //   };
// } else {
//   console.log("Your browser doesn't support web workers.");
// }
