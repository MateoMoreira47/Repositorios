import Ciudad from '../models/ciudad.model.js';

export class CiudadCtrl {
  static get = async (req, res) => {
    try {
      const ciudades = await Ciudad.findAll();
      res.json(ciudades);
    } catch (error) {
      console.log("🚀 ~ getCiudades ~ error:", error)
      res.status(500).json({ message: 'Error al obtener las ciudades.', error });
    }
  };

  static create = async (req, res) => {
    try {
      const { nombre } = req.body;
      const nuevaCiudad = await Ciudad.create({ nombre });
      res.status(201).json(nuevaCiudad);
    } catch (error) {
      console.log("🚀 ~ create= ~ error:", error)
      res.status(500).json({ message: 'Error al crear la ciudad.', error });
    }
  };

  static getById = async (req, res) => {
    try {
      const { id } = req.params;
      const ciudad = await Ciudad.findByPk(id);
      if (!ciudad) {
        return res.status(404).json({ message: 'Ciudad no encontrada.' });
      }
      res.json(ciudad);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la ciudad.', error });
    }
  };

  static update = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const ciudad = await Ciudad.findByPk(id);
      if (!ciudad) {
        return res.status(404).json({ message: 'Ciudad no encontrada.' });
      }
      ciudad.nombre = nombre;
      await ciudad.save();
      res.json(ciudad);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la ciudad.', error });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      const ciudad = await Ciudad.findByPk(id);
      if (!ciudad) {
        return res.status(404).json({ message: 'Ciudad no encontrada.' });
      }
      await ciudad.destroy();
      res.json({ message: 'Ciudad eliminada correctamente.' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la ciudad.', error });
    }
  };
}
