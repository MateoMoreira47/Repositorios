import { Sequelize, UUIDV4 } from "sequelize";

export const psql = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port:  process.env.DB_PORT
});

export async function connectPostgres(){
    try {
        await psql.authenticate();
        await psql.sync({ alert: true });
        console.log('*****Connection has been established successfully.*****');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export const DB_UUID = new UUIDV4();