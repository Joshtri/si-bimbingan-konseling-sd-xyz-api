import * as counsellingServices from '../services/counselling.services.js'

export const getCounselling = async (req, res) => {
  try {
    const counselling = await counsellingServices.getAllCounselling();
    res.status(200).json(counselling);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCounselling = async (req, res) => {
  try {
    const newCounselling = await counsellingServices.addCounselling(req.body);
    res.status(201).json(newCounselling);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};