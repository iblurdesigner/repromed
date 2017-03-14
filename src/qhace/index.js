var yo = require('yo-yo');

var hacemos = yo`<section id="queHacemos">
      <div class="row">
        <div id="pEsteril" class="column small-12 medium-4 vertical">
          <div class="div">
            <p>Qué se entiende por</p>
            <h3>Pareja Estéril</h3><a href="/pareja" class="button">entrar</a>
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
    </section>`;

document.body.appendChild(hacemos);
