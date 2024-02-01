
const worker = new Worker("worker.js");
//const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");
let state = "online";
const result = document.querySelector(".result");

worker.postMessage("this message was sent from main script to worker");
function toggleBackdrop() {
  const backdrop = document.getElementById("backdrop");
  backdrop.classList.toggle("hidden"); // Toggle the 'hidden' class
}
//when recieved message back from worker
worker.onmessage = (event) => {
  console.log(`Received message from worker: ${event.data}`);
  console.log("Main <===== Worker        Server", event.data);
  result.textContent = event.data;
  
  if (event.data === "offline") {
    if(state === "online"){
    toggleBackdrop();
    state="offline";
  }else{
    state="online";
  }
  }
};

bgButton.addEventListener("click", (event) => {
  if (document.body.style.background !== "green")
    document.body.style.background = "green";
  else document.body.style.background = "blue";
});
