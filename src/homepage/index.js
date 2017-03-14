var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Repromed - Home')
  var equipo = document.getElementById('infoDoc-content');
  empty(equipo).appendChild(template);
})
