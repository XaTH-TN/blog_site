const Products = require('../models/Products');
const News = require('../models/News');

const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
class SiteController {
    async index(req, res, next) {
        //Promise
        // const postTop = News.findById({ _id: 1});
        debugger;
        const news = await News.find({})
            .sort({ createdAt: -1 })
            .limit(3)
            .then((news) => {
                return multipleMongooseToObject(news);
            })
            .catch(next);
        const newTop = news[0];

        let responseObj = {
            postMore: news,
            postTop: newTop,
            postNew: news,
        };
        res.render('home', responseObj);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
