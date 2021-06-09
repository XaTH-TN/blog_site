const Products = require('../../models/Products');
const { multipleMongooseToObject } = require('../../../util/mongoose');

class MeController {
    storedCourses(req, res, next) {
        Products.find({})
            .then((products) => {
                res.render('admin/stored-products', {
                    products: multipleMongooseToObject(products),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
