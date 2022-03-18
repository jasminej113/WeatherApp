//check documentation expressjs.com
//create dir , npm init, npm install express
//node version doesnt need to save when installing
//you will see new depency in package.json (node)
const express = require("express");
const https = require('https');
const app = express();
//initlaize new express app

//allows what should happen when making a get request
//first parameter is root represented by /
//triggers callback function (request,response)
//res object with .send method sends a response
//can also send html text
app.get("/",function(req,res){
  //fetch data
  const query = "Raleigh"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=Af832a85c9c485ca64077084c34198bf&units=imperial"

  https.get(url, function(response){

    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      //array
      const weatherDescription = weatherData.weather[0].description;
      //tap into response GET method to display
      res.write("<p>The weather is currently: " + weatherDescription + "</p>");
      res.write("<h1><em>The temperature in Raleigh is " + temp + " Degrees Fahrenheit.</em></h1>");
      res.write("<img src=" + imageURL + ">");
      //you can only have one res.send
      res.send();
      //js object, string format into js object
      //pass data
      //uncompress format into full format object
    })

  })
  //pass url as first parameter
  //another name for res to respoonse to check
})
//add callback function
//listen method to listen on port 3000
//node server.js
//port is a channel we tune in
//ctrl c to exit
//localhost:300 (root of homepage)
//when we type google send requst, see request , send repsonse to render website
//when broswer trying to get in touch with server
//it needs information when making a get request
app.listen(3000,function(req,res) {
  console.log("server is running on port 3000.");
})

//npm install -g nodemon
//use nodemon index.js to run
