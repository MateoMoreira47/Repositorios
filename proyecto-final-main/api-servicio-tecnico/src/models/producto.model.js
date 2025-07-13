import { DataTypes } from 'sequelize';
import { psql } from '../config/db.config.js';
import Categoria from './categoria.model.js';

const Producto = psql.define(
  'Producto',
  {
    idProducto: {
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
    descripcion: {
      type: DataTypes.STRING(255),
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
    },
    imagen:{
      type: DataTypes.STRING(255),
      defaultValue: 'https://placehold.co/600'
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    categoria_id: {
      type: DataTypes.UUID,
      references: {
        model: Categoria,
        key: 'idCategoria',
      },
    },
  }
);

// Asociación con Categoria
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'Categoria' });

export default Producto;
