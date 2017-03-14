var yo = require('yo-yo');
var landing = require('../landing');

var box = yo`<div class="container">
    <div class="columns boxTrata small-12">
      <h1>Estudios de pareja estéril</h1>
      <p>El estudio de una pareja estéril ha evolucionado muchísimo, pasando de un criterio academicista largo, tedioso, costoso y excesivamente lento a un criterio evidentemente pragmático, mucho más ágil y que estudia a la pareja de forma escalonada en función del tratamiento que va a precisar. De forma inicial deberemos evaluar:</p>
      <ol>
        <li>La calidad del semen del varón.</l1>
        <li>Integridad anatómica –cavidad uterina y permeabilidad tubárica.</l1>
        <li>Correcta función ovárica.</l1>
      </ol>
    </div>
    <div class="columns boxTrata small-12">
      <h2>Semen</h2>
      <p>La primera prueba que pedimos a una pareja con dificultades para concebir es un seminograma o espermatograma al varón, ya que el semen va a condicionar en gran medida el estudio a su pareja. El estudio de una muestra de semen tiene una gran variabilidad individual, por lo que en caso de ser patológico, debe ser siempre confirmado con una segunda muestra recogida con algunos días de diferencia.</p>
    </div>
    <div class="columns boxTrata small-12">
      <h2>Integridad anatómica</h2>
      <p>Útero y Ovarios. Hoy en día, no hay ninguna duda en confirmar que una cavidad uterina es normal mediante un estudio sencillo y barato como es una ecografía con sonda transvaginal. Podemos descartar fácilmente la existencia de malformaciones uterinas, miomas que afecten a la cavidad, pólipos. etc. La ecografía vaginal también nos ofrece una excelente información sobre los ovarios, su situación, su estructura, su aspecto, la existencia o no de imágenes anormales como quistes.</p>
    </div>
    <div class="columns boxTrata small-12">
      <h2>Permeabilidad tubárica.</h2>
      <p>Existen tres formas de estudiar la permeabilidad tubárica:</p>
      <h3>Histerosalpingrafía</h3>
      <p>Mediante la introducción de un contraste radioopaco a través del cervix podemos observar su salida por las fimbrias así como el trayecto tubárico. Se trata de una prueba sencilla que nos informa sobre la morfología y el funcionalismo tubárico.</p>
      <h3>Histerosalpingosonografía</h3>
      <p>Trata de visualizar las trompas mediante ecografía con la introducción de un contraste sonoluscente.</p>
      <h3>Laparoscopia</h3>
      <p>Introduciendo con un fiador un contraste a través del cervix y observando su salida por fimbrias.</p>
    </div>
    <div class="columns boxTrata small-12">
      <h2>Función Ovárica</h2>
      <p>En el segundo día del ciclo menstrual se deben estudiar: AMH, FSH, LH, TSH y Estradiol. Con lo que se tendrá una idea del estado hormonal de la paciente.</p>
    </div>
  </div>`;

module.exports = landing(box);
