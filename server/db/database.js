import { config } from "../config.js";
import SQ from "sequelize";
const DataTypes = SQ.DataTypes;

const { host, user, database, password, port } = config.db;

export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: "postgresql",
  port,
  logging: false,
});
