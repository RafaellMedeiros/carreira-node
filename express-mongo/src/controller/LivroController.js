import livros from "../models/livros.js";

class LivroController {
  static listarLivros = async (req, res) => {
    const listaLivros = await livros.find();

    res.status(200).json(listaLivros);
  };

  static criarLivro = async (req, res) => {
    const { titulo, autor } = req.body;
    const livro = { titulo, autor };
    livros.create(livro);
    res.status(201).send("Livro adicionado com sucesso");
  };

  static buscaLivroById = async (req, res) => {
    const id = req.params.id;
    try {
      const livro = await livros.findById(id);
      if (livro) {
        res.status(200).send(livro);
      } else {
        res.status(404).send({ message: "Livro não encontrado." });
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Id do livro inválido.` });
    }
  };

  static atualizaLivro = async (req, res) => {
    const id = req.params.id;
    const livroAtualizado = req.body;

    await livros.findByIdAndUpdate(id, { $set: livroAtualizado }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deletaLivro = async (req, res) => {
    const id = req.params.id;

    await livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro deletado com sucesso." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default LivroController;
