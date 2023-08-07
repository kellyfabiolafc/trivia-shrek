
// TODO: Función para la página de trivia
let counter = 0;

const correctAnswers = [
  "Shrek",
  "Burro",
  "Fiona",
  "Donkey",
  "Ogros",
];

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

  
document.getElementById('enviar').addEventListener('click',()=>{
  counter = 0;
  correctAnswers.map((question) => {
    const inputs = document.querySelector(`input[value="${question}"]`);
    if (inputs && inputs.checked) {
      counter++;
    }
  });

  document.querySelector("#totalCorrects").textContent = `Total de preguntas : ${correctAnswers.length}`;
  document.querySelector( "#resultCorrects").textContent = `Cantidad  de respuestas correctas : ${counter}`;
  document.querySelector("#resultIncorrects").textContent = `Cantidad  de respuestas incorrectas : ${ correctAnswers.length - counter}`;
  document.getElementById("form-questions").reset();

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


//Codigo funcional sin el modal 

// document.getElementById("form-questions").addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Reiniciar el contador a cero en cada envío del formulario
//   counter = 0;
//   correctAnswers.map((question) => {
//     const inputs = document.querySelector(`input[value="${question}"]`);
//     if (inputs && inputs.checked) {
//       counter++;
//     }


//   });
//   document.querySelector(
//     "#totalCorrects"
//   ).textContent = `total de preguntas  ${correctAnswers.length}`;
//   document.querySelector(
//     "#resultCorrects"
//   ).textContent = `cantidad  de respuestas correctas ${counter}`;
//   document.querySelector(
//     "#resultIncorrects"
//   ).textContent = `cantidad  de respuestas incorrectas ${
//     correctAnswers.length - counter
//   }`;

//   document.getElementById("form-questions").reset();
// });