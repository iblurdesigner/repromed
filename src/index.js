var page = require('page');

var main = document.getElementById('slide');

page('/', function (ctx, next) {
  main.innerHTML = 'otro slide <a href="/tratamientos">TRATAMIENTOS</a>';
})

page('/tratamientos', function (ctx, next) {
  main.innerHTML = 'tratamientos <a href="/">HOME</a>';
})

page();
