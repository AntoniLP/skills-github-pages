document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Gracias por enviar el formulario, " + document.getElementById("nombre").value + "!");
});
