const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
var models = require('./models');
var controllers = require('./controllers');
var app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/api/recs', controllers.fetchBundle)
app.get('/t', controllers.fetchItems);

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})