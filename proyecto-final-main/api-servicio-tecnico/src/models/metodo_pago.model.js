import { DataTypes } from 'sequelize';
import { psql } from '../config/db.config.js';

const MetodoPago = psql.define(
  'MetodoPago',
  {
    idmetodo: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
);

export default MetodoPago;
