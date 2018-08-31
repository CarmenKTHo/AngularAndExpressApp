const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(__dirname));

app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// some data for the API
var foods = [
  { "id": 1, "name": "Donuts" },
  { "id": 2, "name": "Pizza" },
  { "id": 3, "name": "Tacos" }
];

var services = [
  { "findajob": "Find public and private sector job opportunities and hiring programs, apply or extend a work permit, get a Social Insurance Number, a criminal record check or a security clearance." },
  { "employmentinsurance": "Information about Employment Insurance (EI) temporary benefits for workers, sickness, fishing and family-related benefits as well as how to apply online and submit a report." },
  { "myaccount": "Information on how the service works, how to register for it, and what you can do online." },
  { "cpp": "Information on eligibility criteria, deciding when to take your pension, how to apply online and amounts." },
  { "oldagepension": "Information on a pension you can receive if you are 65 years of age or older and have lived in Canada for at least 10 years - even if you have never worked." },
  { "passport": "Includes passport applications, passport offices and processing times for renewals and new applications." },
  { "weather": "Information on current conditions, short and long-term forecasts and public weather alerts, access marine forecasts, the Air Quality Health Index and historical climate data." },
  { "armedforces": "Information about jobs with the Canadian Armed Forces, wages, benefits and recruitment centre locations." },
  { "businessplanning": "Includes checklists and guides for starting a business, business planning tips, and templates and sample business plans."}
];

// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'))
});

// the GET "foods" API endpoint
app.get('/api/food', function (req, res) {

    console.log("GET foods");

    // This is a very simple API endpoint. It returns the current value of the "foods" array.
    res.send(foods);

});


app.get('/api/services', function (req, res) {

    console.log("GET services");

    // This is a very simple API endpoint. It returns the current value of the "foods" array.
    res.send(services);

});


/*
// the GET "foods" API endpoint
app.get('/api/services', function (req, res) {

    console.log("GET services");

    var fs = require("fs");
    var data;

    fs.readFile('./services.json', function(err, result) {
      if (err) { throw err; }
      data = JSON.parse(result);
      console.log(data); // parsed JSON data! yay!
    });

    // This is a very simple API endpoint. It returns the current value of the "foods" array.
    res.send(data);

});
*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// HTTP listener
app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});
module.exports = app;
