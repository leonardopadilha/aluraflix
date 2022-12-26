'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Videos.init({
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
          args : [2,30],
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