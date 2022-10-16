const pizzas = [
        {
            id : 1,
          nombre: "Mozzarela",
          ingredientes: [
            "Salsa de Tomates",
            "Oregano",
            "Queso Mozzarela",
          ],
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
            "Salsa Golf"
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
            "Jamon"
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
            "Jamon"
          ],
          precio: 2300,
        }
      ]
/*
👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el contenedor un h2 con el nombre y en un h3 con el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
*/
      // Declaracion de variables
const form = document.getElementById('form-contenedor');
const input = document.getElementById('inputSearch');
const nombrePizza = document.createElement('h2');
const precioPizza = document.createElement('h3');
const main = document.querySelector(".container");
const result = document.querySelector(".result")


const limpiarDiv = () => {
  result.innerHTML = ""
 main.append(result)
}

const crearCard = (pizza) => {
  nombrePizza.innerHTML =`La Pizza Seleccionada es:  ${pizza.nombre}`;
  precioPizza.innerHTML = `El Precio es de: $ ${pizza.precio}`;
   return result.append(nombrePizza, precioPizza)
}

const alertError = () => {
  result.innerHTML = `
    <h1> Error: ¡ No existe esa pizza !</h1> `
  return main.append(result)
}

const inputVacio = () => {
  result.innerHTML = ` <h1> ¡ Por Favor ingrese un numero !`
  return main.append(result)
}

const tiempoDeCartel = () => {
  return setTimeout(() => {
    limpiarDiv()
  }, 900)
}

form.addEventListener('submit', e => {
    e.preventDefault(e);
    const valorObtenido = input.value;
    pizzas.forEach(pizza => {
      if (valorObtenido == pizza.id){
        limpiarDiv()
        crearCard(pizza)    
      } })
      if (valorObtenido == ""){
        inputVacio()
        tiempoDeCartel()
      } else if (valorObtenido < 0 || valorObtenido >= 7){
        alertError()
        tiempoDeCartel()
      }
      form.reset()
    })

