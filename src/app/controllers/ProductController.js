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

    //EDIT
    edit(req, res, next) {
        Products.findById(req.params.id)
            .then((product) => {
                res.render('products/edit', {
                    product: mongooseToObject(product),
                });
            })
            .catch(next);
    }

    //[PUT] --/admin/products/:id
    update(req, res, next) {
        req.body.imageUrl = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        req.body.status = 'APPROVED';
        Products.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/products/stored'))
            .catch(next);
    }

    //[DELETE] --/admin/products/:id
    delete(req, res, next) {
        Products.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ProductController();
