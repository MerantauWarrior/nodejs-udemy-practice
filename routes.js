const express = require('express');

const router = express.Router();

const users = [];

router.get('/',(req, res, next) => {
  res.render('home', {pageTitle: 'Home', path: '/'});
})
router.post('/add-user',(req, res, next) => {
  console.log(req.body);
  users.push({username: req.body.userName});
  res.redirect('/users');
})
router.get('/users',(req, res, next) => {
  res.render('users', {pageTitle: 'Users', path: '/users', users: users});
})

exports.routes = router;
exports.users = users;