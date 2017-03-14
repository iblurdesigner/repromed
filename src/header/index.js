var yo = require('yo-yo');

var el = yo`<div>
  <section id="social-container" class="txtPeque">
  <div id="barraNav" class="row align-center text-center expanded">
    <div class="column small-12 shrink"><a href="#"><i class="fi-social-facebook"></i></a></div>
    <div class="column small-12 shrink"><a href="#"><i class="fi-social-twitter"></i></a></div>
    <div class="column small-12 shrink"><a href="#"><i class="fi-social-instagram"></i></a></div>
    <div class="column small-5"><a href="https://www.google.com.ec/maps/place/0%C2%B010'11.9%22S+78%C2%B029'02.9%22W/@-0.169969,-78.4846932,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-0.169969!4d-78.484146?hl=es"><i class="fi-home">&nbsp; Vicente Cárdenas E4-133 y Av. Amazonas. Edificio Ofimedic 7mo piso. Consultorio 7A</i></a></div>
    <div class="column medium-2"><a href="tel:025111166"><i class="fi-telephone">'&nbsp;' 025 111 166 '&nbsp;'</i></a><a href="tel:0992783149"><i class="fi-telephone">&nbsp; 0992 783 149</i></a></div>
    <div class="column medium-2"><a href="mailto:c.hurtado@repromed.com.ec"><i class="fi-mail">  c.hurtado@repromed.com.ec</i></a></div>
  </div>
  </section>
  <section id="menuNav">
  <div class="row align-justify">
    <div class="column medium-2"><img src="logoRepro.svg" width="80%" alt=""></div>
    <div id="menu-container" class="column medium-8">
      <ul class="menu text-center">
        <li><img src="icons2/hospital.svg" width="30px" alt=""><a href="/">Home</a></li>
        <li><img src="icons2/pastillas.svg" width="10%" alt=""><a href="/ques"> Qué es Repromed</a></li>
        <li><img src="icons2/tratamientos.svg" width="10%" alt=""><a href="/tratamientos"> Tratamientos</a></li>
        <li><img src="icons2/doctores.svg" width="10%" alt=""><a href="#equipoMedico"> Equipo Médico</a></li>
        <li><img src="icons2/cita.svg" width="10%" alt=""><a href="#agenda"> Cita Médica  </a></li>
      </ul>
    </div>
  </div>
  </section>
</div>`;

document.getElementById('header-container').appendChild(el);
