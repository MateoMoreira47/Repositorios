import Categoria from '../models/categoria.model.js';

export class CategoriaCtrl {

  static get = async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las categorías.', error });
    }
  };

  static create = async (req, res) => {
    try {
      const { nombre } = req.body;
      const nuevaCategoria = await Categoria.create({ nombre });
      res.status(201).json(nuevaCategoria);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la categoría.', error });
    }
  };

  static getById = async (req, res) => {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
      }
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la categoría.', error });
    }
  };

  static update = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
      }
      categoria.nombre = nombre;
      await categoria.save();
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la categoría.', error });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
      }
      await categoria.destroy();
      res.json({ message: 'Categoría eliminada correctamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la categoría.', error });
    }
  };
}
