const { Router } = require('express')
const VideoController = require('../controllers/VideoController')

const router = Router()

module.exports = router
    .get('/videos', VideoController.pegaTodosVideos)
    .get('/videos/:id', VideoController.pegaVideoId)
    .get('/videos/:videoId/categorias/:categoriaId', VideoController.pegaVideoPorCategoria)
    .post('/videos', VideoController.salvaVideo)
    .put('/videos/:id', VideoController.alteraVideo)
    .delete('/videos/:id', VideoController.deletaVideo)
    .delete('/videos', VideoController.deletaVideosMassa)
    .delete('/videos/todos', VideoController.deletaTodosVideos)

