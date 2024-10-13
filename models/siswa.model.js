import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Kelas from "./kelas.model.js";
import OrangTua from "./orangTua.model.js";

const Siswa =  db.define("Siswa",{
    id_siswa:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true,
        allowNull: false,
    },

    nama_siswa : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    nis:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    //untuk relasi antara siswa dan kelas nanti dlu, skip yg lain.

    orangTuaId :{
        type: DataTypes.INTEGER,
        references:{
            model:OrangTua,
            key: 'id_orang_tua'
        }
    },



    tempat_lahir:{
        type:DataTypes.STRING,
        allowNull: false
    },

    tanggal_lahir:{
        type:DataTypes.DATE,
        allowNull:false,
    },


    no_telepon:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,

    }, 

    //untuk relasi antara siswa dan kelas nanti dlu, skip yg lain.

    kelasId:{
        type: DataTypes.INTEGER,
        references:{
            model:Kelas,
            key: 'id_kelas'
        }
    }

});

Kelas.hasMany(Siswa,{foreignKey:'id_kelas'});
Siswa.belongsTo(Kelas, {foreignKey:'id_kelas'})

OrangTua.hasMany(Siswa, {foreignKey: "id_orang_tua"});
Siswa.belongsTo(OrangTua, {foreignKey: "id_orang_tua"})

export default Siswa;


// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("Siswa table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();