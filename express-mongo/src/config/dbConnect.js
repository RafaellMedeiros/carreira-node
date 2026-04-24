import mongoose from 'mongoose';

const conectarAoBanco = async (stringConexao) => {
    await mongoose.connect(stringConexao);
};

export default conectarAoBanco;
