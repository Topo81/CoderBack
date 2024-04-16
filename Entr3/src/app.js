const express = require('express');
const app = express();
const PORT = 8080
const productRoutes = require('./router');
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use(productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
