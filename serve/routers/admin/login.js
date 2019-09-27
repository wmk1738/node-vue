module.exports = (app) => {
    const express = require('express'),
        router = express.Router(),
        assert = require('http-assert');
    router.post('/login', async (req, res) => {
        const { user, password } = req.body;
        const UserModel = require('./../../model/User');
        //第一步找用户，根据用户名
        const userObj = await UserModel.findOne({ user }).select('+password');
        assert(userObj, 422, '用户不存在')
        //第二步校验密码,使用bcrypt解密
        const isValid = require('bcrypt').compareSync(password, userObj.password);
        assert(isValid, 422, '密码错误')
        //第三步返回token
        const jwt = require('jsonwebtoken'),
            secretOrPrivateKey = 'wmk',
            token = jwt.sign({ id: userObj._id }, secretOrPrivateKey, {
                expiresIn: 60 * 60 * 1  // 1小时过期
            });
        res.send({ token });
    });

    app.use('/admin/api', router)
}