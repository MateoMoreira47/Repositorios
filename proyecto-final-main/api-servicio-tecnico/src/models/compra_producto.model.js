import { DataTypes } from 'sequelize';
import Producto from './producto.model.js';
import { psql } from '../config/db.config.js';
import Compra from './compra.model.js';

const CompraProducto = psql.define(
  'CompraProducto',
  {
    idCompraProducto: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    idCompra: {
      type: DataTypes.UUID,
      references: {
        // model: Compra,
        key: 'idCompra',
      },
      allowNull: false,
    },
    idProducto: {
      type: DataTypes.UUID,
      references: {
        model: Producto,
        key: 'idProducto',
      },
    },
    cantidad: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
  },
);

CompraProducto.belongsTo(Producto, { foreignKey: 'idProducto' });

export default CompraProducto;
