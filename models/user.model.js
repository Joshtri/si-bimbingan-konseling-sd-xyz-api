import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const User = db.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },


    email: {
        type: DataTypes.STRING,
        // unique: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
}, {});

//     User.associate = function(models) {
//     User.hasMany(models.Counselling, { foreignKey: 'userId' });
// };

export default User;

// Singkronisasi dengan basis data
(async () => {
    try {
      await db.sync();
      console.log("User table has been created.");
    } catch (error) {
      console.error("Unable to create the table:", error);
    }
})();