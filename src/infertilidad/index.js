var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var yo = require('yo-yo');

page('/infertilidad', function (ctx, next) {
  title('Repromed - Infertilidad');
  var infer = document.getElementById('infoDoc-content');
  var slide = document.getElementById('slide-container');
  var datos = document.getElementById('datosSlide');
  empty(datos);
  empty(slide).appendChild(slideI);
  empty(infer).appendChild(template);
})

var slideI = yo`<section id="slideI" class="row align-right">
      <div class="column small-12 boxSlide"></div>
    </section>`;
