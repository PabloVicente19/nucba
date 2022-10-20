/* Deberán realizar el siguiente desafio: 

👉 A cada Pizza, agregarle una imagen. 
👉 Crear un archivo HTML que contenga un contenedor en el cual se renderice una card en la que deberán renderizar el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). Además, deberán renderizar el mismo input de tipo number y botón de la entrega anterior.

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input.

🚨 Si el número ingresado no coincide con ningún id, renderizar un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar un mensaje de error diferente en el contenedor. 
🚨 En el contenedor se debe renderizar una única cosa , ya sea la pizza buscada y renderizada, o cualquiera de los errores(El error no se guarda en el LS).

¿Cuál es el desafío final?
Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página.


🆙 Entregar el link de Github , en el cual debe estar linkeado el deploy del Vercel de su aplicación (mediante Github nosotros deberíamos poder ver el Vercel vinculado a su repositorio). */

const pizzas = [
  {
    id: 1,
    nombre: "Mozzarela",
    ingredientes: ["Salsa de Tomates", "Oregano", "Queso Mozzarela"],
    precio: 599,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "Salsa de Tomates",
      "Oregano",
      "Queso Mozzarela",
      "Rodajas de Tomate",
    ],
    precio: 1000,
  },
  {
    id: 3,
    nombre: "Palmitos",
    ingredientes: [
      "Salsa de Tomates",
      "Oregano",
      "Queso Mozzarela",
      "palmitos",
      "Salsa Golf",
    ],
    precio: 1200,
  },
  {
    id: 4,
    nombre: "Fugazzeta",
    ingredientes: [
      "Salsa de Tomates",
      "Oregano",
      "Queso Mozzarela",
      "Cebollas",
    ],
    precio: 1500,
  },
  {
    id: 5,
    nombre: "Rucula",
    ingredientes: [
      "Salsa de Tomates",
      "Oregano",
      "Queso Mozzarela",
      "Rucula",
      "Jamon",
    ],
    precio: 1900,
  },
  {
    id: 6,
    nombre: "Jamon y Morrones",
    ingredientes: [
      "Salsa de Tomates",
      "Oregano",
      "Queso Mozzarela",
      "Morrones",
      "Jamon",
    ],
    precio: 2300,
  },
];
const form = document.getElementById("form-contenedor");
const input = document.getElementById("inputSearch");
const result = document.querySelector(".result");

const limpiarDiv = () => {
  result.innerHTML = "";
  main.append(result);
};

const crearCard = (pizza) => {
  nombrePizza.innerHTML = `La Pizza Seleccionada es:  ${pizza.nombre}`;
  precioPizza.innerHTML = `El Precio es de: $ ${pizza.precio}`;
  return result.append(nombrePizza, precioPizza);
};

const alertError = () => {
  result.innerHTML = `
    <h2> Error: ¡ No existe esa pizza !</h2> `;
  return main.append(result);
};

const inputVacio = () => {
  result.innerHTML = ` <h2> ¡ Por Favor ingrese un número ! </h2>`;
  return main.append(result);
};

const tiempoDeCartel = () => {
  return setTimeout(() => {
    limpiarDiv();
  }, 1000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault(e);
  const valorObtenido = input.value;

  pizzas.forEach((pizza) => {
    if (valorObtenido == pizza.id) {
      limpiarDiv();
      crearCard(pizza);
    }
  });
  if (valorObtenido == "") {
    inputVacio();
    tiempoDeCartel();
  } else if (valorObtenido > pizzas.length) {
    alertError();
    tiempoDeCartel();
  }
  form.reset();
});
