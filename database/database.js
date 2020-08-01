const Sequelize = require("sequelize");
const { Model } = require("sequelize");

const connection = new Sequelize("cad_user", "root", "Redhot", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
