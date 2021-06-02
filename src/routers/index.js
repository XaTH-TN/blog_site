const newsRouter = require('./news');
const siteRouter = require('./site');
const productRouter = require('./products');

//Admin router
const productAdminRouter = require('./admin/productsAdmin');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/products', productRouter);

    //Admin
    app.use('/admin/products', productAdminRouter);

    app.use('/', siteRouter);
}

module.exports = route;
