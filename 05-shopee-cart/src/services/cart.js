// Quais ações meu carrinho pode fazer


// ✅ -> Adicionar item ao carrinho
async function addItem(userCart, item){
    userCart.push(item)
}

// -> Calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}

// -> Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// -> remover um item - diminui um item
async function removeItem(userCart, index){}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}
