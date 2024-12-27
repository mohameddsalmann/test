module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Log", {
      request_id: {
          type: DataTypes.STRING,
          primaryKey: true,
      },
      user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      input_text: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      output_text: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      timestamp: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
      },
  });
};
