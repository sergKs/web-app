var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(serveStatic(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: 'dist'});
});

app.listen(3000);

