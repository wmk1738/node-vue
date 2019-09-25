const express = require('express');

const app = express();

app.use(require('cors')());
app.use(express.json());
app.use('/public', express.static(__dirname + '/public'))

require('./routers/admin')(app);//后台管理系统的路由
require('./routers/upload')(app);//文件上传路由
require('./plugins/mongodb')(app);

app.listen('3000', () => {
    console.log('http://localhost:3000')
})