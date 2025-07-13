import { Router } from 'express';
import { ClientCtrl } from '../controllers/cliente.ctrl.js';

const clienteRoutes = Router();

// Rutas para Clientes
clienteRoutes.get('/', ClientCtrl.get); // Obtener todos los clientes
clienteRoutes.post('/', ClientCtrl.create); // Crear un nuevo cliente
clienteRoutes.get('/:id', ClientCtrl.getById); // Obtener un cliente por ID
clienteRoutes.put('/:id', ClientCtrl.update); // Actualizar un cliente por ID
clienteRoutes.delete('/:id', ClientCtrl.delete); // Eliminar un cliente por ID
clienteRoutes.post('/auth', ClientCtrl.auth);

export default clienteRoutes;
