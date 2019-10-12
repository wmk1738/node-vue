module.exports = {
    // 选项...
    publicPath: process.env.NODE_ENV === 'production'
    ? '/admin'
    : '/',
    // : 'http://localhost:5000/admin/api',
    outputDir:__dirname+'./../serve/admin'
}