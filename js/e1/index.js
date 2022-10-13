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



  const idImpar = () => {
    for (const ids of pizzas){
      ids.id % 2 === 1 ?
      console.log(`Las Pizzas con Numero de Id impar son: ${ids.nombre} y su id es: ${ids.id}.`) : false 
    }
  }
   const pizzaEconomica = pizzas.some(function (valor){return valor.precio > 600}) 

  const pizzaYprecio = () =>{
    for (const valor of pizzas) {
      console.log(`Las pizzas que tenemos son: ${valor.nombre} Y el precio es de: ${valor.precio}`)
    }
  }

  const ingredientes = () => {
    pizzas.forEach( e => {
      const names = e.nombre
      for (const ingredientes of pizzas){
        console.log( names + ingredientes.ingredientes)
      }
    })
  }
  
  
  
  
  
  
  
  
  
  
  
  idImpar()
  console.log(pizzaEconomica)
  pizzaYprecio()
  ingredientes()
  

// pizzas.forEach( data => {    
  //     const idImpar = (data) => {
    //         if (data.id % 2 === 1 ){
//             console.log(`Las Pizzas con Numero de Id impar son: ${data.nombre} y su id es: ${data.id}.`)
//         }
//     }
//     const pizzaMasBarata = () => {
    
//       const precios = []
//       precios.push(data.precio);

//       return console.log(precios.some( () => precios < 600))
//     }
//     const listadoDePizzas = (data) => {
//       console.log(`Las Pizzas que ofrecemos son: ${data.nombre} y su valor es de: $${data.precio}`)
//     }
    
//     const listadoDeIngredientes = () => {
//       console.log(`${data.nombre} 
//       ${data.ingredientes}`)
//     }
    
    
//     pizzaMasBarata(pizzas)
    // idImpar(data.id)
    // listadoDeIngredientes()
    // listadoDePizzas(data.nombre)
  // });
