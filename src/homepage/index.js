var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var yo = require('yo-yo');

page('/', function (ctx, next) {
  title('Repromed - Home')
  var equipo = document.getElementById('infoDoc-content');
  var slide = document.getElementById('slide-container');
  empty(slide).appendChild(slideH);
  empty(equipo).appendChild(template);
})

var slideH = yo`<section id="slide" class="row align-right">
      <div class="column small-12 boxSlide"></div>
      <div id="leyenda" class="column small-8 align-self-middle">
        <h2>Queremos darte un comienzo</h2>
        <h4>para la aventura más increíble de tu vida..</h4>
      </div>
    </section>`;
