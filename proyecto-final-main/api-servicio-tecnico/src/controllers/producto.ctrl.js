import Producto from '../models/producto.model.js';
import Categoria from '../models/categoria.model.js';

export class ProductoCtrl {
  static get = async (req, res) => {
    try {
      const productos = await Producto.findAll({
        include: { model: Categoria, as: 'Categoria' , attributes: ['nombre'] },
      });
      res.json(productos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los productos.', error });
    }
  };

  static create = async (req, res) => {
    try {
      const { nombre, descripcion, precio, stock, categoria_id, imagen } = req.body;
      const nuevoProducto = await Producto.create({ nombre, descripcion, precio, stock, categoria_id, imagen });
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el producto.', error });
    }
  };

  static getByCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await Producto.findAll({
        include: { model: Categoria, as: 'Categoria', attributes: ['nombre'] },
        where: { categoria_id: id },
      });
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado.' });
      }
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto.', error });
    }
  };


  static getById = async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await Producto.findByPk(id, {
        include: { model: Categoria, as: 'Categoria', attributes: ['nombre'] },
      });
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado.' });
      }
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto.', error });
    }
  };

  static update = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, descripcion, precio, stock, categoria_id, imagen } = req.body;
      const producto = await Producto.findByPk(id);
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado.' });
      }
      Object.assign(producto, { nombre, descripcion, precio, stock, categoria_id, imagen });
      await producto.save();
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el producto.', error });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await Producto.findByPk(id);
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado.' });
      }
      await producto.destroy();
      res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el producto.', error });
    }
  };
}
