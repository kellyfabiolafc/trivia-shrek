const respuestaCorrectas = [
  "correctap1",
  "correctap2",
  "correctap3",
  "correctap4",
  "correctap5",
];
let counter = 0;


  document.getElementById("form-cuestions").addEventListener("submit", (e) => {
    e.preventDefault();
 // Reiniciar el contador a cero en cada envío del formulario
  counter = 0;
    respuestaCorrectas.map((inputss) => {
      const inputs = document.querySelector(`input[class="${inputss}"]`);
      if (inputs && inputs.checked) {
        counter++;
      }
      
      document.querySelector(
        "#resultCorrects"
      ).textContent = `cantidad  de respuestas coorectas ${counter}`;
      document.querySelector(
        "#totalCorrects"
      ).textContent = `cantidad  de respuestas  ${respuestaCorrectas.length}`;
      document.querySelector(
        "#resultIncorrects"
      ).textContent = `cantidad  de respuestas incorrectas ${respuestaCorrectas.length - counter}`;
    
    document.getElementById('form-cuestions').reset();
    });
  });


