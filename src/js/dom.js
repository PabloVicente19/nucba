const contenedor = document.querySelector(".container")

// CREO EL FORMULARIO, INPUT Y BOTON
const form = document.createElement('form');
form.className = "form-container";
form.id = "form"

const input = document.createElement('input');
input.type = "number";
input.className = "input";
input.id = "input";
input.placeholder = "Ingrese Un ID";

const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Buscar Pizza";

form.append(input, btn);
contenedor.appendChild(form);

// CREO EL DIV PARA LOS RESULTADOS
const result = document.createElement('div');
result.className = "result";

contenedor.append(result)