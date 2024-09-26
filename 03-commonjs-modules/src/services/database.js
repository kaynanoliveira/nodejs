// export default - é uma função que por padrão ja nasce sendo exportada.

// export default async 
exports.connectToDataBase = async(dataName) => {
    console.log("Se conectando com banco: " + dataName)
}

exports.disconnectDataBase = async() => {
    console.log("Desconectando...")
}