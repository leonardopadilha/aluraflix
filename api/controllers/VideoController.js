const database = require('../models')

module.exports = class VideoController {
    static async pegaTodosVideos(req, res) {
        try {
            const todosVideos = await database.Videos.findAll()
            return res.status(200).json(todosVideos)
        } catch (error) {
            return res.status(422).json(error.message)
        }
    }

    static async pegaVideoId(req, res) {
        const { id } = req.params

        try {
            const videoSelecionado = await database.Videos.findOne({
                where : {
                    id : Number(id)
                }
            })
            return res.status(200).json(videoSelecionado)
        } catch(error) {
            return res.status(422).json(error.message)
        }
    }

    static async salvaVideo(req, res) {
        const video = req.body

        try {
            const novoVideo = await database.Videos.create(video)
            return res.status(201).json(novoVideo)
        } catch(error) {
            return res.status(422).json(error.message)
        }
    }

    static async alteraVideo(req, res) {
        const { id } = req.params
        const novasInfo = req.body

        try {
            await database.Videos.update(novasInfo, {
                where : {
                    id : Number(id)
                }
            })

            const videoAlterado = await database.Videos.findOne({
                where : {
                    id : Number(id)
                }
            })
            return res.status(200).json(videoAlterado)
        } catch(error) {
            return res.status(422).json(error.message)
        }
    }

    static async deletaVideo(req, res) {
        const { id } = req.params

        try {
            await database.Videos.destroy({
                where : {
                    id : Number(id)
                }
            })
            return res.status(200).json({mensagem : `id ${id} excluído com sucesso!`})
        } catch (error) {
            return res.status(422).json(error.message)
        }
    }

    static async deletaVideosMassa(req, res) {

        try {
            await database.Videos.destroy({
                where : {
                    id : req.body.id
                }
            })
            return res.status(200).json({mensagem : `Videos apagados com sucesso!`})
        } catch (error) {
            return res.status(422).json(error.message)
        }
    }
    
}