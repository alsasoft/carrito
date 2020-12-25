export default class Carrito {
    constructor() {
        this.items = [];
    }

    vaciar() {}

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
        this.items.push({
            producto: producto,
            cantidad: cantidad,
        });
    }

    retirar(producto, cantidad = 1) {}

    precioTotal() {}

    precioMarca(marca) {}

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

    obtenerJson() {}
}