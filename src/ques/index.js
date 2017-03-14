var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/ques', function (ctx, next) {
  title('Repromed - Qué es Repromed');
  var equipo = document.getElementById('infoDoc-content');
  empty(equipo).appendChild(template);
})
