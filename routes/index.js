var express = require('express');
var sql = require ('mysql');
var connect = require('../utils/sqlConnect');
var router = express.Router();

const templateTypes = [
  { name: "Jade", usefulness: "sucky" },
  { name: "EJS", usefulness: "a little better" },
  { name: "Handlebars", usefulness: "Awesome" }
]

/* GET home page. */
router.get('/', function(req, res, next){

  connect.query('SELECT * FROM mainmodel', (err, result, fields) =>{
    if(err){
      throw err; console.log(err);
    }else{
      console.log(result);
    }
  });

  res.render('home', {
  title: 'Express',
  message: "I need vacations",
  templates: templateTypes,
  anothermessage : "handlebars is awesome"
  });
});

module.exports = router;
