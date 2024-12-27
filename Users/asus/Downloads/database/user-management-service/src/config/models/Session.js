module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Session", {
      session_id: {
          type: DataTypes.STRING,
          primaryKey: true,
      },
      user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      expiration: {
          type: DataTypes.DATE,
          allowNull: false,
      },
  });
};
