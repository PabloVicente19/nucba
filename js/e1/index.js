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

const pizzasIdImpar = () => { 
const pizzasConIdImpar = pizzas.filter( (pizzas)=>{
pizzas.id % 2 === 1 ? console.log(`Las pizzas con id impars son: ${pizzas.nombre} y su id es: ${pizzas.id}`) : false })
}

const pizzaBarata = () => { 
const pizzaConMenorValor = pizzas.some(element => {return element.precio < 600})
console.log(pizzaConMenorValor)
}

const nombreDePizzaYprecio = () => {
  for (const producto of pizzas){
      console.log(`Las Pizzas que tenemos son: ${producto.nombre} y su precio es de: $${producto.precio}`)
  }
}

const pizzasEingredientes=  () => { 
  pizzas.map( pizza => {
    console.log("La Pizza " + pizza.nombre + " Tiene los siguientes ingredientes:");
    pizza.ingredientes.forEach( ingredient => {
      console.log(' * ' + ingredient)
    })
  })
}

pizzasIdImpar()
console.log('*****')
pizzaBarata()
console.log('*****')
nombreDePizzaYprecio()
console.log('*****')
pizzasEingredientes()