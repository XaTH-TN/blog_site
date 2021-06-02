const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Products = new Schema(
    {
        name: { type: String, maxLength: 200, require: true },
        description: { type: String, maxLength: 600 },
        status: { type: String, maxLength: 10 },
        imageUrl: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Products', Products);
