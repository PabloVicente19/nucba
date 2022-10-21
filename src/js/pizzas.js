class Pizzas{
    constructor(id, nombre, ingredientes, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}
const pizzas = [];
pizzas.push( new Pizzas (1, "Mozzarela", ["Queso Mozzarela", "Salsa de tomates", "Oregano", 590]));
pizzas.push( new Pizzas (2, "Napolitada", ["Queso Mozzarela", "Salsa de tomates", "Oregano", "Tomate en Rodajas", 1300]));
pizzas.push( new Pizzas (3, "Jamon y Morrones", ["Queso Mozzarela", "Salsa de tomates", "Oregano", "Jamon", "Morrones", 2000]));
pizzas.push( new Pizzas (4, "Rucula", ["Queso Mozzarela", "Salsa de tomates", "Oregano","Queso Parmesano", "Rucula", 1100]));
pizzas.push( new Pizzas (5, "Palmitos", ["Queso Mozzarela", "Salsa de tomates", "Oregano","Jamon","Palmitos", "Salsa Golf", 1600]));
pizzas.push( new Pizzas (6, "Cochina", ["Queso Mozzarela", "Salsa de tomates", "Oregano","Papas Fritas", "Huevo Frito", 1000]));