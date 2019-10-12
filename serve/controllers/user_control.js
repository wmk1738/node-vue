const User = require('./../routers/web');
const Category = require('./../model/Category');
const async = require('async');

exports.categories = (req, res) => {
    async.parallel({
        data: function (call) {
            Category.find(call)
        },
        total: (call) => {
            Category.find().count(call)
        }
    }, (err, results) => {
        res.send({ msg: 'success', ...results })
    })
    // res.send('saf')
}