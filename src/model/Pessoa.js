
let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const.Pessoa = db.define("Pessoa",
{
    id: {
        type: DataTypes.INTEGER
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    sobrenome: {
        DataTypes.STRING
    },
    telefone: {
        type: DataTypes.INTEGER
        allowNull: false,
    }
);

module.exports = Pessoa;
