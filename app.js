/*
/*
 * Module dependencies
//close bracket
var express = require('express')

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'html')
app.use(express.logger('dev'))
/*app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))*/
//app.use(express.static(__dirname + '/public'))

//Run
/*app.get('/', function (req, res) {
  res.send('Hi there!')
  res.end('hi')
}) 
/*
app.get('/', function (req, res) {
  res.render('index'),
  { title: 'Home' }
  )
})

app.listen(3000)*/

var connect = require('connect');
var http = require('http');

var app = connect();

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
app.use(bodyParser.urlencoded());

// respond to all requests
app.use(function(req, res){
  res.end('Hello from Connect!\n');
});

//create node.js http server and listen on port
http.createServer(app).listen(process.env.PORT || 3000);