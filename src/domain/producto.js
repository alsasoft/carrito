export default class Producto {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }

    getDescription() {
        return `${this.nombre} (${this.marca}) [${this.precio} €]`;
    }
}
