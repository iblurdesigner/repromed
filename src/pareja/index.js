var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var yo = require('yo-yo');

page('/pareja', function (ctx, next) {
  title('Repromed - Pareja Estéril');
  var pareja = document.getElementById('infoDoc-content');
  var slide = document.getElementById('slide-container');
  var datos = document.getElementById('datosSlide');
  empty(datos);
  empty(slide).appendChild(slideP);
  empty(pareja).appendChild(template);
})

var slideP = yo`<section id="slideP" class="row align-right">
      <div class="column small-12 boxSlide"></div>
    </section>`;
