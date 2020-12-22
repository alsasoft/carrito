export default class Carrito {
    constructor() {
        this.vaciar();
    }

    vaciar() {
        this.compra = [];
    }

    esVacio() {
        return this.compra.length === 0;
    }

    numeroItems() {
        return this.compra.length;
    }

    anadir(producto, cantidad = 1) {
        cantidad = parseInt(cantidad) || 0;

        if (cantidad <= 0) {
            throw new Error(`La cantidad de producto '${producto.getDescription()}' debe ser mayor que 0`);
        }

        const item = this.compra.find(item => item.producto == producto);
        if (item === undefined) {
            this.compra.push({ producto, cantidad });
        } else {
            item.cantidad += cantidad;
        }
    }

    retirar(producto, cantidad = 1) {
        cantidad = parseInt(cantidad) || 0;

        if (cantidad <= 0) {
            throw new Error(`La cantidad de producto '${producto.getDescription()}' debe ser mayor que 0`);
        }

        const item = this.compra.find(it => it.producto === producto);
        if (item === undefined) {
            throw new Error(`El carrito no contiene ningún producto '${producto.getDescription()}'`)
        } else if(item.cantidad < cantidad) {
            throw new Error(`El carrito no contiene ${cantidad} productos '${producto.getDescription()}'`)
        } else if(item.cantidad === cantidad) {
            this.compra.splice(this.compra.indexOf(item), 1);
        } else {
            item.cantidad -= cantidad;
        }
    }

    precioTotal() {
        return this.compra
        .reduce((acc, cur) => acc + cur.cantidad * cur.producto.precio, 0);
    }

    precioMarca(marca) {
        return this.compra
        .filter(item => item.producto.marca === marca)
        .reduce((acc, cur) => acc + cur.cantidad * cur.producto.precio, 0);
    }

    obtenerCantidad(producto) {
        const item = this.compra.find(item => item.producto.isEqual(producto));
        return typeof(item) === 'object' ? item.cantidad : 0;
    }

    obtenerJson() {
        return JSON.stringify(this.compra);
    }
}
