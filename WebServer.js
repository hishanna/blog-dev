var express = require('express');
var http 	= require('http');
var app 	= express();
var server 	= http.createServer(app);

app.get('/', function (req, res) {
	res.send('Hello /');
});

app.get('/world.html', function (req, res){
	res.send('Hello MyHan');
});

// express 없이
// var server = http.createServer(function (req, res) {
// 	res.writeHead(200, { 'Content-Type' : 'text/plain' });
// 	res.end('Hello World');
// });

// server.listen(3000);

server.listen(3000, function () {
	console.log('Express server listening on port ' + server.address().port);
});

// package.json 에 express 등록하기!!
// git ignore 하는 법