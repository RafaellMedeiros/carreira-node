const Controller = require("./Controller.js");
const CursoServices = require("../services/CursoServices.js");
const { Op } = require("sequelize");

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const {data_inicial, data_final } = req.query;
    const where = {};


    data_inicial || data_final ? where.data_inicial = {} : null;
    data_inicial ? where.data_inicial[Op.gte] = data_inicial : null;
    data_final ? where.data_inicial[Op.lte] = data_final : null;

    try {
      const listaCursos = await cursoServices.pegaRegistrosPorEscopo(where);
      return res.status(200).json(listaCursos);
    } catch (erro) {
      res.status(500).json({
        message: "Problemas internos",
        erro
      });
    }

  }
}

module.exports = CursoController;