import Compra from '../models/compra.model.js';
import Cliente from '../models/cliente.model.js';
import MetodoPago from '../models/metodo_pago.model.js';
import CompraProducto from '../models/compra_producto.model.js';
import Producto from '../models/producto.model.js';
import { psql } from '../config/db.config.js';

export class CompraCtrl {
  static get = async (req, res) => {
    try {

      const compras = await Compra.findAll({
        include: [
          {
            model: CompraProducto,
            as: 'CompraProductos', // Alias opcional para clarificar
            include: [
              {
                model: Producto,
                attributes: ['nombre', 'precio','imagen'], // Ajusta según los campos que necesites del producto
              },
            ],
          },
          {
            model: Cliente,
            attributes: ['nombre', 'apellido','email'], // Ajusta según los campos que necesites del cliente
          },
          {
            model: MetodoPago,
            attributes: ['tipo'], // Ajusta según los campos que necesites del método de pago
          },
        ],
      });
      res.json(compras);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las compras.', error });
    }
  };

  static create = async (req, res) => {
    const transaction = await psql.transaction();
    try {

      const { cliente_id, fecha, metodo_pago_id, productos, total } = req.body;

      // Validar el stock de cada producto
      for (const producto of productos) {
        const productoDB = await Producto.findByPk(producto.idProducto, { transaction });
        if (!productoDB) {
          throw new Error(`El producto con ID ${producto.idProducto} no existe.`);
        }

        if (productoDB.stock < producto.cantidad) {
          throw new Error(
            `Stock insuficiente para el producto "${productoDB.nombre}". Disponible: ${productoDB.stock}, Solicitado: ${producto.cantidad}`
          );
        }
      }

      const nuevaCompra = await Compra.create({ cliente_id, fecha, metodo_pago_id, total }, { transaction });
      console.log("🚀 ~ create= ~ nuevaCompra:", nuevaCompra)

      for (const producto of productos) {

        // Actualizar el stock del producto
        await Producto.update(
          { stock: psql.literal(`stock - ${producto.cantidad}`) },
          { where: { idProducto: producto.idProducto }, transaction }
        );
      }

      // Crear los productos asociados
      const productosConCompraId = productos.map((producto) => ({
        ...producto,
        idCompra: nuevaCompra.idCompra,
      }));

      await CompraProducto.bulkCreate(productosConCompraId, { transaction });

      await transaction.commit()

      res.status(201).json(nuevaCompra);
    } catch (error) {
      await transaction.rollback();
      res.status(500).json({ message: 'Error al crear la compra.', error });
    }
  };


  static getByClient = async (req, res) => {
    try {
      const { id } = req.params;

      const compras = await Compra.findAll({
        where: { cliente_id: id },
        include: [
          {
            model: CompraProducto,
            as: 'CompraProductos', // Alias opcional
            include: [
              {
                model: Producto,
                attributes: ['nombre', 'precio','imagen'], // Ajusta según los campos que necesites del producto
              },
            ],
          },
          {
            model: Cliente,
            attributes: ['nombre', 'apellido'], // Detalles del cliente
          },
          {
            model: MetodoPago,
            attributes: ['tipo'], // Detalles del método de pago
          },
        ],
      });

      res.json(compras ?? []);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la compras por cliente.', error });
    }
  };


  static getById = async (req, res) => {
    try {
      const { id } = req.params;
      const compra = await Compra.findByPk(id, {
        include: [
          { model: Cliente, attributes: ['nombre', 'apellido'] },
          { model: MetodoPago, attributes: ['tipo'] },
        ],
      });
      if (!compra) {
        return res.status(404).json({ message: 'Compra no encontrada.' });
      }
      res.json(compra);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la compra.', error });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      const compra = await Compra.findByPk(id);
      if (!compra) {
        return res.status(404).json({ message: 'Compra no encontrada.' });
      }
      await compra.destroy();
      res.json({ message: 'Compra eliminada correctamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la compra.', error });
    }
  };
}
