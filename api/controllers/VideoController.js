const database = require('../models')
const { QueryTypes } = require('sequelize');

module.exports = class VideoController {
    static async pegaTodosVideos(req, res) {
        const titulo_pesquisado = req.query
        const pesquisa = Object.values(titulo_pesquisado);

        try {
            const videos_query = await database.sequelize.query(
                "SELECT * FROM `videos` WHERE titulo LIKE :titulo_filme", 
                {   
                    model : database.Videos,
                    //mapToModel: true,
                    //raw: true,
                    replacements: { titulo_filme: `%${pesquisa}%` },
                    type: QueryTypes.SELECT 
                }
            );
            return res.status(200).json(videos_query)
        } catch (error) {
            return res.status(422).json(error.message)
        }

    }


    static async exibeTodosVideos(req, res) {
        try {
            const todosVideos = await database.Videos.findAll()
            return res.status(200).json({
                produto : "videos",
                status : "sucesso",
                data : todosVideos
            })
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

    static async pegaVideoPorCategoria(req, res) {
        const { videoId, categoriaId } = req.params
        try {
            const videoEscolhido = await database.Videos.findOne({
                where : {
                    id : Number(videoId),
                    categoriaId : Number(categoriaId)
                },
                include : {
                    model : database.Categorias,
                    required : true,
                    attributes : ['titulo']
                }
            })
            return res.status(200).json(videoEscolhido)
        } catch (error) {
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

    static async salvarVariosVideos(req, res) {
        try {
            const variosVideos = await database.Videos.bulkCreate(req.body)
            return res.status(201).json({
                produto : "videos",
                status : "sucesso",
                data : variosVideos
            })
        } catch (error) {
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

    static async deletaTodosVideos(req, res) {
        try {
            await database.Videos.destroy({
                truncate : true
            })
            return res.status(200).json({mensagem : "Registros apagados com sucesso"})
        } catch (error) {
            return res.status(422).json(error.message)
        }
    }
    
}
