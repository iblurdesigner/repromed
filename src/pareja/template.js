var yo = require('yo-yo');
var landing = require('../landing');

var box = yo`<div class="container">
    <div class="columns boxTrata small-12">
      <h1>¿Qué se entiende por pareja infértil?</h1>
      <p>Hablamos de pareja infértil cuando después de un año de relaciones sexuales sin protección no se consigue el embarazo. Lo anterior se desprende de datos demográficos que comprueban  que el 80% de las parejas logran el embarazo al año de relaciones y el 90 % lo consigue a los dos años. Más parejas que nunca tienen problemas para tener un hijo hoy en día. Se estima que un 10 a 15% de las parejas en edad fértil tendrán alguna dificultad a la hora de concebir.</p>
    </div>
    <div class="columns boxTrata small-12">
      <h2>¿Cuándo acudir a terapias de reproducción asistida?</h2>
      <p>Una pareja joven que luego de un año de mantener relaciones sexuales sin protección no logra embarazar y si se trata de una pareja de 40 años o más debe iniciar su estudio a los 6 meses de no conseguir gestar.</p>
    </div>
  </div>`;

module.exports = landing(box);
