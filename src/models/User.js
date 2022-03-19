const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({ // Cria os campos que serão utilizados para manipulação
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize // conexão
        });
    }
}

module.exports = User;