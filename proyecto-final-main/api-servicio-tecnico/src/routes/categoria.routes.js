import { Router } from 'express';
import { CategoriaCtrl } from '../controllers/categoria.ctrl.js';

const categoriaRoutes = Router();

categoriaRoutes.get('/', CategoriaCtrl.get); // Obtener todas las categorías
categoriaRoutes.post('/', CategoriaCtrl.create); // Crear una nueva categoría
categoriaRoutes.get('/:id', CategoriaCtrl.getById); // Obtener una categoría por ID
categoriaRoutes.put('/:id', CategoriaCtrl.update); // Actualizar una categoría por ID
categoriaRoutes.delete('/:id', CategoriaCtrl.delete); // Eliminar una categoría por ID

export default categoriaRoutes;
