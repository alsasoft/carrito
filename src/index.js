import Producto from "./domain/producto";
import Carrito from "./domain/carrito";

const productoBiberon = new Producto("biberon", "nuk", 30.95);
const productoChupete = new Producto("chupete", "nuk", 5.95);
const productoCochecito = new Producto("cochecito", "chicco", 341.1);

describe("Carrito", () => {
    const carrito = new Carrito();
    // vacio este en true y el numero de items sea cero)

    it(`El carrito está vacío`, () => {
        expect(carrito.esVacio()).toEqual(true);
        expect(carrito.numeroItems()).toEqual(0);
    });

    // test 2
    it(`La cantidad de '${productoBiberon.getDescription()}' es cero`, () => {
        expect(carrito.obtenerCantidad(productoBiberon)).toEqual(0);
    });

    // test 3
    it(`Añado un producto '${productoCochecito.getDescription()}'`, () => {
        carrito.anadir(productoCochecito, 1);
        expect(carrito.esVacio()).toEqual(false);
        expect(carrito.numeroItems()).toEqual(1);
        expect(carrito.obtenerCantidad(productoCochecito)).toEqual(1);
    });

    // test 4
    it(`Añado otro producto '${productoCochecito.getDescription()}'`, () => {
        carrito.anadir(productoCochecito, 1);
        expect(carrito.esVacio()).toEqual(false);
        expect(carrito.numeroItems()).toEqual(1);
        expect(carrito.obtenerCantidad(productoCochecito)).toEqual(2);
    });

    // test 5
    it(`Retiro un producto '${productoCochecito.getDescription()}'`, () => {
        carrito.retirar(productoCochecito, 1);
        expect(carrito.esVacio()).toEqual(false);
        expect(carrito.numeroItems()).toEqual(1);
        expect(carrito.obtenerCantidad(productoCochecito)).toEqual(1);
    });

    // test 6
    it(`Retiro otro producto '${productoCochecito.getDescription()}'`, () => {
        carrito.retirar(productoCochecito);
        expect(carrito.esVacio()).toEqual(true);
        expect(carrito.numeroItems()).toEqual(0);
        expect(carrito.obtenerCantidad(productoCochecito)).toEqual(0);
    });
    // test 7
    it(`Añado tres productos '${productoChupete.getDescription()}'`, () => {
        carrito.anadir(productoChupete, 3);
        expect(carrito.esVacio()).toEqual(false);
        expect(carrito.numeroItems()).toEqual(1);
        expect(carrito.obtenerCantidad(productoChupete)).toEqual(3);
    });
    // test 8
    it(`Intento retirar cuatro productos '${productoChupete.getDescription()}'`, () => {
        expect(() => {
            carrito.retirar(productoChupete, 4);
        }).toThrowError(Error);
        expect(carrito.esVacio()).toEqual(false);
        expect(carrito.numeroItems()).toEqual(1);
        expect(carrito.obtenerCantidad(productoChupete)).toEqual(3);
    });
    // test 9
    it(`Vacío el carrito`, () => {
        carrito.vaciar();
        expect(carrito.esVacio()).toEqual(true);
        expect(carrito.numeroItems()).toEqual(0);
        expect(carrito.obtenerCantidad(productoChupete)).toEqual(0);
    });
    // test 10
    it(`Intento retirar un producto '${productoChupete.getDescription()}'`, () => {
        expect(() => {
            carrito.retirar(productoChupete, 1);
        }).toThrowError(Error);
        expect(carrito.esVacio()).toEqual(true);
        expect(carrito.numeroItems()).toEqual(0);
        expect(carrito.obtenerCantidad(productoChupete)).toEqual(0);
    });
    // test 11
    it(`Añado 3 '${productoChupete.getDescription()}', 2 '${productoBiberon.getDescription()}' y 1 '${productoCochecito.getDescription()}'`, () => {
        carrito.anadir(productoChupete, 3);
        carrito.anadir(productoBiberon, 2);
        carrito.anadir(productoCochecito);

        expect(carrito.esVacio()).toEqual(false);
        expect(carrito.numeroItems()).toEqual(3);
        expect(carrito.obtenerCantidad(productoChupete)).toEqual(3);
        expect(carrito.obtenerCantidad(productoBiberon)).toEqual(2);
        expect(carrito.obtenerCantidad(productoCochecito)).toEqual(1);
    });
    // test 12
    it(`El JSON se genera correctamente`, () => {
        expect(carrito.obtenerJson()).toEqual(
                '[{"producto":{"nombre":"chupete","marca":"nuk","precio":5.95},"cantidad":3},{"producto":{"nombre":"biberon","marca":"nuk","precio":30.95},"cantidad":2},{"producto":{"nombre":"cochecito","marca":"chicco","precio":341.1},"cantidad":1}]'
        );
    });
    // test 13
    it(`El precio total del carrito es 420.85 (3 * 5.95 + 2 * 30.95 + 1 * 341.10)`, () => {
        expect(carrito.precioTotal()).toEqual(420.85);
    });
    // test 14
    it(`El precio del carrito en productos de la marca 'nuk' es 79.75 (3 * 5.95 + 2 * 30.95)`, () => {
        expect(carrito.precioMarca("nuk")).toEqual(79.75);
    });
    // test 15
    it(`El precio del carrito en productos de la marca 'chicco' es 341.10 (1 * 341.10)`, () => {
        expect(carrito.precioMarca("chicco")).toEqual(341.1);
    });
});
