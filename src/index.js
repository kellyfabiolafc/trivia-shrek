
// Función para la página de bienvenida
function handleWelcomePage() {
  // Obtener el botón con el ID "empezar" y agregar el evento click
  const empezarButton = document.getElementById("empezar");
  empezarButton.addEventListener("click", () => {
    const input = document.getElementById('input').value;
    storeValueAndRedirect(input);
  });
}

// Función para almacenar el valor del input y redirigir a la página de trivia
function storeValueAndRedirect(input) {
  localStorage.setItem('inputValue', input);
  window.location.href = "/src/trivia.html";
}

// Verificar en qué página estamos y ejecutar el código correspondiente
document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname;

  if (path.includes("/src/trivia.html")) {
    handleTriviaPage();
  } else {
    handleWelcomePage();
  }
});
