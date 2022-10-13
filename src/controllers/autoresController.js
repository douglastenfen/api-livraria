import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static listarAutorPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autor) => {
      if (!err) {
        res.status(200).send(autor);
      } else {
        res
          .status(400)
          .send({ message: `${err.message} - Autor não encontrado` });
      }
    });
  };

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);
    autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Falha ao cadastrar autor.` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso!" });
      } else {
        res.status(500).send({
          message: `${err.message} - Não foi possível atualizar o autor!`,
        });
      }
    });
  };

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor deletado com sucesso!" });
      } else {
        res.status(500).send({
          message: `${err.message} - Não foi possível deletar o autor!`,
        });
      }
    });
  };
}

export default AutorController;
