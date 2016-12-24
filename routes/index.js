var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res) {
  req.app.locals.title = 'Posts'
    knex('blog')
        .select()
        .then(function(posts) {
            res.render('index', {
                posts: posts
            })
        })
})

// Gets blog creation page
router.get('/create', function(req, res) {
    res.render('create')
})

// CREATE post
router.post('/create', function(req, res) {
    knex('blog')
        .insert({
            name: req.body.name,
            date_created: new Date(),
            title: req.body.title,
            body: req.body.body
        })
        .returning('id')
        .then(function(data) {
            res.redirect('/posts/' + data)
        });
})

// Gets update page
router.get('/update/:id', function(req, res) {
    knex('blog')
        .where('id', req.params.id)
        .first()
        .then(function(data) {
            res.render('update', {
                data: data
            })
        })
})


// UPDATE post
router.post('/update/:id', function(req, res) {
    knex('blog')
        .where('id', req.params.id)
        .update({
            name: req.body.name,
            title: req.body.title,
            body: req.body.body
        })
        .then(function(data) {
            res.redirect('/posts/' + req.params.id)
        });
})


// Gets blog post page
router.get('/:id', function(req, res) {
    knex('blog')
        .where('id', req.params.id)
        .first()
        .then(function(posts) {
          req.app.locals.title = posts.title
            res.render('details', {
                posts: posts
            })
        })
})

// deletes blog
router.delete('/:id', function(req, res) {
  console.log(req.params.id);
    knex('blog')
        .where('id', req.params.id)
        .del()
        .then(function() {
            res.redirect('/posts')
        });
})

module.exports = router;
