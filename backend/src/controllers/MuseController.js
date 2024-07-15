const Muse = require('../models/Muse');

const createMuse = async (req, res) => {
  const { title, description, visibility, links } = req.body;
  const profileImage = req.files?.profileImage;
  const images = req.files?.images; // This will be an array if multiple images are sent

  if (!title || !description || !visibility) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  let profileImagePath = '';
  let imagePaths = [];

  // Handle single file upload
  if (profileImage) {
    profileImagePath = `./uploads/${profileImage.name}`;
    profileImage.mv(profileImagePath, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }

  // Handle multiple file uploads
  if (images) {
    if (!Array.isArray(images)) {
      return res.status(400).json({ message: 'Images should be an array' });
    }

    imagePaths = images.map(image => {
      const imagePath = `./uploads/${image.name}`;
      image.mv(imagePath, (err) => {
        if (err) return res.status(500).json({ message: err.message });
      });
      return imagePath;
    });
  }

  try {
    const newMuse = new Muse({
      title,
      description,
      profileImage: profileImagePath,
      images: imagePaths,
      links: links ? links.split(',') : [], // Convert links string to array if provided
      visibility,
    });

    await newMuse.save();
    res.status(201).json(newMuse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllMuses = async (req, res) => {
  try {
    const muses = await Muse.find();
    res.status(200).json(muses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createMuse,
  getAllMuses,
};
