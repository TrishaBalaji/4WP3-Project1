const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const { initializeDatabases } = require("./database/database");

const app = express();

// View engine setup
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/", authRoutes);
app.use("/", productRoutes);
app.use("/", dashboardRoutes);

// Start server after DB init
initializeDatabases()
  .then(() => {
    app.listen(8081, () => {
      console.log("server listening on port 8081...");
    });
  })
  .catch((err) => {
    console.error("Database initialization failed:", err);
  });
