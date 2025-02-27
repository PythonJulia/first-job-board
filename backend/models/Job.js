const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Job = sequelize.define("Job", {
    title: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    salary: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Job;
