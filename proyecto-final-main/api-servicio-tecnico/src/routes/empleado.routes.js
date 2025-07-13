import { Router } from 'express';
import { EmpleadoCtrl } from '../controllers/empleado.ctrl.js';

const empleadoRoutes = Router();

empleadoRoutes.get('/', EmpleadoCtrl.get); // Obtener todos los empleados
empleadoRoutes.post('/', EmpleadoCtrl.create); // Crear un nuevo empleado
empleadoRoutes.get('/:id', EmpleadoCtrl.getById); // Obtener un empleado por ID
empleadoRoutes.put('/:id', EmpleadoCtrl.update); // Actualizar un empleado por ID
empleadoRoutes.delete('/:id', EmpleadoCtrl.delete); // Eliminar un empleado por ID

export default empleadoRoutes;
