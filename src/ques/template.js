var yo = require('yo-yo');

var landing = require('../landing');

var ques = yo`<div class="container tratamientos">
        <div class="column small-12 boxTrata">
          <h1>Qué es Repromed</h1>
          <p>Repromed es una clinica que se expecializa en la reproducción humana.</p>
        </div>
  </div>`;

  module.exports = landing(ques);
