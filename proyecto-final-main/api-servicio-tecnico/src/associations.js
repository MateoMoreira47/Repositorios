import Cliente from './models/cliente.model.js';
import Ciudad from './models/ciudad.model.js';

// Definir relaciones después de inicializar modelos
Cliente.belongsTo(Ciudad, { foreignKey: 'ciudad_id', as: 'Ciudad' });
Ciudad.hasMany(Cliente, { foreignKey: 'ciudad_id', as: 'Clientes' });

export default { Cliente, Ciudad };
