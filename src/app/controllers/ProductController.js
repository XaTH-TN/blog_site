const Products = require('../models/Products');
const { mongooseToObject } = require('../../util/mongoose');
class ProductController {
    show(req, res, next) {
        Products.findOne({ slug: req.params.slug })
            .then((product) => {
                res.render('products/show', {
                    product: mongooseToObject(product),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('products/create');
    }

    //POST
    store(req, res, next) {
        req.body.imageUrl = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        req.body.status = 'APPROVED';
        const product = new Products(req.body);
        product
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                res.send('Create error!');
            });
    }
}

module.exports = new ProductController();
