const mongoose = require('mongoose');
const UserResponse = require('../models/UserResponse');

const getAllUserResponses = async (req, res) => {
  try {
    const userResponses = await UserResponse.find();
    res.json(userResponses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addUserResponse = async (req, res) => {
  try {
    const { outcome } = req.body;

    const userId = new mongoose.Types.ObjectId(); // Generates a new ObjectId
    const userResponse = new UserResponse({ userId, outcome });
    await userResponse.save();
    res.status(201).json({ message: 'User response saved successfully', userId });
  } catch (error) {
    console.error('Error saving user response:', error);
    res.status(500).json({ error: 'Failed to save user response' });
  }
};
const getLatestUserResponse = async (req, res) => {
    try {
      const latestResponse = await UserResponse.findOne().sort({ createdAt: -1 }); // Sort by creation date in descending order
      if (!latestResponse) {
        return res.status(404).json({ message: 'No user responses found' });
      }
      res.json(latestResponse);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch latest user response' });
    }
  };
  


module.exports = {
  getAllUserResponses,
  addUserResponse,
  getLatestUserResponse
};
