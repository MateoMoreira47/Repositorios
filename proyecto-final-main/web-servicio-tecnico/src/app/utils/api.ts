/** URL BACKEND API */
const url = 'http://localhost:3000'

export class Api {
    static readonly products = `${url}/productos`;
    static readonly productsById = (id:string) => `${url}/productos/${id}`;
    static readonly productsCategory = (id:string) => `${url}/productos/categoria/${id}`;
    static readonly cateogries = `${url}/categorias`;
    static readonly auth = `${url}/clientes/auth`;
    static readonly ciudades = `${url}/ciudades`;
    static readonly empleados = `${url}/empleados`;
    static readonly citas = `${url}/citas-tecnicas`;
    static readonly compras = `${url}/compras`;
    static readonly comprasClient = (id:string) =>`${url}/compras/cliente/${id}`;
    static readonly citasClient = (id:string) =>`${url}/citas-tecnicas/cliente/${id}`;
    static readonly client = `${url}/clientes`;
    static readonly metodosPago = `${url}/metodos-pago`;
}