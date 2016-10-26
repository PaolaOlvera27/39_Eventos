// Evento añadir lista
var labelJs = document.getElementsByTagName("label")[0];
labelJs.addEventListener("click", anadirLista);
//Funcion añadir lista
function anadirLista () {
  var divJs = document.getElementsByTagName("div")[0];
  divJs.removeChild(labelJs);
}
