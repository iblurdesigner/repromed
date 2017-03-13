var yo = require('yo-yo');

var landing = require('../landing');

var box = yo`<div class="container tratamientos">
        <div class="column small-12 boxTrata">
          <h1>Tratamientos de Fertilidad</h1>
          <p>Hablamos de pareja infértil cuando después de un año de relaciones sexuales sin protección no se consigue el embarazo. Lo anterior se desprende de datos demográficos que comprueban  que el 80% de las parejas logran el embarazo al año de relaciones y el 90 % lo consigue a los dos años. Más parejas que nunca tienen problemas para tener un hijo hoy en día. Se estima que un 10 a 15% de las parejas en edad fértil tendrán alguna dificultad a la hora de concebir.</p>
        </div>
        <div class="column small-12 boxTrata">
          <h2>Inseminación Artificial</h2>
          <p>Consiste en colocar un número importante de espermatozoides capacitados previamente en laboratorio dentro del útero de la paciente que ha sido sometida a un ciclo d estimulación ovárica.</p>
        </div>
        <div class="column small-12 boxTrata">
          <h2>Fecundación In Vitro FIV</h2>
          <p>En este proceso y dentro del laboratorio se coloca el ovocito de la paciente junto a espermatozoides para facilitar a fecundación. Una vez fecundado el embrión se transfiere a la paciente. Inyección Intracitoplasmática de espermatozoide. ICSI. Es la inyección directa de un espermatozoide dentro del ovocito. Vitrificación de Óvulos. Una alternativa para preservar la fecundidad es la vitrificación de ovocitos, mismos que la paciente podrá utilizar en un futuro.</p>
        </div>
        <div class="column small-12 boxTrata">
          <h2>Congelación de Embriones</h2>
          <p>La preservación de embriones para ser transferidos en un futuro es una práctica segura que facilita la gestación.</p>
        </div>
  </div>`;
module.exports = landing(box);
