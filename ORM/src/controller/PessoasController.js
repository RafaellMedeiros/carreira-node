const PessoaService = require("../services/PessoaServices.js");
const Controller = require("./Controller.js");

const pessoaService = new PessoaService();

class PessoaController extends Controller {
  constructor() {
    super(pessoaService);
  }
}

module.exports = PessoaController;