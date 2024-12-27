const sequelize = require("../config/database");
const User = require("./User")(sequelize);
const Session = require("./Session")(sequelize, require("sequelize").DataTypes);
const Log = require("./Log")(sequelize, require("sequelize").DataTypes);

module.exports = { sequelize, User, Session, Log };
