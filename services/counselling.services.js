import * as counsellingRepository from '../repositories/counselling.repository.js';


export const getAllCounselling = async () => {
  try {
    const counsellings = await counsellingRepository.getCounselling();
    return counsellings;
  } catch (error) {
    throw new Error('Error fetching counsellings: ' + error.message);
  }
};

export const addCounselling = async (counsellingData) => {
  try {
    const newCounselling = await counsellingRepository.createCounselling(counsellingData);
    return newCounselling;
  } catch (error) {
    throw new Error('Error creating counselling: ' + error.message);
  }
};

export const removeCounselling = async (id_counselling) => {
  try {
    const deletedCounselling = await counsellingRepository.deleteCounselling(id_counselling);
    return deletedCounselling;
  } catch (error) {
    throw new Error('Error deleting Counselling: ' + error.message);
  }
};

