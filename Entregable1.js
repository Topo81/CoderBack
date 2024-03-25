class ProductManager{
    constructor(){
        this.products=[];
    }

    addProduct(datosProducto){
    if(!datosProducto.title||!datosProducto.description||!datosProducto.price||!datosProducto.thumbnail||!datosProducto.code||!datosProducto.stock ){
    console.log("Error, todos los campos son obligatorios");
    return
}

const RepiteCodigo= this.products.some(product=>product.code===datosProducto.code);
if(RepiteCodigo){
    console.log("Error, ese codigo ya ha sido asignado a otro producto");
    return;
} 
const NuevoProducto={
    id:this.products.length + 1,
    title:datosProducto.title,
    description:datosProducto.description,
    price:datosProducto.price,
    thumbnail:datosProducto.thumbnail,
    code:datosProducto.code,
    stock:datosProducto.stock,
    }

    this.products.push(NuevoProducto);
console.log("Listo! Producto agregado correctamente")
    }

    getProducts() {
    return this.products;
    }

    getProductById(id){
    const product= this.products.find(product=>product.id===id);
    if(product){
        return(product)
    } else{
        console.log("Not Found")
        }
    }
}

/*//Lo probamos
const manager= new ProductManager();
manager.addProduct({
    title:"Mouse Redragon Griffin Black M607 RGB ",
    description:"el mejor aliado para lo que necesites. Usá tu Redragon Griffin en la oficina, en tu casa o donde quieras y navegá en tus dispositivos sin límites.",
    price: 17900,
    thumbnail:`imagenes/Redragongriffin.jpg`,
    code:"ABC",
    stock: 5
})
manager.addProduct({
    title:"Teclado Redragon Shiva White K512 RGB ",
    description:"Todas las prestaciones que hacen la diferencia, en un teclado de membrana cómodo y silencioso a la hora de jugar o trabajar.",
    price: 31600,
    thumbnail:`imagenes/ShivaWht.jpg`,
    code: "DEF",
    stock:10
})
manager.addProduct({
    title:"Monitor 24'' Asus VG248QG 165Hz 0,5ms ",
    description:" Monitor de juegos Full HD de 24 con una frecuencia de actualización ultrarrápida de 165Hz (overclockable) y tecnología Adaptive-Sync para eliminar el desgarro de la pantalla y las velocidades de cuadro entrecortadas.",
    price:308500,
    thumbnail:`imagenes/Asusvg248qg.jpg`,
    code:"GHI",
    stock:30
})*/

//Testing de coder
const manager= new ProductManager()
console.log(manager.getProducts());

manager.addProduct({
    title:"producto prueba",
description:"Este es un producto prueba",
price:200,
thumbnail:"Sin imagen",
code:"abc123",
stock:25

})
    
    


/*console.log(manager.getProductById(1));
console.log(manager.getProductById(3));
console.log(manager.getProductById(15))*/