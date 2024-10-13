import * as pelanggaranSiswaRepository from '../repositories/'


export const removeCounselling = async (id_counselling) => {
    try {
      const deletedCounselling = await counsellingRepository.deleteCounselling(id_counselling);
      return deletedCounselling;
    } catch (error) {
      throw new Error('Error deleting Counselling: ' + error.message);
    }
  };
  