var express = require('express');
var http = require('http');

var app = express();

// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

app.use(express.static('public'));

// parse urlencoded request bodies into req.body
var body_parser = require('body-parser');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

var fs = require('fs');

//Handle users using knox
//Create s3 client
var knox = require('knox');
var client = knox.createClient({
    key: 'AKIAJACGUIOE76YF2I6A'
  , secret: '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'
  , bucket: 'averybentz'
});


//Read form page as plain text
var form_page = fs.readFileSync('index.html', 'utf8');

//Get them
app.get('/', function (req, res) {
  res.send(form_page);
});

//create node.js http server and listen on port
//http.createServer(app).listen(process.env.PORT || 3000);
var server = app.listen(process.env.PORT || 3000);