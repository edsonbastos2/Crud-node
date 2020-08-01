const Sequelize = require("sequelize");
const connection = require("../database/database");

const Empresas = connection.define("empresas", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Empresas;
