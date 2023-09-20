import dotenv from 'dotenv';
dotenv.config();
import { Pool } from "pg";


const port = process.env.PORT
const db_name = process.env.DB_NAME
const password = process.env.DB_PASSWORD
const host = process.env.HOST

export const pool = new Pool({
    user: "postgres",
    password: password,
    host: host,
    port: port,
    database: db_name
});