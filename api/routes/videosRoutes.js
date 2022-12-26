const { Router } = require('express')
const VideoController = require('../controllers/VideoController')

const router = Router()

module.exports = router
    .get('/videos', VideoController.pegaTodosVideos)
    .get('/videos/:id', VideoController.pegaVideoId)
    .post('/videos', VideoController.salvaVideo)
    .put('/videos/:id', VideoController.alteraVideo)
    .delete('/videos/:id', VideoController.deletaVideo)
    .delete('/videos', VideoController.deletaVideosMassa)

