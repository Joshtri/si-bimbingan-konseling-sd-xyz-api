import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const OrangTua = db.define('OrangTua', {
    id_orang_tua: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_orang_tua: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_telepon : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default OrangTua;

(async () => {
    try {
        await db.sync();
        console.log("OrangTua table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();