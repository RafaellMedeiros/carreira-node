const dataSorce = require("../database/models");


class Services {

  model;

  constructor(modelName) {
    this.model = dataSorce[modelName];
  }

  async pegaTodos() {
    return await this.model.findAll(); 
  }

  async pegaUmPorId(id) {
    return await this.model.findOne({
      where: { id }
    });
  }

  async pegaUm(where) {
    return await this.model.findOne({ where });
  }

  async criaRegistro(dadosDoRegistro) {
    return this.model.create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = this.model.update(dadosAtualizados, {
      where: { id: id }
    });

    return listadeRegistrosAtualizados[0] !== 0;
  }

  async excluiRegistro(id) {
    return this.model.destroy({ where: { id: id } });
  }

  async pegaRegistrosPorEscopo (escopo) {
    return this.model.scope(escopo).findAll();
  }
}

module.exports = Services;