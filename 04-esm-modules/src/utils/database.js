const databaseType = {
    userType: "admin",
    typeData: "datalocal"
}

async function connectToDataBase(dataName) {
    console.log(`Conectando ao banco ${dataName}`)
}

async function disconnectDatabase(){
    console.log("desconectando do banco de dados")
}


export {connectToDataBase, disconnectDatabase, databaseType}