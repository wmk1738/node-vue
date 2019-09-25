const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String },
    img_url: { type: String }
    // parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'categories' }
})

module.exports = mongoose.model('Good', schema);