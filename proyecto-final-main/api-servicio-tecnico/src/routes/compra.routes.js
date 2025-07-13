import { Router } from 'express';
import { CompraCtrl } from '../controllers/compra.ctrl.js';

const compraRoutes = Router();

compraRoutes.get('/', CompraCtrl.get); // Obtener todas las compras
compraRoutes.post('/', CompraCtrl.create); // Crear una nueva compra
compraRoutes.get('/:id', CompraCtrl.getById); // Obtener una compra por ID
compraRoutes.get('/cliente/:id', CompraCtrl.getByClient); // Obtener una compra por ID
compraRoutes.delete('/:id', CompraCtrl.delete); // Eliminar una compra por ID

export default compraRoutes;
