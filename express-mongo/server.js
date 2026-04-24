import 'dotenv/config';
import app from './src/app.js';
import conectarAoBanco from './src/config/dbConnect.js';

const PORT = 3000;
const STRING_CONEXAO = process.env.MONGO_URI || '';

conectarAoBanco(STRING_CONEXAO)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Servidor iniciado na porta', PORT);
        });
    })
    .catch((erro) => {
        console.error('Erro ao conectar ao banco de dados:', erro);
    });
