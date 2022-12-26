const bodyParser = require('body-parser')
const videos = require('./videosRoutes')
const categoria = require('./categoriasRoutes')

module.exports = app => {
    app.use(
        bodyParser.json(),
        videos,
        categoria
    )
}