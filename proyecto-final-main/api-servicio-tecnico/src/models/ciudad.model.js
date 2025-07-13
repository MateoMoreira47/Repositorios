import { DataTypes } from 'sequelize';
import { psql } from '../config/db.config.js';
import Cliente from './cliente.model.js';

const Ciudad = psql.define(
  'Ciudad',
  {
    idciudad: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
);

export default Ciudad;
