const express = require('express');
const path = require('path');
const app = express();

app.set('secret', 'wmk')
app.use(require('cors')());
app.use(express.json());
// app.use('public', express.static(__dirname + '/public'))
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

require('./routers/admin/upload')(app);//文件上传路由
require('./routers/admin/login')(app);//用户登录
require('./routers/admin')(app);//后台管理系统的路由
require('./plugins/mongodb')(app);

app.listen('3000', () => {
    console.log('http://localhost:3000')
})