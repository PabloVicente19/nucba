/*
👉 A cada Pizza, agregarle una imagen. 
👉 Crear un archivo HTML que contenga un contenedor en el cual se renderice una card en la que deberán renderizar el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). Además, deberán renderizar el mismo input de tipo number y botón de la entrega anterior.

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input.

🚨 Si el número ingresado no coincide con ningún id, renderizar un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar un mensaje de error diferente en el contenedor. 
🚨 En el contenedor se debe renderizar una única cosa , ya sea la pizza buscada y renderizada, o cualquiera de los errores(El error no se guarda en el LS).

¿Cuál es el desafío final?
Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página. */

function inputVacio (){
  result.innerHTML = `
  <div class="input-vacio">
    <img src="./src/img/angry.png" alt="">
    <h2> ¡ Por Favor Ingrese un Número !</h2>
  </div>
  `
}
function idDistinto (){
  result.innerHTML = `
  <div class="id-error">
      <img class="icon-sad" src="./src/img/triste1.png" alt="">
      <h2>¡ Pizza No Encontrada !</h2>
  </div>
  `
}
function mostrarPizza (pizza){
  result.innerHTML = `
  <div class="pizza-encontrada">
    <h2>Nombre: ${pizza.nombre}</h2>
    <h3>Precio: $1${pizza.precio}</h3>
    <p>Ingredientes: ${pizza.ingredientes}</p>
    <img src=${pizza.imagen}>
  </div>
  `
}
function guardarEnLocalStorage(pizza){
  localStorage.setItem("pizza",JSON.stringify(pizza))
}

form.addEventListener('submit', e => {
  e.preventDefault(e);
  const valorInput = Number(input.value);
  const findPizza = pizzas.find( (pizza) => pizza.id == valorInput);

  if(!valorInput){
    inputVacio();
  }else if(!findPizza){
    idDistinto();
  }else{
    mostrarPizza(findPizza);
    guardarEnLocalStorage(findPizza)
  }
  form.reset()
})

// MOSTRAR LA PIZZA ALMACENADA
let obj = JSON.parse(localStorage.getItem("pizza"))
mostrarPizza(obj)
