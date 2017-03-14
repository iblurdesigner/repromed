var yo = require('yo-yo');

var slide = yo`<section id="slide" class="row align-right">
      <div class="column small-12 boxSlide"></div>
      <div id="leyenda" class="column small-8 align-self-middle">
        <h2>Queremos darte un comienzo</h2>
        <h4>para la aventura más increíble de tu vida..</h4>
      </div>
    </section>`;

document.getElementById('slide-container').appendChild(slide);
