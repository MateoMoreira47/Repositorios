import { DataTypes } from 'sequelize';
import { psql } from '../config/db.config.js';
import Ciudad from './ciudad.model.js';

const Cliente = psql.define(
  'Cliente',
  {
    idCliente: {
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
    direccion: {
      type: DataTypes.STRING(255),
    },
    telefono: {
      type: DataTypes.STRING(20),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING(100),
    },
    fechaNac: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: 'CLIENTE',
    },
    ciudad_id: {
      type: DataTypes.UUID,
      references: {
        model: Ciudad,
        key: 'idciudad',
      },
    },
  },
);

export default Cliente;
