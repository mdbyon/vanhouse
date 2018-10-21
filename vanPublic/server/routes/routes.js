var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Profile = require('../../client/models/Profile');

router.get('/', function(req, res){
  res.render('index')
});

router.route('/addUser')
.post(function(req,res) {
 var profile = new Profile();
  profile.name = req.body.desc;
  profile.bio = req.body.bio;
profile.save(function(err) {
      if (err)
        res.send(err);
      res.send('Profile successfully added!');
  });
})
module.exports = router;