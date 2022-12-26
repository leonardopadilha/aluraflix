const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()

module.exports = router
    .get('/categorias', CategoriaController.pegaTodasCategorias)
    .get('/categorias/:id', CategoriaController.pegaCategoriaPorId)
    .post('/categorias', CategoriaController.salvaCategoria)