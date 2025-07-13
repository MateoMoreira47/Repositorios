import express from "express";
import * as cors from "cors";
import { connectPostgres } from "./config/db.config.js";
import categoriaRoutes from "./routes/categoria.routes.js";
import citaTecnicaRoutes from "./routes/citaTecnica.routes.js";
import ciudadRoutes from "./routes/ciudad.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import compraRoutes from "./routes/compra.routes.js";
import compraProductoRoutes from "./routes/compraProducto.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import metodoPagoRoutes from "./routes/metodoPago.routes.js";
import empleadoRoutes from "./routes/empleado.routes.js";
import './associations.js';

const app = express();
const port = process.env.PORT || 4000;

connectPostgres();

app.use(cors.default())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (__, res) => {
  res.send("Express + Node Server LIVE");
});

app.use('/compras', compraRoutes);
app.use('/compra-productos', compraProductoRoutes);
app.use('/ciudades', ciudadRoutes);
app.use('/metodos-pago', metodoPagoRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/clientes', clienteRoutes);
app.use('/empleados', empleadoRoutes);
app.use('/productos', productoRoutes);
app.use('/citas-tecnicas', citaTecnicaRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});