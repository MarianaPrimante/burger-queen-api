const router = require('express').Router();
const models = require('../models');
const Product = models.Products;

router.get('/', (req, res) => {
  Product.findAll()
    .then(products => res.send(products)
    )
});

router.get('/:id', (req, res) => {
  Product.findByPk(req.params.id)
    .then(product => {
      product ? res.send(Product) : res.sendStatus(404)
    })
});

router.post('/', (req, res) => Product.create(req.body)
  .then(product => {
    res.status(201).send(product);
  })
);

router.put('/:id', (req, res) => {
  Product.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Product
        .findByPk(req.params.id)
        .then(product => res.send(product.dataValues))
    })
});

router.delete('/:id', (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;