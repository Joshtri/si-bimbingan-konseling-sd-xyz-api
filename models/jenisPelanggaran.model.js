import { DataTypes } from "sequelize"
import db from "../config/dbConfig.js"

const jenisPelanggaran = db.define("JenisPelanggaran", {
    id_jenis_pelanggaran: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_pelanggaran: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    poin_pelanggaran: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    keterangan_pelanggaran: {
        type: DataTypes.STRING(45),
        allowNull: false,
    }
});



export default jenisPelanggaran;