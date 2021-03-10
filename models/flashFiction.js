"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FlashFiction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FlashFiction.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 3500],
        },
      },
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "FlashFiction",
    }
  );
  return FlashFiction;
};
