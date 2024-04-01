const fs = require('fs');

class ProductManager {
    constructor(filePath) {
        this.path = filePath;
    }

    async addProduct(datosProducto) {
        try {
            let products = await this.leerProducts();
    
            const RepiteCodigo = products.find(product => product.id === datosProducto.id);
            if (RepiteCodigo) {
                console.log("Error, ese codigo ya ha sido asignado a otro producto");
                return;
            }

            const newProductId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

            const NuevoProducto= {
                id: newProductId,
                title: datosProducto.title,
                description: datosProducto.description,
                price: datosProducto.price,
                thumbnail: datosProducto.thumbnail,
                code: datosProducto.code,
                stock: datosProducto.stock
            };

            products.push(NuevoProducto);

            await this.escribeProducts(products);

            console.log("Listo! Producto agregado correctamente");
        } catch (error) {
            console.error("Error al agregar el producto:", error);
        }
    }

    async leerProducts() {
        try {
            const data = await fs.promises.readFile(this.path, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error("Error al leer el archivo de productos:", error);
            return [];
        }
    }

    async escribeProducts(products) {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
        } catch (error) {
            console.error("Error al escribir en el archivo de productos:", error);
        }
    }
}

module.exports = ProductManager;





