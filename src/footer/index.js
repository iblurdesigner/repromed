var yo = require('yo-yo');

var el = yo`<section id="footer-container" class="footer">
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
    </section>`;

document.body.appendChild(el);
