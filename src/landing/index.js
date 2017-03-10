var yo = require('yo-yo');

module.exports = function landing(box) {
  return yo`<section id="social-container" class="txtPeque">
      <div id="barraNav" class="row align-center text-center expanded">
        <div class="column small-12 shrink"><a href="#"><i class="fi-social-facebook"></i></a></div>
        <div class="column small-12 shrink"><a href="#"><i class="fi-social-twitter"></i></a></div>
        <div class="column small-12 shrink"><a href="#"><i class="fi-social-instagram"></i></a></div>
        <div class="column small-5"><a href="https://www.google.com.ec/maps/place/0%C2%B010'11.9%22S+78%C2%B029'02.9%22W/@-0.169969,-78.4846932,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-0.169969!4d-78.484146?hl=es"><i class="fi-home">&nbsp; Vicente Cárdenas E4-133 y Av. Amazonas. Edificio Ofimedic 7mo piso. Consultorio 7A</i></a></div>
        <div class="column medium-2"><a href="tel:025111166"><i class="fi-telephone">&nbsp; 025 111 166 &nbsp;</i></a><a href="tel:0992783149"><i class="fi-telephone">&nbsp; 0992 783 149</i></a></div>
        <div class="column medium-2"><a href="mailto:c.hurtado@repromed.com.ec"><i class="fi-mail">&nbsp; c.hurtado@repromed.com.ec</i></a></div>
      </div>
    </section>
    <section id="menuNav">
      <div class="row align-justify">
        <div class="column medium-2"><img src="logoRepro.svg" width="80%" alt=""></div>
        <div id="menu-container" class="column medium-8">
          <ul class="menu text-center">
            <li><img src="icons2/hospital.svg" width="30px" alt=""><a href="/">Home</a></li>
            <li><img src="icons2/pastillas.svg" width="10%" alt=""><a href="#"> Qué es Repromed</a></li>
            <li><img src="icons2/tratamientos.svg" width="10%" alt=""><a href="/tratamientos"> Tratamientos</a></li>
            <li><img src="icons2/doctores.svg" width="10%" alt=""><a href="#"> Equipo Médico</a></li>
            <li><img src="icons2/cita.svg" width="10%" alt=""><a href="#"> Cita Médica</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section id="slide" class="row align-right">
      <div class="column small-12 boxSlide"></div>
      <div id="leyenda" class="column small-8 align-self-middle">
        <h2>Queremos darte un comienzo</h2>
        <h4>para la aventura más increíble de tu vida..</h4>
      </div>
    </section>
    <div id="datosSlide" class="row">
      <div role="region" aria-label="Favorite Text Ever" data-orbit="" class="column orbit">
        <ul class="orbit-container">
          <div class="orbit-previous"></div>
          <li class="is-active orbit-slide">
            <div>
              <p class="text-center">Se estima que un 10 a 15 % de las parejas en edad fértil tendrán algún inconveniente a la hora de concebir hablamos de 6080 millones de parejas en todo el mundo</p>
            </div>
          </li>
          <li class="orbit-slide">
            <div>
              <p class="text-center">El proceso reproductivo en la especie humana es altamente ineficaz comparado con otras especies animales. El momento de máxima fecundidad suele ser los primeros meses que una pareja busca la gestación (20 – 25% de embarazo por ciclo), de modo que  al cabo de 36 meses, dos terceras partes de las parejas han logrado embarazo.</p>
            </div>
          </li>
          <li class="orbit-slide">
            <div>
              <p class="text-center">Los factores etiológicos de la infertilidad se distribuyen casi por igual entre los miembros de la pareja: un 30% de los casos se deben a causas masculinas, un 30% a problemas de la mujer, y un 15 a 30 % a factores mixtos. Existe aproximadamente un 10% de las parejas en las que todas las pruebas actuales para el estudio de la infertilidad, son normales y por lo  tanto no encontramos causa alguna de su problema. Es lo que se denomina esterilidad de origen desconocido o sin causa aparente.</p>
            </div>
          </li>
        </ul>
        <nav class="orbit-bullets">
          <button data-slide="0" class="is-active"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
          <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
          <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
        </nav>
      </div>
    </div>
    <section id="queHacemos">
      <div class="row">
        <div id="pEsteril" class="column small-12 medium-4 vertical">
          <div class="div">
            <p>Qué se entiende por</p>
            <h3>Pareja Estéril</h3><a href="#" class="button">entrar</a>
          </div>
        </div>
        <div id="eInfertilidad" class="column small-12 medium-4 vertical">
          <div class="div">
            <p>Estudios de</p>
            <h3>Infertilidad </br></h3><a href="#" class="button">entrar</a>
          </div>
        </div>
        <div id="tFertilidad" class="column small-12 medium-4 vertical">
          <div class="div">
            <p>Tratamientos de</p>
            <h3>Fertilidad </br></h3><a href="#" class="button">entrar</a>
          </div>
        </div>
      </div>
    </section>
    <section id="equipoMedico" class="equipoMedico">
      <div class="box">
        ${box}
        <div id="agenda" class="column small-12 medium-4">
          <h4>Agende su cita</h4>
          <p class="textos">Te animas a emprender el viaje de tu vida, reserve su cita médica. Estaremos gustosos de atenderlo</p>
          <form action="https://formspree.io/nevomen@gmail.com" method="POST" novalidate data-abide>
            <div style="display:none" data-abide-error class="row columns small-12 text-center error-container">
              <p><i class="fi-alert"> Ingresó un correo no válido</i></p>
            </div>
            <div class="row columns small-12">
              <div class="input-group">
                <div class="input-group-label"><i class="fi-torso"></i></div>
                <input type="text" name="Nombres" placeholder="Nombres y apellidos">
              </div>
            </div>
            <div class="row columns small-12">
              <div class="input-group">
                <div class="input-group-label"><i class="fi-telephone"></i></div>
                <input type="tel" name="Teléfono" placeholder="No. telefónico">
              </div>
            </div>
            <div class="row columns small-12">
              <div class="input-group">
                <div class="input-group-label"><i class="fi-home"></i></div>
                <input type="text" name="Dirección" placeholder="Dirección">
              </div>
            </div>
            <div class="row columns small-12">
              <div class="input-group">
                <div class="input-group-label"><i class="fi-mail"></i></div>
                <input type="email" name="email" placeholder="tu@correo.com">
              </div>
            </div>
            <div class="row columns small-12">
              <textarea name="Mensaje" placeholder="Mensaje" required class="mensaje"></textarea>
              <div class="input-group-button">
                <input type="submit" value="Enviar" class="button">
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section id="footer-container" class="footer">
      <div class="row">
        <div class="column small-3">
          <h5>Sobre Repromed</h5><a href="#">Inseminación Artificial</a><a href="#">Fecundación In Vitro FIV</a><a href="#">Congelación de Embriones</a>
        </div>
        <div class="column small-3">
          <h5>Últimos Tweets</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>https://t.co/YAmpOlbk18</p>
          <p>Tuesday Jul 26 - 10:28am</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>https://t.co/YAmpOlbk18</p>
          <p>Tuesday Jul 26 - 10:28am</p>
        </div>
        <div class="column small-3">
          <h5>Artículos Recientes</h5><a href="#">Inseminación Artificial</a><a href="#">Fecundación In Vitro FIV</a><a href="#">Congelación de Embriones</a><a href="#">Inseminación Artificial</a><a href="#">Fecundación In Vitro FIV</a><a href="#">Congelación de Embriones</a>
        </div>
        <div class="column small-3">
          <h5>Oficinas</h5>
          <p>Vicente Cárdenas E4-133 y Av. Amazonas. Edificio Ofimedic 7mo piso. Consultorio 7A. 0992 783 149 c.hurtado@repromed.com.ec</p>
          <div data-interchange="[map.html, medium]" class="map"></div>
        </div>
      </div>
    </section>`
}
