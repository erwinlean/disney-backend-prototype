'use strict';

module.exports = (sequelize,type) => {
    const Gender = sequelize.define("gender",{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        name: type.STRING,
        img: type.STRING, //revisar como se insertan imagenes
        associatedWork: type.STRING, //foreing key de works (movies/series)
        foreingKey: type.INTEGER //REVISAR FOREING KEY Y FUNCIONAMIENTO
    })
}