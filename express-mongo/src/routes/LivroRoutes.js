import LivroController from "../controller/LivroController.js";
import express from "express";

const router = express.Router();

router.get("/livros", LivroController.listarLivros);
router.post("/livro", LivroController.criarLivro);
router.get("/livro/:id", LivroController.buscaLivroById);
router.put("/livro/:id", LivroController.atualizaLivro);
router.delete("/livro/:id", LivroController.deletaLivro);

export default router;
