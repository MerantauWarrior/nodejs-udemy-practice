const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'myviews');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes.routes);

app.use((req, res, next)=>{
  res.status(404).render('404', {pageTitle:'Page not found', path: ''});
})

app.listen(3000);