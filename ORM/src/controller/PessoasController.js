const PessoaService = require("../services/PessoaServices.js");
const Controller = require("./Controller.js");

const pessoaService = new PessoaService();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }

  async pegaMatricula(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaService.pegaMatriculaPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      console.error(error);
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaPessoas = await pessoaService.pegaPessoasEscopoTodos();
      res.status(200).json(listaPessoas);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PessoaController;