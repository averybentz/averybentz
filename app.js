var express = require('express');
var http = require('http');

var app = express();

// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

// store session state in browser cookie
var cookieSession = require('cookie-session');
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}));

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var fs = require('fs');

//Read form page as plain text
var form_page = fs.readFileSync('index.html', 'utf8');

//Get them
app.get('/', function (req, res) {
  res.send(form_page);
});

//create node.js http server and listen on port
http.createServer(app).listen(process.env.PORT || 3000);