import { Router } from 'express';
import { CompraProductoCtrl } from '../controllers/compraProducto.ctrl.js';

const compraProductoRoutes = Router();

compraProductoRoutes.get('/', CompraProductoCtrl.get); // Obtener todos los registros de CompraProducto
compraProductoRoutes.post('/', CompraProductoCtrl.create); // Crear un nuevo registro
compraProductoRoutes.get('/:idCompra/:idProducto', CompraProductoCtrl.getById); // Obtener un registro por IDs
compraProductoRoutes.delete('/:idCompra/:idProducto', CompraProductoCtrl.delete); // Eliminar un registro

export default compraProductoRoutes;
