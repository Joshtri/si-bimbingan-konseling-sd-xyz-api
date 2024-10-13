import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const Kelas = db.define("Kelas", {
    id_kelas: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_kelas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kelas_kejuruan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, );

// Sync with the database
(async () => {
    try {
        await db.sync();
        console.log("class table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();

export default Kelas;
