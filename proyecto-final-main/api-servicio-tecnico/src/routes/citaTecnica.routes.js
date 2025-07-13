import { Router } from 'express';
import { CitaTecnicaCtrl } from '../controllers/citaTecnica.ctrl.js';

const citaTecnicaRoutes = Router();

citaTecnicaRoutes.get('/', CitaTecnicaCtrl.get); // Obtener todas las citas técnicas
citaTecnicaRoutes.get('/cliente/:id', CitaTecnicaCtrl.getByClient); // Obtener todas las citas técnicas
citaTecnicaRoutes.post('/', CitaTecnicaCtrl.create); // Crear una nueva cita técnica
citaTecnicaRoutes.delete('/:id', CitaTecnicaCtrl.delete); // Eliminar una cita técnica

export default citaTecnicaRoutes;

