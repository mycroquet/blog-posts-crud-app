var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
    /* GET home page. */
router.get('/', function(req, res, next) {
    knex('blog').select().then(function(posts) {
        res.render('index', {posts: posts})
    });
});

router.get('/:id', function(req, res, next) {
    knex('blog').where('id', req.params.id).first().then(function(posts) {
        res.render('details', {posts: posts})
    });
});

module.exports = router;
