const express = require("express");
//required express so that you can use it
const cors = require("cors");
const { response } = require("express");
const app = express();
// use app so you don't have to write express() all the time

const PORT = 8000;
//selects which port you want

const guest = {
  alice: {
    Gender: "Female",
    "Hair color": "Blonde or Black",
    "Eye color": "Green or Blue",
    "Address	": "London, England/Victorian Era/ High Society",
    Occupation: "White Pawn, Sea captain",
    Quote: "Quote here",
  },
  "the mad hatter": {
    Gender: "male",
    "Hair color": "Orange",
    "Eye color": "Yellow (left eye) Green (right eye)",
    "Address	": "unknown",
    Occupation: "White Pawn",
    Quote: "Quote here",
  },
  "march hare": {
    Gender: "male",
    "Hair color": "Brown and Gray",
    "Eye color": "Yellow",
    "Address	": "Umknown",
    Occupation: "White Pawn",
    Quote: "Quote here",
  },
  dormouse: {
    Gender: "male",
    "Hair color": "unknown",
    "Eye color": "black",
    "Address	": "unknown",
    Occupation: "unknown",
    Quote: "Quote here",
  },
  unknown: {
    Gender: "Unknown",
    "Hair color": "Unknown",
    "Eye color": "Unknown",
    "Address	": "Unknown",
    Occupation: "Unknown",
    Quote: "Unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
  //this is what will happen when server hear the request.
  //give them first a HTML file so they know what to expect in regards to the API.
  //Get req come in respond by sending  a file. and the file is the HTML file the file will be in the same directory.
});

//alice in wonderland theme. Tea time with the hatter

app.get("/api/:name", (request, response) => {
  const attendeeName = request.params.name.toLowerCase();
  if (guest[attendeeName]) {
    return response.json(guest[attendeeName]);
  } else {
    return response.json(guest["Unknown"]);
  }
  return response.json(guest);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! Betta go catch it !`);
});

//want to listen so use app.listen  Tells where to listen. Port wont a;ways be static and it may change which is why we use the process.env line. Allows Heroku to select thier own port first OR if it is on our own port. Makes the code more reuseable
