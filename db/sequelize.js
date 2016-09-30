import Sequelize from 'sequelize';
const db = process.env.DATABASE_URL || 'postgres://localhost/sandbox';
const sequelize = new Sequelize(db);
export default sequelize;
