import Class from '../models/class.model.js';
import Counselling from '../models/counselling.model.js';
import Student from '../models/student.model.js';
import User from '../models/user.model.js';


export const getCounselling = async()=>{
    try {
        return await Counselling.findAll(
            {
                include:[
                    {
                        model:Class,
                        attributes:['class_name']
                    },
                    
                    {
                        model:Student,
                        attributes:['name']
                    },
                    
                    {
                        model:User,
                        attributes:['username']
                    }
                ]
            }
        );
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createCounselling = async(counsellingData)=>{
    try {
        return await Counselling.create(counsellingData);
    } catch (error) {
        console.log(error);
        throw error;
    }
}



export const deleteCounselling = async(id_counselling)=>{
    try {
        return await Counselling.destroy({
            where:{
                id_counselling
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
