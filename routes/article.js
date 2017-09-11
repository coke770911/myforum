var express = require('express');
var router = express.Router();
var model = require('../models/m_article');

/*文章列表. */
router.get('/', function(req, res, next) {
    var data = {};
    model.Article.findAll(
        {
            attributes: ['id','articleTitle', 'articleContent','updatedAt']
        }).then(article => {
        data = JSON.stringify(article)
    });
    res.render('article/article', { title: '文章列表' ,item:data});
});

router.get('/:id',function(req, res, next) {
    console.dir(req.params.id);
    res.send('文章內容');
});

router.post('/',function(req, res, next) {
    res.send('新增文章');
});

router.put('/:id',function(req, res, next) {
    res.send('更新');
});

router.delete('/:id',function(req, res, next) {
    res.send('刪除');
});

module.exports = router;
