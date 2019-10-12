module.exports = (app) => {
    const express = require('express'),
        Category = require('./../../model/Category'),
        router = express.Router();

    router.post('/categories', async (req, res) => {
        // const query = await Category.find({ "name": "英雄列表" });
        console.log('req', req.body)
        const { limit = 10, page = 0 } = req.body;
        // const query = Category.find().populate({path:'parent'})
        const query = Category.find().where('parent').exists();
        // const count = await Category.find().countDocuments();
        // query.select('name').limit(req.body.limit);
        // query.where('name').equals('新闻资讯');
        query.limit(req.body.limit).skip(page * limit);
        // query.count((err, count) => {
        //     console.log('conut', count)
        //     total = count
        // })

        query.populate({ path: 'parent', select: 'name' })
        query.exec((err, items) => {
            if (err) { };
            res.send({ data: items });
        })
        // query.update({}, { $set: { name: 'test' } })
        // query.select('name')
    });

    app.use('/user/api', router);
}
const express = require('express'),
    router = express.Router(),
    control = require('./../../controllers/user_control');

router.post('/categories', control.categories);
module.exports = router;