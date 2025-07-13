import { Router } from 'express';
import { CiudadCtrl } from '../controllers/ciudad.ctrl.js';
const ciudadRoutes = Router();

ciudadRoutes.get('/', CiudadCtrl.get); // Obtener todas las ciudades
ciudadRoutes.post('/', CiudadCtrl.create); // Crear una nueva ciudad
ciudadRoutes.get('/:id', CiudadCtrl.getById); // Obtener una ciudad por ID
ciudadRoutes.put('/:id', CiudadCtrl.update); // Actualizar una ciudad por ID
ciudadRoutes.delete('/:id', CiudadCtrl.delete); // Eliminar una ciudad por ID

export default ciudadRoutes;
