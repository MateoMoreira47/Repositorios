import { DataTypes } from 'sequelize';
import Cliente from './cliente.model.js';
import Empleado from './empleado.model.js';
import { psql } from '../config/db.config.js';

const CitaTecnica = psql.define(
  'CitaTecnica',
  {
    idCita: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    idEmpleado: {
      type: DataTypes.UUID,
      references: {
        model: Empleado,
        key: 'idEmpleado',
      },
    },
    idCliente: {
      type: DataTypes.UUID,
      references: {
        model: Cliente,
        key: 'idCliente',
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    descripcion: {
      type: DataTypes.STRING(255),
    },
  },
);

CitaTecnica.belongsTo(Empleado, { foreignKey: 'idEmpleado' });
CitaTecnica.belongsTo(Cliente, { foreignKey: 'idCliente' });

export default CitaTecnica;
