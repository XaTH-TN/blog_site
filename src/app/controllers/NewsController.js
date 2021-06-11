const News = require('../models/News');
const { mongooseToObject } = require('../../util/mongoose');
class NewsController {
    showPageDetail(req, res, next) {
        News.findOne({ slug: req.params.slug })
            .then((newItem) => {
                res.render('news/show', {
                    newItem: mongooseToObject(newItem),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('news/create');
    }

    //POST
    storeNews(req, res, next) {
        req.body.imageUrl = `/img/bg-img/${req.body.imageUrl}`;
        req.body.titleId = 1;
        const newItem = new News(req.body);
        newItem
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                res.send('Create error!');
            });
    }
}

module.exports = new NewsController();
