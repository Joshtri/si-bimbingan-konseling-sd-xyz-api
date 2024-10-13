import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Siswa from "./siswa.model.js";
import jenisPelanggaran from "./jenisPelanggaran.model.js";

const PelanggaranSiswa = db.define("PelanggaranSiswa", {
    id_pelanggaran_siswa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    // berelasi dengan Table siswa.
    siswaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Siswa,
            key: "id_siswa"
        }
    },

    // berelasi dengan Table jenisPelanggaran.
    jenisPelanggaranId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: jenisPelanggaran,
            key: "id_jenis_pelanggaran"
        }
    },

    tanggal_pelanggaran: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    tanggal_konseling: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },

    status_konseling: {
        type: DataTypes.ENUM("belum", "sedang", "selesai"),
        allowNull: false,
        defaultValue: "belum"
    },

    tindak_lanjut: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },

    konselor: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },

    catatan_konseling: {
        type: DataTypes.STRING(255), // Changed length from 45 to 255 to allow for more detailed notes
        allowNull: false,
    },

});

jenisPelanggaran.hasMany(PelanggaranSiswa, { foreignKey: 'id_jenis_pelanggaran' });
PelanggaranSiswa.belongsTo(jenisPelanggaran, { foreignKey: 'id_jenis_pelanggaran' });

Siswa.hasMany(PelanggaranSiswa, { foreignKey: 'id_siswa' });
PelanggaranSiswa.belongsTo(Siswa, { foreignKey: 'id_siswa' });

export default PelanggaranSiswa;

(async () => {
    try {
        await db.sync({ alter: true });
        console.log("PelanggaranSiswa table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();