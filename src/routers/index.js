const newsRouter = require('./news');
const siteRouter = require('./site');
const productRouter = require('./products');

//Admin router
const adminRouter = require('./admin/productsAdmin');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/products', productRouter);

    //Admin
    app.use('/admin', adminRouter);
    app.use('/', siteRouter);
}

module.exports = route;
