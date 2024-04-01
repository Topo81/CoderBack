const ProductManager = require('./app2.js'); 
const Productosguardados = './productos.json'; 


const productManager = new ProductManager(Productosguardados);


productManager.addProduct({
    title: 'Producto de ejemplo',
    description: 'Este es un producto de ejemplo',
    price: 100,
    thumbnail: 'imagen.png',
    code: 'ABC123',
    stock: 10
}).then(() => {
    console.log("Listo! Producto agregado correctament");
}).catch(error => {
    console.error('Error al agregar el producto:', error);
});


productManager.leerProducts().then(products => {
    console.log('Productos leídos:', products);
}).catch(error => {
    console.error('Error al leer productos:', error);
});
