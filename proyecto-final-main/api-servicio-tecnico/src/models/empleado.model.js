import { DataTypes } from 'sequelize';
import { psql } from '../config/db.config.js';

const Empleado = psql.define(
  'Empleado',
  {
    idEmpleado: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    cedula: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    especialidad: {
      type: DataTypes.STRING(50),
    },
  },
);

export default Empleado;
