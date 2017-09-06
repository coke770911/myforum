var express = require('express');
var router = express.Router();

/*文章列表. */
router.get('/process', function(req, res, next) {
    //res.render('article/article', { title: '文章列表' });
    res.send('全部文章');
});

router.get('/process/:id',function(req, res, next) {
    res.send('文章內容');
});

router.post('/process',function(req, res, next) {
    res.send('新增文章');
});

router.put('/process/:id',function(req, res, next) {
    res.send('更新');
});

router.delete('/process/:id',function(req, res, next) {
    res.send('刪除');
});

module.exports = router;
