'use strict';

module.exports = (sequelize,type) => {
    const User = sequelize.define("user",{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        nombre: {
            type:type.STRING,
            allowNull: false,
        },
        mail: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type:type.INTEGER,
            allowNull: false,
        },

    })
}