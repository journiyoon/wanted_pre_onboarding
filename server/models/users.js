import SQ from "sequelize";
import { sequelize } from "../db/database.js";
const DataTypes = SQ.DataTypes;

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: true }
);

export async function createUser(user) {
  return User.create(user).then((data) => data.dataValues.id);
}
