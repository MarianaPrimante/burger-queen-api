const router = require('express').Router();
const models = require('../models');
const User = models.User;

router.get("/", (req, resp) => {
  User.findAll().then(users => {
    resp.send(users)
  });
});
router.get("/:id", (req, resp) => {
  User.findByPk(req.params.id).then(id => {
    resp.send(id)
  });
});

module.exports = router;