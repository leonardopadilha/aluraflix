const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()

module.exports = router
    .get('/categorias/query', CategoriaController.pegaCategoriaPorQuery)
    .get('/categorias', CategoriaController.pegaTodasCategorias)
    .get('/categorias/:id', CategoriaController.pegaCategoriaPorId)
    .get('/categorias/tipo/:titulo', CategoriaController.pegaCategoriaPorTipo)
    .get('/categorias/:id/videos', CategoriaController.exibeVideosPorCategoria)
    .post('/categorias', CategoriaController.salvaCategoria)
    .post('/categorias', CategoriaController.salvaVariasCategorias)
    .put('/categorias/:id', CategoriaController.alteraCategoria)
    .delete('/categorias', CategoriaController.apagaCategoria)
    .delete('/categorias/todos', CategoriaController.apagaTodasCategorias)