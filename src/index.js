import Producto from './domain/producto';
import Carrito from './domain/carrito';

const productoBiberon = new Producto('biberon', 'nuk', 30.95);
const productoChupete = new Producto('chupete', 'nuk', 5.95);
const productoCochecito = new Producto('cochecito', 'chicco', 34.100);

const miCarrito = new Carrito();

miCarrito.anadir(productoCochecito, 2)
miCarrito.retirar(productoCochecito);

describe("Carrito", () => {
    it("El carrito tiene un solo item", () => {
        expect(miCarrito.compra.length).toEqual(1);
    });
    it("El carrito tiene una unidad del primer item", () => {
        expect(miCarrito.compra[0].cantidad).toEqual(1);
    });
});
