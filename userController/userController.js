const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send("Testando página usuário");
});

router.get("/admin/createuser/new", (req, res) => {
  res.send("Testando página admin create");
});

module.exports = router;
