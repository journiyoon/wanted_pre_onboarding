import SQ from "sequelize";
import { sequelize } from "../db/database.js";
const DataTypes = SQ.DataTypes;

export const Company = sequelize.define(
  "companys",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    company_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    positions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export async function getAll() {
  return Company.findAll({
    include: {
      model: Company,
    },
  }).then((data) => {
    console.log(data);
    return data;
  });
}

export async function getById(id) {
  return Company.findByPk(id);
}

export async function create(company_name, country, area, positions, desc) {
  return Company.create({
    company_name,
    country,
    area,
    positions,
    desc,
  }).then((data) => {
    return data.dataValues;
  });
}

export async function update(id, text) {
  const opening = openings.find((o) => {
    o.id === id;
  });
  if (opening) {
    opening.text = text;
  }
  return opening;
}

export async function deleteById(id) {
  openings = openings.filter((j) => j.id !== id);
}
