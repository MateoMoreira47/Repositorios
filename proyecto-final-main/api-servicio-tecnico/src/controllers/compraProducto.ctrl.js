import CompraProducto from '../models/compra_producto.model.js';
import Compra from '../models/compra.model.js';
import Producto from '../models/producto.model.js';

export class CompraProductoCtrl {
  static get = async (req, res) => {
    try {
      const compraProductos = await CompraProducto.findAll({
        include: [
          { model: Compra, attributes: ['idCompra', 'fecha'] },
          { model: Producto, attributes: ['nombre', 'precio'] },
        ],
      });
      res.json(compraProductos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los registros de CompraProducto.', error });
    }
  };

  static create = async (req, res) => {
    try {
      const { idCompra, idProducto, cantidad } = req.body;
      const nuevoRegistro = await CompraProducto.create({ idCompra, idProducto, cantidad });
      res.status(201).json(nuevoRegistro);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el registro de CompraProducto.', error });
    }
  };

  static getById = async (req, res) => {
    try {
      const { idCompra, idProducto } = req.params;
      const registro = await CompraProducto.findOne({
        where: { idCompra, idProducto },
        include: [
          { model: Compra, attributes: ['idCompra', 'fecha'] },
          { model: Producto, attributes: ['nombre', 'precio'] },
        ],
      });
      if (!registro) {
        return res.status(404).json({ message: 'Registro de CompraProducto no encontrado.' });
      }
      res.json(registro);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el registro de CompraProducto.', error });
    }
  };

  static delete = async (req, res) => {
    try {
      const { idCompra, idProducto } = req.params;
      const registro = await CompraProducto.findOne({
        where: { idCompra, idProducto },
      });
      if (!registro) {
        return res.status(404).json({ message: 'Registro de CompraProducto no encontrado.' });
      }
      await registro.destroy();
      res.json({ message: 'Registro de CompraProducto eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el registro de CompraProducto.', error });
    }
  };
}
