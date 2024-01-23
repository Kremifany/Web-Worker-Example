const url =
  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ba5690a4acmshec5f828a2d9ac04p1ba9abjsncfb8990c14b2",
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
onmessage = function (message) {
  this.setInterval(async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const { status } = response;
      console.log(result, status);
    } catch (error) {
      console.error("Error", error);
    }
  }, 1000);
  // postMessage(sum)
};
