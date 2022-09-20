
const {createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
        createProxyMiddleware ('/api1', { // if start with api1, with start it
        target: 'http://localhost:5003',
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
    }),
        createProxyMiddleware ('/api2', {
        target: 'http://localhost:5002',
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
    })
  )
}



// const proxy = require('http-proxy-middleware')

// module.exports = funcion(app){
//     app.use(
//         proxy('/api1', {
//             target: 'http://localhost:5000',
//             changeOrigin:true,
//             pathRewrite:{'^/api1':''}
//         })
//     )
// }
// const proxy = require("http-proxy-middleware");
// 是不行的，要去yarn  add http-proxy-middleware，然后const 
// { createProxyMiddleware } = require("http-proxy-middleware");，
// 把全部的proxy改为createProxyMiddleware，还有，文件名，不要写错了！！！