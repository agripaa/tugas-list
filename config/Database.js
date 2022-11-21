import { Sequelize } from "sequelize";

const db = new Sequelize('task', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;  