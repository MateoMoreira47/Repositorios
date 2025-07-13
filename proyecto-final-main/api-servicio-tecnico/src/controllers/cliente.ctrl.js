import Cliente from '../models/cliente.model.js';
import Ciudad from '../models/ciudad.model.js';

export class ClientCtrl {
  static get = async (req, res) => {
    try {
      const clientes = await Cliente.findAll({
        include: { model: Ciudad ,as: 'Ciudad', attributes: ['nombre'] },
        where: { role: 'CLIENTE' },
      });
      console.log("🚀 ~ get= ~ clientes:", clientes)
      res.json(clientes);
    } catch (error) {
      console.log("🚀 ~ get= ~ error:", error)
      res.status(500).json({ message: 'Error al obtener los clientes.', error });
    }
  };

  static create = async (req, res) => {
    try {
      const { cedula, nombre, apellido, direccion, telefono, email, fechaNac, ciudad_id, password,role} = req.body;
      const nuevoCliente = await Cliente.create({ cedula, nombre, apellido, direccion, telefono, email, fechaNac, ciudad_id,password ,role});
      res.status(201).json(nuevoCliente);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el cliente.', error });
    }
  };

  static getById = async (req, res) => {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id, {
        include: { model: Ciudad, attributes: ['nombre'] },
      });
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado.' });
      }
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el cliente.', error });
    }
  };

  static update = async (req, res) => {
    try {
      const { id } = req.params;
      const { cedula, nombre, apellido, direccion, telefono, email, fechaNac, ciudad_id,password} = req.body;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado.' });
      }
      Object.assign(cliente, { cedula, nombre, apellido, direccion, telefono, email, fechaNac, ciudad_id ,password});
      await cliente.save();
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el cliente.', error });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado.' });
      }
      await cliente.destroy();
      res.json({ message: 'Cliente eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el cliente.', error });
    }
  };

  static auth = async (req, res) => {
    try {
      const { email, password } = req.body;
      const cliente = await Cliente.findOne({ where: { email, password } });
      console.log("🚀 ~ auth= ~ cliente:", cliente)
      if (!cliente) {
        return res.status(404).json({ message: 'Credenciales incorrectas.' });
      }
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ message: 'Error al autenticar el cliente.', error });
    }
  };
}

