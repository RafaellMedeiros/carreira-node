import mongoose from 'mongoose'


const conectaNaDatabase = async () => {
    mongoose.connect('mongodb+srv://raffanf_db_user:32P6EIvePi48SALe@express-node.nkclkc0.mongodb.net/livraria')
    return mongoose.connection;
}

export default conectaNaDatabase