const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type: String },
    items:[{
        img_url:{type:String},
        link_url:{type:String}
    }]
})

module.exports = mongoose.model('Ad', schema);