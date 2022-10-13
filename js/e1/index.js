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
🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes. */

// 1
pizzas.filter(pizzas => {
  if(pizzas.precio % 2 != 0){
    console.log(`Las pizzas con id impar son: ${pizzas.nombre} y su id es: ${pizzas.id}`)
  }
})

// 2
const pizzaMenorA600 = (pizza) =>{pizza.precio < 600}
pizzas.some(pizzaMenorA600)
if(pizzaMenorA600){
  console.log(true)
}else{
  console.log("no")
}
// 3
pizzas.forEach(info =>{
  console.log(`Nuestras pizzas son: ${info.nombre} y su precio es de: $${info.precio}`)
})

// 4
pizzas.forEach(pizza =>{
  console.log(`${pizza.nombre} tiene los siguientes ingredientes:`)
  pizza.ingredientes.forEach(ingrediente => {
    console.log(` ${ingrediente}`)
  })
})