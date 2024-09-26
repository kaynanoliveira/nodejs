const {getFullName, productType} = require("./services/products");
const product = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main(){
    console.log("Carrinho de Compras:")

    getFullName("1", "teclado")
    product.getFullName("2", "monitor")
    
    console.log(productType)
    // product.getFullName("408", "mousepad")
    // product.getFullName("508", "mousepad")
    // product.getProductLabel("monitor")

    database.connectToDataBase("meu-banco")
}

main();