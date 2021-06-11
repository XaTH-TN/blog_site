var express = require('express');
var router = express.Router();

const productController = require('../../app/controllers/ProductController');
const meController = require('../../app/controllers/admin/AdminProductController');
const newsController = require('../../app/controllers/NewsController');

//PRODUCT
//GET MODEL create
router.get('/products/create', productController.create);
//save product
router.post('/products/store', productController.store);

//get model update product
router.get('/products/:id/edit', productController.edit);
router.put('/products/:id', productController.update);

//delete product
router.delete('/products/:id', productController.delete);

//get list product by admin
router.get('/products/stored', meController.storedCourses);

//NEWS
router.get('/news/create', newsController.create);
router.post('/news/store', newsController.storeNews);

module.exports = router;
