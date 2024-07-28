import Counselling from '../models/counselling.model.js';



export const getCounselling = async()=>{
    try {
        return await Counselling.findAll();
    } catch (error) {
        throw error;
    }
};

export const createCounselling = async(counsellingData)=>{
    try {
        return await Counselling.create(counsellingData);
    } catch (error) {
        throw error;
    }
}