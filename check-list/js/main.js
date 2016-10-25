// Evento del clik en el boton Agregar
var boton = document.getElementById("btn-ag");
boton.addEventListener("click", agregarTarea);
// funcuion al hacer el Evento
function agregarTarea() {
  var texto = document.getElementById("txt-tarea").value;
  if (texto == 0) {
    alert ("Ingresa texto");
  }
  else {
      var ulJs = document.getElementById("ul-lista");
      var liJs = document.createElement("li");
      var cbox = document.createElement("input");
      cbox.setAttribute("type", "checkbox");
      var spanJs = document.createElement("span");
      //spanJs.classList.add("");
      var labelJs = document.createElement("label");
      var txt = document.createTextNode(texto);
      labelJs.appendChild(txt);
      liJs.appendChild(cbox);
      liJs.appendChild(labelJs);
      liJs.appendChild(spanJs);
      ulJs.appendChild(liJs);
  }
}
