'use strict';

module.exports = (sequelize,type) => {
    const films = sequelize.define("moviesAndSeries",{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        img: type.STRING, //revisar como se insertan imagenes
        title: type.STRING,
        creationDate: type.INTEGER,
        qualification: type.INTEGER,
        associatedCharacters: type.STRING, //foreing key de characters??
        foreingKey: type.INTEGER //REVISAR FOREING KEY Y FUNCIONAMIENTO
    })
}