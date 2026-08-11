const converteIdHelper = require("../utils/converteIdHelper.js");

class Controller {
  serviceName;

  constructor(serviceName) {
    this.serviceName = serviceName;
  }

  async pegarTodos(req, res) {
    try {
      const listaRegistros = await this.serviceName.pegaTodos();
      res.status(200).json(listaRegistros);
    } catch (error) {
      res.status(500).json({
        message: "Problemas internos",
        error
      });
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const registro = await this.serviceName.pegaUmPorId(Number(id));
      res.status(200).json(registro);
      
    } catch (error) {
      res.status(500).json({
        message: "Problemas internos",
        error
      });
    }
  }

  async pegaUmRegistro(req, res) {
    const { ...params } = req.params;
    console.log(params);
    const where = converteIdHelper(params);
    try {
      const registro = await this.serviceName.pegaUmPorId(where);
      res.status(200).json(registro);
      
    } catch (error) {
      res.status(500).json({
        message: "Problemas internos",
        error
      });
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.serviceName.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.serviceName.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: "registro não foi atualizado" });
      }
      return res.status(200).json({ mensagem: "Atualizado com sucesso" });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Problemas internos",
        error
      });
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.serviceName.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });


    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports = Controller;