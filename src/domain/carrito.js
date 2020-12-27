export default class Carrito {
    constructor() {
        this.items = [];
    }

    vaciar() {
        this.items = [];
        // return this.items;
    }

    esVacio() {
        if (this.items.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    numeroItems() {
        return this.items.length; // devuelve si hay productos
    }

    anadir(producto, cantidad = 1) {
        const itemBuscado = this.items.find((item) =>
            item.producto.isEqual(producto)
        );

        if (isNaN(cantidad) || cantidad <= 0) {
            throw new Error("Debe ingresar un producto o cantidad válida");
        } else if (itemBuscado === undefined) {
            this.items.push({
                producto: producto,
                cantidad: cantidad,
            });
        } else {
            itemBuscado.cantidad += cantidad;
        }
    }

    retirar(producto, cantidad = 1) {
        const itemBuscado = this.items.find((item) =>
            item.producto.isEqual(producto)
        );
        if (itemBuscado === undefined) {
            throw new Error("El producto no ha sido encontrado");
        } else if (itemBuscado.cantidad < cantidad) {
            cantidad = 0;
            throw new Error(
                "El número de productos a retirar no puede ser mayor que la cantidad"
            );
        } else {
            itemBuscado.cantidad -= cantidad;
            if (itemBuscado.cantidad === 0) {
                const i = this.items.indexOf(itemBuscado);
                this.items.splice(i, 1);
            }
        }
    }

    precioTotal() {
        const total = this.items.reduce(
            (acc, item) => acc + item.cantidad * item.producto.precio,
            0
        );
        return total;
        /*this.items.reduce((acc, item) => {
                                                                                                                                                                                return acc + item.cantidad * item.producto.precio;
                                                                                                                                                                            }, 0);*/
    }

    precioMarca(marca) {
        return this.items
            .filter((item) => item.producto.marca === marca)
            .reduce((acc, next) => acc + next.cantidad * next.producto.precio, 0);
    }

    obtenerCantidad(producto) {
        /*  const itemBuscado = this.items.find(function(item) {
            if (item.producto.isEqual(producto)) {
                return true;
            } // es el producto dentro del array items, no es el parametro producto
            return false;
        });
*/ //se puede obviar el if
        const itemBuscado = this.items.find((item) =>
            item.producto.isEqual(producto)
        );

        if (itemBuscado === undefined) {
            return 0;
        } else {
            return itemBuscado.cantidad;
        }
    }

    obtenerJson() {
        const itemBuscado = this.items.find((item) =>
            item.producto.isEqual(producto)
        );

        if (itemBuscado.nombre === undefined) {
            this.items.push({
                producto: producto,
                cantidad: cantidad,
            });
        } else {
            itemBuscado.cantidad += cantidad;
        }
    }
}