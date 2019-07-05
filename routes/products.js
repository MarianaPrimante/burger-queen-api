const router = require('express').Router();
const Product = require('../controllers/products')

router.get('/', Product.getProducts);
router.get('/:id', Product.getProductsById);
router.post('/', Product.postProducts);
router.put('/:id', Product.putProducts);
router.delete('/:id', Product.deleteProducts);

module.exports = router;