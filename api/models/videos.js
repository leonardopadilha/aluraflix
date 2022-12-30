'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Videos.belongsTo(models.Categorias, {
        foreignKey : 'categoriaId'
      })
    }
  }
  Videos.init({
    categoriaId: {
      type : DataTypes.INTEGER,
      defaultValue: 1,
      validate : {
        validaTitulo : function(dado) {
          if (!Number.isInteger(dado))
            throw new Error('valor inválido para o título') 
        }
      }
    },
    titulo: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: true,
        len: [2,30], 
        validaTitulo : function(dado) {
          if (Number.isInteger(dado))
            throw new Error('valor inválido para o título') 
        }
      }
    },
    descricao: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: true,
        len: {
          args : [2,80],
          msg: "limite máximo para descrição - 30 caracteres"
        },
        validaDescricao : function(dado) {
          if (Number.isInteger(dado))
            throw new Error('valor inválido para a descrição')
        } 
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isUrl: {
          args : true,
          msg : 'dado do tipo url inválido'
        }
      }
    }
  }, {
    sequelize,
    //paranoid: true,
    modelName: 'Videos',
  });
  return Videos;
};