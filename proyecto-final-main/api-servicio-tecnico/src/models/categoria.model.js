import { DataTypes } from 'sequelize';
import { psql } from '../config/db.config.js';

const Categoria = psql.define(
  'Categoria',
  {
    idCategoria: {
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


export default Categoria;