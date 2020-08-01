const Sequelize = require("sequelize");
const connection = require("../database/database");
const EmpresaModal = require("../empresaController/empresaModal");

const Users = connection.define("users", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  setor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

EmpresaModal.hasMany(Users); // Uma empresa tem muitos usuários
Users.belongsTo(EmpresaModal); // Um usuário pertence a uma empresa

module.exports = Users;
