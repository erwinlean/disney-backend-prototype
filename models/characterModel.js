'use strict';

module.exports = (sequelize,type) => {
    const Characters = sequelize.define("character",{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        img: type.STRING, //revisar como se insertan imagenes
        name: type.STRING,
        age: type.INTEGER,
        weight: type.INTEGER,
        history: type.STRING,
        relatedWork: type.STRING,
        foreingKey: type.INTEGER //REVISAR FOREING KEY Y FUNCIONAMIENTO
    })
}