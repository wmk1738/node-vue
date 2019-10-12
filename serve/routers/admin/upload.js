module.exports = (app) => {
    const express = require('express');
    const router = express.Router();
    const multer = require('multer');
    const upload = multer({ dest: __dirname + './../../public/uploads' })
    router.post('/upload', upload.single('file'), (req, res) => {
        const file = req.file;
        console.log('file', file)
        file.url = `http://localhost:5000/uploads/${file.filename}`
        res.send(file);
    });

    app.use('/admin/api', router)
}