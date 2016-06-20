/*
 * Module dependencies
 */
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
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

//Run
app.get('/', function (req, res) {
  res.send('Hi there!')
}) 
/*
app.get('/', function (req, res) {
  res.render('index'),
  { title: 'Home' }
  )
})*/