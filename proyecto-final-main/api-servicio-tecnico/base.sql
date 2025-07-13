    -- Creación de la tabla Ciudad
    CREATE TABLE IF NOT EXISTS Ciudad (
        idCiudad SERIAL,
        nombre VARCHAR(100) NOT NULL,
        PRIMARY KEY (idCiudad)
    );

    -- Creación de la tabla MetodoPago
    CREATE TABLE IF NOT EXISTS MetodoPago (
        idMetodo SERIAL,
        tipo VARCHAR(50) NOT NULL,
        PRIMARY KEY (idMetodo)
    );

    -- Creación de la tabla Categoria
    CREATE TABLE IF NOT EXISTS Categoria (
        idCategoria SERIAL,
        nombre VARCHAR(100) NOT NULL,
        PRIMARY KEY (idCategoria)
    );

    -- Creación de la tabla Cliente
    CREATE TABLE IF NOT EXISTS Cliente (
        idCliente int,
        cedula VARCHAR(20) UNIQUE NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        apellido VARCHAR(100) NOT NULL,
        direccion VARCHAR(255),
        telefono VARCHAR(20),
        email VARCHAR(100),
        ciudad_id INT,
		fechaNac date not null,
        PRIMARY KEY (idCliente),
        FOREIGN KEY (ciudad_id) REFERENCES grupotc.Ciudad(idCiudad)
    );

    -- Creación de la tabla Empleado
    CREATE TABLE IF NOT EXISTS Empleado (
        idEmpleado SERIAL,
        cedula VARCHAR(20) UNIQUE NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        apellido VARCHAR(100) NOT NULL,
        especialidad VARCHAR(50),
        PRIMARY KEY (idEmpleado)
    );

    -- Creación de la tabla Producto
    CREATE TABLE IF NOT EXISTSProducto (
        idProducto SERIAL,
        nombre VARCHAR(100) NOT NULL,
        descripcion VARCHAR(255),
        precio DECIMAL(10,2),
        stock INT,
        categoria_id INT,
        PRIMARY KEY (idProducto),
        FOREIGN KEY (categoria_id) REFERENCES grupotc.Categoria(idCategoria)
    );

    -- Creación de la tabla Compra
    CREATE TABLE IF NOT EXISTS Compra (
        idCompra SERIAL,
        cliente_id INT,
        fecha DATE,
        metodo_pago_id INT,
        PRIMARY KEY (idCompra),
        FOREIGN KEY (cliente_id) REFERENCES grupotc.Cliente(idCliente),
        FOREIGN KEY (metodo_pago_id) REFERENCES grupotc.MetodoPago(idMetodo)
    );

    -- Creación de la tabla CompraProducto para relación muchos a muchos entre Compra y Producto
    CREATE TABLE IF NOT EXISTS CompraProducto (
        idCompra INT,
        idProducto INT,
        cantidad INT,
        PRIMARY KEY (idCompra, idProducto),
        FOREIGN KEY (idCompra) REFERENCES grupotc.Compra(idCompra),
        FOREIGN KEY (idProducto) REFERENCES grupotc.Producto(idProducto)
    );

    -- Creación de la tabla CitaTecnica
    CREATE TABLE IF NOT EXISTS CitaTecnica (
        idCita SERIAL,
        idEmpleado INT,
        idCliente INT,
        fecha DATE,
        descripcion VARCHAR(255),
        PRIMARY KEY (idCita),
        FOREIGN KEY (idEmpleado) REFERENCES grupotc.Empleado(idEmpleado),
        FOREIGN KEY (idCliente) REFERENCES grupotc.Cliente(idCliente)
    );