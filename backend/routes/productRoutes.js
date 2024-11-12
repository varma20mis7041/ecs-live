const express = require('express');
const router = express.Router(); 
const productController = require('../controllers/productController')
const Product = require('../models/Product')


router.post('/add-product',productController.createProduct);
router.get('/all',productController.getProducts);

module.exports = router