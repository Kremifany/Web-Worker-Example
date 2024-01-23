
const options = {
  method: "GET",
  url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
  params: { term: "wat" },
  headers: {
    "X-RapidAPI-Key": "ba5690a4acmshec5f828a2d9ac04p1ba9abjsncfb8990c14b2",
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
  },
};
onmessage = function (message) {
  // console.log(message.data);
  // let sum = 0;
  // for (let i = 0; i < 10000000000; i++) {
  //   sum += i;
  // }
  this.setTimeout(async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const { status } = response;
      console.log(result, status);
    } catch (error) {
      console.error("Error", error);
    }
    //console.log(`The message: ${message.data} is from worker`);
  }, 1000);
  // postMessage(sum)
};
