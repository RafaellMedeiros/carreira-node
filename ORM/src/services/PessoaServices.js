const Services = require("./Services");

class PessoaService extends Services {
  constructor() {
    super("Pessoa");
  }

  async pegaMatriculaPorEstudante(id) {
    const estudante = await super.pegaUmPorId(id);
    const listaMatriculas = await estudante.getAulaMatriculadas();
    return listaMatriculas;
  }

  async pegaPessoasEscopoTodos() {
    const listaPessoas = await super.pegaRegistrosPorEscopo("todosOsRegistros");
    return listaPessoas;
  }
}

module.exports = PessoaService;