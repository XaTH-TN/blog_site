const mongoose = require('mongoose');

async function connect(params) {
    try {
        await mongoose.connect('mongodb://localhost:27017/db_xshop_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        console.log('Connect successfully!');
    } catch (error) {
        console.error('Connect fail!');
    }
}

module.exports = { connect };
