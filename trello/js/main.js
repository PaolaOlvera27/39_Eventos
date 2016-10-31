// Evento añadir lista
var labelJs = document.getElementsByTagName("label")[0];
labelJs.addEventListener("click", anadirLista);
//Funcion añadir lista
function anadirLista () {
  var divJs = document.getElementsByTagName("div")[0];
  var formJs = document.createElement ("div");
  var inputJs = document.createElement("input");
  inputJs.setAttribute("placeholder", "Agregue Lista");
  var buttonJs = document.createElement("button");
  var txtBtn = document.createTextNode("Agregar");
  buttonJs.appendChild(txtBtn);
  buttonJs.classList.toggle("btn", "btn-primary", "block");
  divJs.removeChild(labelJs);
  formJs.appendChild(inputJs);
  formJs.appendChild(buttonJs);
  divJs.appendChild(formJs);
  inputJs.focus();
// Funcion crear Lista
  buttonJs.addEventListener("click", crearLista);
    function crearLista() {
      var nameList = document.getElementsByTagName("input")[0].value;
        if (nameList == 0) {
          alert ("Ingrese el nombre de la lista");
        }
        else {
          var pJs = document.createElement("p");
          var btnJs = document.createElement("button");
          var txtcrear = document.createTextNode("Añadir tarjeta");
          var nmList = document.createTextNode(nameList);

          btnJs.appendChild(txtcrear);
          btnJs.classList.add("btn");
          formJs.removeChild(inputJs);
          formJs.removeChild(buttonJs);
          pJs.appendChild(nmList);
          formJs.appendChild(pJs);
          formJs.appendChild(btnJs);
          divJs.appendChild(labelJs);
          }
          //Funcion para crear tarjeta
          btnJs.addEventListener("click", crearTarjeta);
          function crearTarjeta () {
              var textareaJs = document.createElement("textarea");
              formJs.appendChild(textareaJs);
              //var tarjeta = document.getElementsByTagName("textarea")[0].value
          }
    }
}
