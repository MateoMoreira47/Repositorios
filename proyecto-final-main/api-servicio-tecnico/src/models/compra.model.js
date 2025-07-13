import { DataTypes } from 'sequelize';
import MetodoPago from './metodo_pago.model.js';
import { psql } from '../config/db.config.js';
import Cliente from './cliente.model.js';
import CompraProducto from './compra_producto.model.js';

const Compra = psql.define(
  'Compra',
  {
    idCompra: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    cliente_id: {
      type: DataTypes.UUID,
      references: {
        model: Cliente,
        key: 'idCliente',
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    metodo_pago_id: {
      type: DataTypes.UUID,
      references: {
        model: MetodoPago,
        key: 'idmetodo',
      },
    },
  },
);

Compra.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Compra.belongsTo(MetodoPago, { foreignKey: 'metodo_pago_id' });
Compra.hasMany(CompraProducto, { foreignKey: 'idCompra' }); // Ajuste aquí para reflejar la relación con idCompra en CompraProducto
CompraProducto.belongsTo(Compra, { foreignKey: 'idCompra' }); // Relación con Compra

export default Compra;
