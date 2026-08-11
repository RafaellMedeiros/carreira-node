const { Router } = require("express");
const PessoaController = require("../controller/PessoasController.js");
const MatriculasController = require("../controller/MatriculaController.js");

const pessoaController = new PessoaController();
const matriculaController = new MatriculasController();

const router = Router();

router.get("/pessoas", (req, res) => pessoaController.pegarTodos(req, res));
router.get("/pessoas/todos", (req, res) => pessoaController.pegaTodasAsPessoas(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.pegaUmPorId(req, res));
router.post("/pessoas", (req, res) => pessoaController.criaNovo(req, res));
router.put("/pessoas/:id", (req, res) => pessoaController.atualiza(req, res));
router.delete("/pessoas/:id", (req, res) => pessoaController.excluir(req, res));
router.get("/pessoas/:id/matriculas", (req, res) => matriculaController.pegarTodos(req, res));
router.post("/pessoas/:id/matriculas", (req, res) => matriculaController.criaNovo(req, res));
router.get("/pessoas/:estudanteId/matriculas/:id", (req, res) => matriculaController.pegaUmRegistro(req, res));

module.exports = router;