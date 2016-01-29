var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT  || 3001;
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('combined'));
var router = express.Router();
router.route('/')
  .get(function(req,res) {
    res.status(200).json({
      message: 'Welcome to hello-svc api'
    });
  });
app.use('/api', router);
app.listen(port, function() {
  console.log('hello-svc listens on',port);
});
