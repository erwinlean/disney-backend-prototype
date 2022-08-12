'use strict';

const db = require("./dbData.json");
const Sequelize = require ("sequelize");
const character = require ("../models/characterModel");
const moviesAndSeries = require ("../models/filmsModel");
const gender = require ("../models/genderModel");
const user = require ("../models/usersModel");

//db initalization
const sequelize = new Sequelize(db.information.name , db.information.user, db.information.password, {
    host: db.information.host,
    dialect: db.information.db,
    port: db.information.port
});

//models
const MoviesAndSeries = moviesAndSeries(sequelize, Sequelize);
const Character = character(sequelize, Sequelize);
const Gender = gender(sequelize, Sequelize);
const User = user(sequelize, Sequelize);

//syncronized model with db
sequelize.sync({force: false})
    .then(() => {
        console.log("dataBase working, ok.");
    }
)

module.exports = {
    Character,
    MoviesAndSeries,
    Gender,
    User
}