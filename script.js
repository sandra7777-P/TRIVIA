//tome en cuenta las respuestas del usuario
function respuestas() {
  //arreglo que contine la respuesta correcta
  let correctas = ["2", "2", "1"];
    //variable en el que se ingresa el documento de forms
  var trivia = document.forms["trivia cultura"];
    //variable totaliza puntos y puntea cada uno
  var total = 3;
  var puntos = 0;

  //funcion que compara los arreglos para saber cuales estuvieron completas, si se responden o si no     

  for (var i = 1; i <= total; i++) {
    if (trivia["p" + i].value === "") {
      alert("falta responder la pregunta" + i);
      return false;
    } else {
      if (trivia["p" + i].value === correctas[i - 1]) {
        puntos++;
      }
    }
  }
 
 alert('Cantidad preguntas acertadas: ' + puntos + ' de ' + total);

}