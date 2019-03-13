const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  next();
});

const port = process.env.PORT || 80;

// Serve any static files built by React
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/readDBFile", function(req, res) {
  Promise.all([
    sqlite.open("./main.db", {
      Promise
    })
  ]).then(function([mainDb]) {
    mainDb.all(
      "SELECT * FROM sqlite_master where type='table'",
      (error, rows) => {
        // receives all the results as an array
        console.log(rows);
      }
    );
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
