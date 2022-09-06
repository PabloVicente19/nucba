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

pizzas.forEach( data => {    
    const idImpar = () => {
        if (data.id % 2 === 1 ){
            console.log(`Las Pizzas con Numero de Id impar son: ${data.nombre} y su id es: ${data.id}.`)
        }
    }
    const pizzaMasBarata = () => {
        if ( data.precio < 600){
            console.log(`La pizza mas Economica que ofrecemos es : ${ data.nombre} y cuesta: $${data.precio}.`)
        }
    }
    const listadoDePizzas = () => {
        console.log(`Las Pizzas que ofrecemos son: ${data.nombre} y su valor es de: $${data.precio}`)
    }

    const listadoDeIngredientes = () => {
        console.log(`${data.nombre} 
        ${data.ingredientes}`)
    }
    idImpar()
    listadoDeIngredientes()
    pizzaMasBarata()
    listadoDePizzas()

});
  