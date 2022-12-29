'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categorias.belongsTo(models.Videos, {
        foreignKey: 'categoriaId'
      });
    }
  }
  Categorias.init({
    titulo: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {
          msg : 'o campo título não pode ser vazio'
        },
        len : {
          args : [2,30],
          msg : 'dados inválidos para o campo título'
        },
        verificaCampo : function(dado) {
          if (Number.isInteger(dado) || dado === "null")
            throw new Error('dados incorretos para título')
        }
      }
    },
    cor: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {
          msg : 'o campo cor não pode ser vazio'
        },
        len : {
          args : [2,30],
          msg : 'dados inválidos para o campo cor'
        },
        verificaCampo : function(dado) {
          if (Number.isInteger(dado) || dado === "null")
            throw new Error('dados incorretos para cor')
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Categorias',
  });
  return Categorias;
};