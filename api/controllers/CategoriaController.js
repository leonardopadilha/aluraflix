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

    static async pegaCategoriaPorTipo(req, res) {
        try {
            const categorias = await database.Categorias.findAll({
                where : {
                    titulo : req.params.titulo
                }
            })
            return res.status(200).json(categorias)
        } catch (error) {
            return res.status(200).json(error.message)
        }
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

    static async apagaCategoria(req, res) {
        const { id } = req.params

        try {
            await database.Categorias.destroy({
                where : {
                    id : Number(id)
                }
            })
            return res.status(200).json({mensagem : `id ${id} deletado com sucesso!`})
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    static async alteraCategoria(req, res) {
        const { id } = req.params
        const novaCategoria = req.body

        try {
            await database.Categorias.update(novaCategoria, {
                where : {
                    id : Number(id)
                }
            })
            
            const categoriaAlterada = await database.Categorias.findOne({
                where : {
                    id : Number(id)
                }
            })
            return res.status(201).json(categoriaAlterada)
        } catch (error) {
            return res.status(422).json(error.message)
        }
    }
}