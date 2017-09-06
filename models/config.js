var config = {
    db:"host",
    username:"root",
    password:"root",
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: '../db.sqlite3'
}

module.exports = config;