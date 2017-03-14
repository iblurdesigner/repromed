var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { title: 'Repromed' });
})

app.get('/tratamientos', function(req, res) {
  res.render('index', { title: 'Repromed - Tratamientos' });
})

app.get('/ques', function(req, res) {
  res.render('index', { title: 'Repromed - Qué es Repromed' });
})

app.listen(3000, function(err) {
  if(err) return console.log('Hubo un error'), process.exit(1);
  console.log('Repromed escuchando desde el puerto 3000');
})
