// Esta linea garantiza que todo lo que se ejecute dentro de ready
// se ejecute solo cuando el html esté 100% cargado
$(document).ready(() => {
  console.log("JQuery Cargado");

  // Cuando hacemos click en "suscribirme" de los form abreviados, abrimos el popup del form completo
  $(".miniform-submit").click(() => {
    abrirPopupForm();
    trasladarMailDeMiniformAFormCompleto();
  });

  // Cuando hacemos click en la cruz de los popup, los cerramos
  $(".cerrar").click(() => {
    cerrarPopup();
  });

  // Cuando enviamos el formulario completo, mostramos el feedback
  $("#formulario-principal").on("submit", (e) => {
    e.preventDefault(); // Esta linea es importante para evitar que la página se recargue al enviar le formulario
    abrirFeedback();
    trasladarDatosDelFormCompletoAFeedback();
  });

  // En mobile, cuando apretamos el ícono de menú hamburguesa, abrir o cerrar
  // el menú mobile según corresponda
  $(".menu.mobile-only").click(() => {
    toggleMenuMobile(); 
  });

  // En mobile, cuando apretemos el fondo oscurecido detrás del menú, cerrar el menú
  $("nav.mobile-only .overlay").click(() => {
    cerrarMenuMobile(); 
  });
});




function abrirPopupForm() {
  console.log("Popup abierto");
  $(".popup-contenedor.formulario").removeClass("oculto");
}

function cerrarPopup() {
  $(".popup-contenedor.formulario").addClass("oculto");
  $(".popup-contenedor.feedback").addClass("oculto");
}

function abrirFeedback() {
  $(".popup-contenedor.formulario").addClass("oculto");
  $(".popup-contenedor.feedback").removeClass("oculto");
}

function trasladarDatosDelFormCompletoAFeedback() {
  const inputNombre = $("#nombre");
  const inputApellido = $("#apellido");
  const inputEmail = $("#email");

  const nombre = inputNombre.val();
  const apellido = inputApellido.val();
  const email = inputEmail.val();

  const spanNombre = $("#dato-nombre");
  const spanEmail = $("#dato-email");

  spanNombre.html(nombre + " ");
  spanEmail.html(email);
}

function trasladarMailDeMiniformAFormCompleto() {
  const inputEmail1 = $("#miniform-email-1");
  const inputEmail2 = $("#miniform-email-2");
  const inputEmail3 = $("#miniform-email-3");

  const email1 = inputEmail1.val();
  const email2 = inputEmail2.val();
  const email3 = inputEmail3.val();

  const inputEmailFormCompleto = $("#email");

  console.log(email1, email2, email3);
  if (email1 != "") {
    inputEmailFormCompleto.val(email1);
  } else if (email2 != "") {
    inputEmailFormCompleto.val(email2);
  } else if (email3 != "") {
    inputEmailFormCompleto.val(email3);
  }
}

function abrirMenuMobile(){
  const menuMobile = $("nav.mobile-only");
  menuMobile.removeClass("oculto");
}

function cerrarMenuMobile(){
  const menuMobile = $("nav.mobile-only");
  menuMobile.addClass("oculto");
}

function toggleMenuMobile(){
  const menuMobile = $("nav.mobile-only");
  if(menuMobile.hasClass("oculto")){
    abrirMenuMobile();
  } else {
    cerrarMenuMobile();
  }
}



function checkInput() {
  var input1 = document.getElementById("myInput1");
  var input2 = document.getElementById("myInput2");
  var span1 = document.querySelector('input[name="amigo"] + label > span');
  var span2 = document.querySelector('input[name="mailamigo"] + label > span');

  if (input1.value.length > 0) {
    span1.classList.add("has-value");
  } else {
    span1.classList.remove("has-value");
  }

  if (input2.value.length > 0) {
    span2.classList.add("has-value");
  } else {
    span2.classList.remove("has-value");
  }
}

