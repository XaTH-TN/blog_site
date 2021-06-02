const Products = require('../models/Products');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {
        //Promise
        Products.find({})
            .then((products) =>
                res.render('home', {
                    products: multipleMongooseToObject(products),
                }),
            )
            .catch(next);
        // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
