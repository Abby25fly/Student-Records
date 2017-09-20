let estudiantes = [];

function registroEstudiantes() {

  let eventoAgregar = function(e) {
    e.preventDefault();
    let estudiante = agregarEstudiante();
    resultado.innerHTML = mostrar(estudiante);
  };

  let eventoMostrar = function(e) {
    e.preventDefault();
    let estudiantes = obtenerListaEstudiantes();
    resultado.innerHTML = mostrarLista(estudiantes);
  };

  let eventoBuscar = function(e) {
    e.preventDefault();
    let estudiantes = obtenerListaEstudiantes();
    let nombreEstudiante = prompt("¿Qué nombre desea buscar?");
    let estudianteBuscado = buscar(nombreEstudiante, estudiantes);
    resultado.innerHTML = mostrarLista(estudianteBuscado);
  };

  let eventoTopTecnico = function(e) {
    e.preventDefault();
    let estudiantes = obtenerListaEstudiantes();
    let estudiantesTopTecnico = topTecnico(estudiantes);
    resultado.innerHTML = mostrarLista(estudiantesTopTecnico);
  };

  let eventoTopHSE = function(e) {
    e.preventDefault();
    let estudiantes = obtenerListaEstudiantes();
    let estudiantesTopHSE = topHSE(estudiantes);
    resultado.innerHTML = mostrarLista(estudiantesTopHSE);
  };

  $("#agregar")[0].addEventListener("click", eventoAgregar);
  $("#mostrar")[0].addEventListener("click", eventoMostrar);
  $("#buscar")[0].addEventListener("click", eventoBuscar);
  $("#filtrar")[0].addEventListener("click", eventoTopTecnico);
  $("#contenedor-estudiantes")[0].addEventListener("click", eventoTopHSE);
};
registroEstudiantes();

function obtenerListaEstudiantes() {
  return estudiantes;
}

function agregarEstudiante() {
  let nombre = prompt("Ingrese su nombre");
  let porcenTec = prompt("Ingrese su Porcentaje Técnico Ejm. 70%");
  let porcenHSE = prompt("Ingrese su Porcentaje de Habilidades Socio Emocionales Ejm. 70%");

  let estudiante = {
    nombre: nombre,
    portec: porcenTec,
    porHSE: porcenHSE,
    estado: "Activo"
  }
  estudiantes.push(estudiante)
  return estudiante;
}

function mostrar(estudiante) {
  let resultado = "";
  resultado += "<div class='row'>";
  resultado += "<div class='col-md-12 col-xs-12 contNombres'>";
  resultado += "<div class='card blue-grey darken-1'>";
  resultado += "<div class='card-content white-text'>";
  resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
  resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.portec + "</p>";
  resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porHSE + "</p>";
  resultado += "<p><strong>Estado:</strong> " + estudiante.estado + "</p>";
  resultado += "</div>";
  resultado += "</div>";
  resultado += "</div>";
  resultado += "</div>";
  return resultado;
}

function mostrarLista(estudiantes) {
  return estudiantes.map(mostrar);
}

function buscar(nombre, estudiantes) {
  return estudiantes.filter(function(busNom) {
    return nombre.toUpperCase() == busNom.nombre.toUpperCase()
  });
}

function topTecnico(estudiantes) {
  return estudiantes.filter(function(top){
    return top.porHSE >= "70%" && top.portec >="70%";
  });
}

function topHSE(estudiantes) {
  return estudiantes.filter(function(top2) {
    return top2.porHSE >= "70%" && top2.portec >="70%";
  });
}
