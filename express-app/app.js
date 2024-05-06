const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./src/routes/admin.js");
const shopRoutes = require("./src/routes/shop.js");
const db = require("./src/utils/database.js");
const error404 = require("./src/middlewares/error404.js");

// Initialize App
const app = express();

// db.execute("SELECT * FROM Products")
//   .then((result) => {
//     console.log(result[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Parsing Request Bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// App Routes
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

// Called when no route is matched
app.use(error404);

// Listening to Server
app.listen(3000);
