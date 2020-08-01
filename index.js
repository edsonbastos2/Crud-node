const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const userController = require("./userController/userController");
const userModal = require("./userController/usermodel");

const empresaController = require("./empresaController/empresaController");
const empresaModal = require("./empresaController/empresaModal");

// View Engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conection database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com banco feita com sucesso :)");
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", userController);
app.use("/", empresaController);

app.listen(3002, () => console.log("servidor up!"));
