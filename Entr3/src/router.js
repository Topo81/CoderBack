const express = require('express');
const router = express.Router();
const ProductManager = require('./ProductManager');
const productManager = new ProductManager('./productos.json');

// Obtengo todos los productos o una cantidad limitada de ellos
router.get('/products', async (req, res) => {
    try {
        const  limit  = req.query.limit;
        const allProducts = await productManager.readProducts(); 
        let products = limit ? allProducts.slice(0, parseInt(limit)) : allProducts; 
        res.json(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.send('Error interno del servidor');
    }
});

// Obtengo un producto específico por ID
router.get('/products/:pid', async (req, res) => {
    const  pid  = req.params.pid;
    const product = await productManager.getProductById(parseInt(pid));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

module.exports = router;
