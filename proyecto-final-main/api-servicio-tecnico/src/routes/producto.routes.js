import { Router } from 'express';
import { ProductoCtrl } from '../controllers/producto.ctrl.js';

const productoRoutes = Router();

productoRoutes.get('/', ProductoCtrl.get); // Obtener todos los productos
productoRoutes.post('/', ProductoCtrl.create); // Crear un nuevo producto
productoRoutes.get('/categoria/:id', ProductoCtrl.getByCategory); // Obtener un producto por ID
productoRoutes.get('/:id', ProductoCtrl.getById); // Obtener un producto por ID
productoRoutes.put('/:id', ProductoCtrl.update); // Actualizar un producto por ID
productoRoutes.delete('/:id', ProductoCtrl.delete); // Eliminar un producto por ID

export default productoRoutes;
