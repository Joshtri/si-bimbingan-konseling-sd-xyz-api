import { createUser, getUser } from '../repositories/user.repository.js';



export const getAllUser = async ()=>{
    try {
        return await getUser();
    } catch (error) {
        throw error;
    }
}

export const addUser = async (userData) => {
    try {
      const newUser = await createUser(userData);
      return newUser;
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
};