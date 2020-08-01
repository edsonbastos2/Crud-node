const express = require("express");
const router = express.Router();
const empresaModel = require("./empresaModal");
const Empresas = require("./empresaModal");

router.get("/admin/empresas/new", (req, res) => {
  res.render("admin/empresas/new");
});

router.post("/empresas/save", (req, res) => {
  let nome = req.body.nome;
  let endereco = req.body.endereco;
  let cnpj = req.body.cnpj;

  if (nome != undefined && endereco != undefined && cnpj != undefined) {
    empresaModel
      .create({
        nome,
        endereco,
        cnpj,
      })
      .then(() => {
        res.redirect("/admin/empresas");
      });
  } else {
    res.render("/admin/empresas/new");
  }
});

router.get("/admin/empresas", (req, res) => {
  empresaModel.findAll().then((empresas) => {
    res.render("admin/empresas/index", { empresas: empresas });
  });
});

router.post("/empresas/delete", (req, res) => {
  let id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Empresas.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/admin/empresas");
      });
    } else {
      // se não for um número
      res.redirect("/admin/empresas");
    }
  } else {
    // se o id for null
    res.redirect("/admin/empresas");
  }
});

module.exports = router;
