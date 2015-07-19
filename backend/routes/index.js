var express = require('express');
var router = express.Router();
var cps = require('cps-api');
var ProfileSchema = require('../models/profileSchema.js')
var cpsConn = new cps.Connection('tcp://cloud-eu-0.clusterpoint.com:9007', 'Database',
            process.env.CLUSTERPOINT_USERNAME, process.env.CLUSTERPOINT_PASSWORD,
            'document', 'document/id', {account: 1393});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  var newProfile = new ProfileSchema(req.body);
  var document = [newProfile];
  cpsConn.sendRequest(new cps.InsertRequest(document), function (err, resp) {
     if (err){
       return console.error(err);
     } 
     console.log(resp);
     res.send('new user');
  });
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.send('hello!');
});



module.exports = router;
