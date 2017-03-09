var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

var slide = document.getElementById('slide');
// var datos = document.getElementById('datosSlide');
var equipo = document.getElementById('equipoMedico');

page('/', function (ctx, next) {

})

page('/tratamientos', function (ctx, next) {
  var slide2 = yo`<section id="slide2" class="row align-right"></section>`;
  // var datosB = yo``;
  var equipoB = yo`<section id="tratamientos-content" class="tratamientos">
                      <div class="row">
                        <div class="column small-12 boxTrata">
                          <h1>Tratamientos de Fertilidad</h1>
                          <p>Hablamos de pareja infértil cuando después de un año de relaciones sexuales sin protección no se consigue el embarazo. Lo anterior se desprende de datos demográficos que comprueban  que el 80% de las parejas logran el embarazo al año de relaciones y el 90 % lo consigue a los dos años. </br>Más parejas que nunca tienen problemas para tener un hijo hoy en día. Se estima que un 10 a 15% de las parejas en edad fértil tendrán alguna dificultad a la hora de concebir.</p>
                        </div>
                        <div class="column small-12 boxTrata">
                          <h2>Inseminación Artificial</h2>
                          <p>Consiste en colocar un número importante de espermatozoides capacitados previamente en laboratorio dentro del útero de la paciente que ha sido sometida a un ciclo d estimulación ovárica.</p>
                        </div>
                    </section>`;
  empty(slide).appendChild(slide2);
  // empty(datos).appendChild(datosB);
  empty(equipo).appendChild(equipoB);
})

page();
