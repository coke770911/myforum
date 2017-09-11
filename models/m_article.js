var config = require('../models/config');
var Sequelize = require('sequelize');

const sequelize = new Sequelize(config.dbname,config.username,config.password,config.optino);

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

const Article = sequelize.define('article', {
    articleTitle: {type: Sequelize.STRING},
    articleContent: {type: Sequelize.STRING},
});

exports.Article = Article;
/*
// force: true 
Article.sync().then(() => {
  // Table created
    return Article.create({
        articleTitle: '第一篇文章',
        articleContent: '適用ORM快速建立資料表'
    });
});
*/
/*
Article.findAll().then(article => {
  console.log(article)
})
*/
