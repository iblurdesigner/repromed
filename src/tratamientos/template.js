var yo = require('yo-yo');

module.exports = yo`<section id="equipoMedico" class="equipoMedico">
  <div class="row">
    <div id="infoDoc-content" class="medium-8 infoDoc">
      <div id="dr" class="column small-6"><img src="drHurtado.jpg"/></div>
      <div class="column small-6">
        <h3>Dr.</h3>
        <h2>Carlos Alberto Hurtado Montero</h2>
        <h4>Infertilidad</h4>
        <p class="textos">El poder brindar una atención oportuna e individualizada a aquellas parejas que se encuentran en busca de embarazar es el principal objetivo. Para esto es primordial mantener un dialogo claro para escoger la mejor opción de tratamiento para cada caso. La paciente siempre contara con el acompañamiento adecuado para el seguimiento de su terapia de reproducción asistida.</p>
        <h4 id="estudios">Estudios</h4>
        <p class="textos">Médico Cirujano – Pontificia Universidad Católica del Ecuador Especialista en Ginecología y Obstetricia – Pontificia Universidad Católica del Ecuador Master en Reproducción Humana Asistida – Universidad Rey Juan Carlos, Instituto Valenciano de Infertilidad – IVI. España</p>
      </div>
    </div>
    <div id="agenda" class="column small-12 medium-4">
      <h4>Agende su cita</h4>
      <p class="textos">Te animas a emprender el viaje de tu vida, reserve su cita médica. Estaremos gustosos de atenderlo</p>
      <form action="https://formspree.io/nevomen@gmail.com" method="POST" novalidate="novalidate" data-abide="data-abide">
        <div style="display:none" data-abide-error="data-abide-error" class="row columns small-12 text-center error-container">
          <p><i class="fi-alert"> Ingresó un correo no válido</i></p>
        </div>
        <div class="row columns small-12">
          <div class="input-group">
            <div class="input-group-label"><i class="fi-torso"></i></div>
            <input type="text" name="Nombres" placeholder="Nombres y apellidos"/>
          </div>
        </div>
        <div class="row columns small-12">
          <div class="input-group">
            <div class="input-group-label"><i class="fi-telephone"></i></div>
            <input type="tel" name="Teléfono" placeholder="No. telefónico"/>
          </div>
        </div>
        <div class="row columns small-12">
          <div class="input-group">
            <div class="input-group-label"><i class="fi-home"></i></div>
            <input type="text" name="Dirección" placeholder="Dirección"/>
          </div>
        </div>
        <div class="row columns small-12">
          <div class="input-group">
            <div class="input-group-label"><i class="fi-mail"></i></div>
            <input type="email" name="email" placeholder="tu@correo.com"/>
          </div>
        </div>
        <div class="row columns small-12">
          <textarea name="Mensaje" placeholder="Mensaje" required="required" class="mensaje"></textarea>
          <div class="input-group-button">
            <input type="submit" value="Enviar" class="button"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>`;
