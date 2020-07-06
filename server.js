// =========================== //
// ===== server variables ==== //
// =========================== //

require("dotenv").config();

// ======================= //
// ===== Dependencies ==== //
// ======================= //

const express = require("express"); // Used for server side routing.
const bodyParser = require("body-parser"); // Parses JSON files.
const morgan = require("morgan"); // display helpful information on the server side logs.
const path = require("path"); // path will connect directory together. Most common example is res.sendFile(path.join(__dirname, "/boilerplate/src/pages/Home"));
const app = express(); // assign express to a variable.
const routes = require("./controllers"); // connect index.js inside the controller directory.

// ======================= //
// ======== Ports ======== //
// ======================= //

const PORT = process.env.PORT || 8080; // check for a process.env port within a container or set to 8080.

// ===================== //
// ===== Middleware ==== //
// ===================== //

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// =================================== //
// ==== if its production environment  //
// =================================== //

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); // check if in production mode.
}

// =================================== //
// ====== Routing & Controllers ====== //
// =================================== //

app.use(routes);

// ======================= //
// ====== React App ====== //
// ======================= //

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./boilerplate/build/index.html")); // if you change the name of the react app be sure to change it here.
});

// ========================= //
// ====== Error handler ==== //
// ========================= //

app.use(function (err, req, res, next) {
  // console.log('====== ERROR =======')
  // console.error(err.stack)
  res.status(500);
});

// ========================== //
// ==== Starting Server ===== //
// ========================== //

app.listen(PORT, () => {
  console.log(`--------------------------------------`);
  console.log(`  App listening on PORT: ${PORT}  `);
  console.log(`--------------------------------------`);
});

// ================== //
// ===== credits ==== //
// ================== //

console.log("Boilerplate created by Matthew Carpenter");
console.log("https://github.com/getHashSet/boilerplate");
