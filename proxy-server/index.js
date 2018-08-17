var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/v1/pubticker', proxy({target: 'https://api.bitfinex.com', changeOrigin: true}));
app.listen(3001);