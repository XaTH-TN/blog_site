const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const News = new Schema(
    {
        name: { type: String, maxLength: 200, require: true },
        description: { type: String },
        titleId: { type: String, maxLength: 10 },
        imageUrl: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, maxLength: 255, require: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('News', News);
