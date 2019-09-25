module.exports = (app) => {
    const express = require('express');
    const router = express.Router({ mergeParams: true });

    router.post('/create', async (req, res) => {
        let model = await req.model.create(req.body)
        res.send({
            msg: 'success',
            data: model
        });
    })
    router.put('/update/:id', async (req, res) => {
        let model = await req.model.findByIdAndUpdate(req.params.id, req.body)
        res.send({
            msg: 'update success',
        });
    })
    router.delete('/delete/:id', async (req, res) => {
        let model = await req.model.findByIdAndDelete(req.params.id)
        res.send({
            msg: 'delete success',
        });
    })
    router.get('/', async (req, res) => {
        let options = {}, items = [];
        if (req.params.modelname === 'categories') {
            items = await req.model.find()
                .populate('parent').then(res => res.map(ele =>
                    ele.parent ? { name: ele.name, _id: ele._id, parent: ele.parent.name } : ele
                ))
        } else {
            items = await req.model.find();
        }

        res.send(items);
    })
    router.get('/options', async (req, res) => {
        let items = await req.model.find({ 'parent': null });
        res.send(items);
    })
    router.get('/info/:id', async (req, res) => {
        let items = await req.model.findById(req.params.id);
        res.send(items);
    })
    app.use('/admin/api/reset/:modelname', async (req, res, next) => {
        const name = require('inflection').classify(req.params.modelname);//将api地址中的modelname参数转成首个字母为大写单词
        req.model = require(`./../../model/${name}`);
        next();
    }, router);

}