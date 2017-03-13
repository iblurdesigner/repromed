var page = require('page');
var empty = require('empty-element');
var template = require('./template');

page('/ques', function (ctx, next) {
  var equipo = document.getElementById('infoDoc-content');
  var hacemos = document.getElementById('queHacemos');
  empty(equipo).appendChild(template);
})
