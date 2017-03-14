var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var yo = require('yo-yo');

page('/fertilidad', function (ctx, next) {
  title('Repromed - Fertilidad');
  var fert = document.getElementById('infoDoc-content');
  var slide = document.getElementById('slide-container');
  var datos = document.getElementById('datosSlide');
  empty(datos);
  empty(slide).appendChild(slideF);
  empty(fert).appendChild(template);
})

var slideF = yo`<section id="slideF" class="row align-right">
      <div class="column small-12 boxSlide"></div>
    </section>`;
