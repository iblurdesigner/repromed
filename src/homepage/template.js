var yo = require('yo-yo');
var layout = require('../layout');

var home = yo`<div>
      <row class="dir">
        <div id="dr" class="column small-6"><img src="drHurtado.jpg"/></div>
        <div class="column small-6">
          <h3>Dr.</h3>
          <h2>Carlos Alberto Hurtado Montero</h2>
          <h4>Infertilidad</h4>
          <p class="textos">El poder brindar una atención oportuna e individualizada a aquellas parejas que se encuentran en busca de embarazar es el principal objetivo. Para esto es primordial mantener un dialogo claro para escoger la mejor opción de tratamiento para cada caso. La paciente siempre contara con el acompañamiento adecuado para el seguimiento de su terapia de reproducción asistida.</p>
          <h4 id="estudios">Estudios</h4>
          <p class="textos">Médico Cirujano – Pontificia Universidad Católica del Ecuador Especialista en Ginecología y Obstetricia – Pontificia Universidad Católica del Ecuador Master en Reproducción Humana Asistida – Universidad Rey Juan Carlos, Instituto Valenciano de Infertilidad – IVI. España</p>
        </div>
      </row>
    </div>`;
module.exports = layout(home);
