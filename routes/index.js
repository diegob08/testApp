var express = require('express');
var router = express.Router();

const templateTypes = [
  { name: "Jade", usefulness: "sucky" },
  { name: "EJS", usefulness: "a little better" },
  { name: "handlebars", usefulness: "awesome" }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  title: 'Express',
  message: "I need vacations",
  templates: templateTypes
  });
});

module.exports = router;
