async function getBaseEmail(senderName: string): Promise<String>{
   let base = `Olá ${senderName}, gostaria de me inscrever para uma vaga`
    
    base += "\n estou deixando meu curriculo"

    return base
}

export {getBaseEmail}