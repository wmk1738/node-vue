module.exports = (app) => {
    const express = require('express'),
        router = express.Router({ mergeParams: true }),
        jwt = require('jsonwebtoken'),
        User = require('./../../model/User'),
        assert = require('http-assert');

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
    router.get('/:populate_name?', async (req, res) => {
        let options = {}, items = [], p_name = req.params.populate_name;
        if (p_name) {
            items = await req.model.find().populate(p_name)
        } else {
            items = await await req.model.find();
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
        const token = String(req.headers.authtoken || '').split(' ').pop();
        assert(token, 412, 'token不存在');
        const { id } = jwt.verify(token, app.get('secret'), (err, data) => {
            err && assert(!err, 412, err.message);
            return data;
        });
        assert(id, 412, '用户不存在');
        const userObj = await User.findById(id);
        assert(userObj, 412, 'token无效');
        req.userName = userObj.user;
        next();
    }, async (req, res, next) => {
        const name = require('inflection').classify(req.params.modelname);//将api地址中的modelname参数转成首个字母为大写单词
        req.model = require(`./../../model/${name}`);
        next();
    }, router);

    app.use((err, req, res, next) => {
        console.log('err', err)
        res.status(err.statusCode || 500).send({
            message: err.message || ''
        })
    });

}