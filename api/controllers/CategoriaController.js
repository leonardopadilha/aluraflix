const database = require('../models');

module.exports = class CategoriaController {
    static async pegaTodasCategorias(req, res) {
        try {
            const todasCategorias = await database.Categorias.findAll()
            return res.status(200).json(todasCategorias)
        } catch (error) {
            return res.status(422).json(error.message)
        }
    }

    static async pegaCategoriaPorId(req, res) {
        const { id } = req.params
        
        const categoriaPorId = await database.Categorias.findOne({
                where : {
                    id : Number(id)
                }
            })

        categoriaPorId === null ? res.status(404).json({mensagem : `id ${id} não encontrado`}) : res.status(200).json(categoriaPorId)
    }

    static async salvaCategoria(req, res) {
        const categoria = req.body

        try {
            const novaCategoria = await database.Categorias.create(categoria)
            return res.status(201).json(novaCategoria)
        } catch (error) {
            return res.status(422).json(error.message)
        }
    }
}