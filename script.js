const worker = new Worker("worker.js");
//const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

const result = document.querySelector(".result");

worker.postMessage("this message was sent from main script to worker");

//when recieved message back from worker
worker.onmessage = (event) => {
  console.log(`Received message from worker: ${event.data}`);
  console.log("Main <===== Worker        Server", event.data);
  result.textContent = event.data;
};

bgButton.addEventListener("click", (event) => {
  if (document.body.style.background !== "green")
    document.body.style.background = "green";
  else document.body.style.background = "blue";
});
