import { Router } from 'express';
import { MetodoPagoCtrl } from '../controllers/metodoPago.ctrl.js';

const metodoPagoRoutes = Router();

metodoPagoRoutes.get('/', MetodoPagoCtrl.get); // Obtener todos los métodos de pago
metodoPagoRoutes.post('/', MetodoPagoCtrl.create); // Crear un nuevo método de pago
metodoPagoRoutes.get('/:id', MetodoPagoCtrl.getById); // Obtener un método de pago por ID
metodoPagoRoutes.put('/:id', MetodoPagoCtrl.update); // Actualizar un método de pago por ID
metodoPagoRoutes.delete('/:id', MetodoPagoCtrl.delete); // Eliminar un método de pago por ID

export default metodoPagoRoutes;
