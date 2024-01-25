const url = "http://localhost:3001/";
const options = {
  method: "GET",
};
let intervalTime = 1000;
let noConnection = 1; //counter for how many times was no connection

onmessage = function (message) {
  // console.log("Worker: Message received from main script");
  console.log("Main =====> Worker        Server", message.data);
  
  const MAX_INTERVAL_TIME = 1000*60*5;
  this.setInterval(async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const { status } = response;
      //if it were no connection and it was restored
      if (noConnection != 1) {
        noConnection = 1;
        postMessage("Connection restored");
      } //connection restored
      console.log(
        `message from main script to worker: ${message.data}, ${result}, status is: ${status},`
      );
      // console.log("Posting message back to main script");
      console.log("Main        Worker <===== Server", result);
      postMessage(`${result}`);
    } catch (error) {
      console.error("Error", error);
     

      //if no connection ===> multiply interval Time by always advanced variable till
      //it reaches MAX_INTERVAL_TIME

      if (intervalTime < MAX_INTERVAL_TIME) {
        intervalTime *= noConnection;
        console.log(`interval time: ${intervalTime}`);
      } 
      
      //OFFLINE
      noConnection += 1; //count how many times was no connection
      if (noConnection == ) {
        //if it's more than 2 times no connection
        postMessage(`You are offline and interval is : ${intervalTime/1000}` );
      }
    }
  }, intervalTime);
};
