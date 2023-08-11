

// Obtén una referencia al botón
var btnOcultarMostrar = document.getElementById('btnOcultarMostrar');

// Agrega un evento de clic al botón
btnOcultarMostrar.addEventListener('click', function() {
  // Obtén una referencia al elemento que deseas ocultar/mostrar
  var elemento = document.getElementById('contenido');

  // Alterna la visibilidad del elemento
  if (elemento.style.display === 'none') {
    elemento.style.display = 'block';
  } else {
    elemento.style.display = 'none';
  }
})