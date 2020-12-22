export default class Producto {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }

    getDescription() {
        return `${this.nombre} (${this.marca}) [${this.precio} €]`;
    }

    isEqual(producto) {
        return this.nombre === producto.nombre
            && this.marca === producto.marca
            && this.precio === producto.precio;
    }
}
