const args = process.argv.slice(2);

const request = require("request");
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

request(URL, (error, response, body) => {

  if (error) {
    console.log(`${URL} is not a valid site`);
    console.log('error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`${args} not found`);
    }
  }
});