const ProductManager = require('./app2.js'); 
const Productosguardados = './productos.json'; 

const productManager = new ProductManager(Productosguardados);

// Agregar un producto
productManager.addProduct({
    title: 'Producto de ejemplo',
    description: 'Este es un producto de ejemplo',
    price: 100,
    thumbnail: 'imagen.png',
    code: 'ABC123',
    stock: 10
}).then(() => {
    console.log("Listo! Producto agregado correctamente");
}).catch(error => {
    console.error('Error al agregar el producto:', error);
});

// Leer todos los productos
productManager.getProducts().then(products => {
    console.log('Productos leídos:', products);
}).catch(error => {
    console.error('Error al leer productos:', error);
});

// Obtener un producto por ID
const productId = 1; // ID del producto a buscar
productManager.getProductById(productId).then(product => {
    if (product) {
        console.log('Producto encontrado:', product);
    } else {
        console.log('Producto no encontrado');
    }
}).catch(error => {
    console.error('Error al obtener el producto por ID:', error);
});

// Actualizar un producto
const productIdToUpdate = 1; // ID del producto a actualizar
const updatedFields = { price: 200 }; // Campos a actualizar
productManager.updateProduct(productIdToUpdate, updatedFields).then(() => {
    console.log('Producto actualizado correctamente');
}).catch(error => {
    console.error('Error al actualizar el producto:', error);
});

// Eliminar un producto
const productIdToDelete = 1; // ID del producto a eliminar
productManager.deleteProduct(productIdToDelete).then(() => {
    console.log('Producto eliminado correctamente');
}).catch(error => {
    console.error('Error al eliminar el producto:', error);
});
