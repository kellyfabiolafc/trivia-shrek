//  Función para la página de trivia
let counter = 0;
const correctAnswers = ["Shrek", "Burro", "Fiona", "Donkey", "Ogros"];
// let inputNoAnswers = 0;
function handleTriviaPage() {
  // Obtener el mensaje de bienvenida y mostrar el valor del input almacenado
  const message = document.getElementById("welcome-ogre");
  const inputValue = localStorage.getItem("inputValue");

  if (inputValue) {
    const randomGreeting = obtenerSaludoRandom();
    message.textContent = `${randomGreeting}, ${inputValue}! ¿Listo/a para sumergirte en el emocionante mundo de Shrek? ¡Que empiece la Trivia!`;
  } else {
    message.textContent =
      "¡Hola, amante de los cuentos de hadas! ¿Listo/a para poner a prueba tus conocimientos con la Trivia de Shrek?";
  }

  // Temporizador para eliminar el mensaje después de 10 segundos
  setTimeout(() => {
    message.textContent = ""; // Limpiar el contenido del mensaje
  }, 10000); // 10000 milisegundos = 10 segundos

  document.getElementById("enviar").addEventListener("click", () => {
    counter = 0;
    //  inputNoAnswers = 0;
    correctAnswers.map((question) => {
      const inputs = document.querySelector(`input[value="${question}"]`);
      if (inputs.checked) {
        counter += 1;
        // inputNoAnswers +=1
      }
    });
    // document.querySelector('#miModal').addEventListener('shown.bs.modal', () => {
      const totalQuestionsElement = document.querySelector("#totalQuestions");
      const resultCorrectsElement = document.querySelector("#resultCorrects");
      const resultIncorrectsElement = document.querySelector("#resultIncorrects");
    
      totalQuestionsElement.textContent = `Total de preguntas: ${correctAnswers.length}`;
      resultCorrectsElement.textContent = `Cantidad de respuestas correctas: ${counter}`;
      resultIncorrectsElement.textContent = `Cantidad de respuestas incorrectas: ${correctAnswers.length - counter}`;
      document.getElementById('form-questions').reset();
    // });

  });

}

// Verificamosen qué página estamos y ejecutar el código correspondiente
document.addEventListener("DOMContentLoaded", function () {
  handleTriviaPage();
});

// Función para obtener un saludo aleatorio y divertido
function obtenerSaludoRandom() {
  const greetings = [
    "¡Hola, ogro valiente!",
    "¡Saludos, habitante del pantano!",
    "¡Eh, amigo burro!",
    "¡Bienvenido al reino de Far Far Away!",
    "¡Qué bueno verte, Shrekoniano!",
    "¡Alto ahí, intrépido aventurero!",
  ];

  // Obtener un índice aleatorio del arreglo de saludos
  const randomIndex = Math.floor(Math.random() * greetings.length);

  // Devolver el saludo aleatorio
  return greetings[randomIndex];
}

