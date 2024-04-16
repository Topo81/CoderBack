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






















/*const express = require("express")

const app = express()

const PORT = 8080

app.use(express.urlencoded({ extended: true }))


//Endpoint
app.get('/perri', (req, res) => {
    res.send("Hola ñeri")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})*/