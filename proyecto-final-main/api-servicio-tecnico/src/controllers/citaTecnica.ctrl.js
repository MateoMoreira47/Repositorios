import CitaTecnica from '../models/cita_tecnica.model.js';
import Cliente from '../models/cliente.model.js';
import Empleado from '../models/empleado.model.js';

export class CitaTecnicaCtrl  {
  static get = async (req, res) => {
    try {
      const citas = await CitaTecnica.findAll({
        include: [
          { model: Cliente, attributes: ['nombre', 'apellido'] },
          { model: Empleado, attributes: ['nombre', 'apellido'] },
        ],
      });
      res.json(citas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las citas técnicas.', error });
    }
  };

  static getByClient = async (req, res) => {
    try {
      const { id } = req.params;
      const citas = await CitaTecnica.findAll({
        include: [
          { model: Cliente, attributes: ['nombre', 'apellido'] },
          { model: Empleado, attributes: ['nombre', 'apellido'] },
        ],
        where: { idCliente: id }
      });
      res.json(citas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las citas técnicas.', error });
    }
  };


  static create = async (req, res) => {
    try {
      const { idEmpleado, idCliente, fecha, descripcion } = req.body;
      const nuevaCita = await CitaTecnica.create({ idEmpleado, idCliente, fecha, descripcion });
      res.status(201).json(nuevaCita);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la cita técnica.', error });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      const cita = await CitaTecnica.findByPk(id);
      if (!cita) {
        return res.status(404).json({ message: 'Cita técnica no encontrada.' });
      }
      await cita.destroy();
      res.json({ message: 'Cita técnica eliminada correctamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la cita técnica.', error });
    }
  };

}
