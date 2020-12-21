export default class Carrito {
    constructor() {
        this.compra = [];
    }

    anadir(producto, cantidad = 1) {
        const item = this.compra.find(item => item.producto == producto);
        if (item === undefined) {
            this.compra.push({ producto, cantidad });
        } else {
            item.cantidad += cantidad;
        }
    }

    retirar(producto, cantidad = 1) {
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
        .reduce((acc, cur) => acc.cantidad * acc.producto.precio + cur.cantidad * cur.producto.precio, 0);
    }

    precioMarca(marca) {
        return  this.compra
        .filter(item => item.producto.marca === marca)
        .reduce((acc, cur) => acc.cantidad * acc.producto.precio + cur.cantidad * cur.producto.precio, 0);

    }
}
