var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

var slide = document.getElementById('slide');
var datos = document.getElementById('datosSlide');

page('/', function (ctx, next) {

})

page('/tratamientos', function (ctx, next) {
  var slide2 = yo`<section id="slide2" class="row align-right"></section>`;
  var datosB = yo``;
  empty(slide).appendChild(slide2);
  empty(datos).appendChild(datosB);
})

page();
