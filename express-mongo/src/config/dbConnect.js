import { MongoClient } from 'mongodb'


const conectaNaDatabase = async () => {
    const url = 'mongodb+srv://raffanf_db_user:32P6EIvePi48SALe@express-node.nkclkc0.mongodb.net/?appName=express-node'
    
    const client = new MongoClient(url)
    try {
        const database = client.db('livraria')
        return database
    } catch (error) {
        console.log('Erro ao conectar no banco de dados', error)
    } 
}

export default conectaNaDatabase