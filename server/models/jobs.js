import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import { Company } from "./companys.js";
const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

export const Jobs = sequelize.define(
  "jobs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    position: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    compensation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    skill: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: true }
);
Jobs.belongsTo(Company);

const INCLUDE_JOBS = {
  attributes: [
    "id",
    [Sequelize.col("company.company_name"), "company_name"],
    [Sequelize.col("company.country"), "country"],
    [Sequelize.col("company.area"), "area"],
    "position",
    "compensation",
    "skill",
    [Sequelize.col("company.id"), "company_id"],
  ],
  include: {
    model: Company,
    attributes: [],
  },
};

const DETAIL_JOBS = {
  attributes: [
    "id",
    [Sequelize.col("company.company_name"), "company_name"],
    [Sequelize.col("company.country"), "country"],
    [Sequelize.col("company.area"), "area"],
    "position",
    "compensation",
    "skill",
    "text",
    // 회사가 올린 다른 채용공고 추가
    // [Sequelize.col("companys.id"), "company_id"],
    [Sequelize.col("company.positions"), "another_openings"],
  ],
  include: {
    model: Company,
    attributes: [],
  },
};

const ORDER_DESC = {
  order: [["createdAt", "DESC"]],
};

export async function getAll() {
  return Jobs.findAll({
    ...INCLUDE_JOBS,
    ...ORDER_DESC,
  });
}

export async function getById(id) {
  return Jobs.findOne({
    where: { id },
    ...DETAIL_JOBS,
  });
}

export async function create(position, compensation, skill, text, companyId) {
  return Jobs.create({
    position,
    compensation,
    skill,
    text,
    companyId,
  }).then((data) => {
    return data.dataValues;
  });
}

export async function update(id, position, compensation, skill, text) {
  return Jobs.findByPk(id, INCLUDE_JOBS).then((data) => {
    data.position = position;
    data.compensation = compensation;
    data.skill = skill;
    data.text = text;
    return data.save();
  });
}

export async function deleteById(id) {
  return Jobs.findByPk(id).then((data) => {
    data.destroy();
  });
}
