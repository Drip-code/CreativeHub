const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinary.config');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Setup Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'avatars',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    public_id: (req, file) => avatar-${Date.now()}
  },
});

const upload = multer({ storage });

// Middleware: Protect route
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid Token' });
  }
}

// POST /api/avatar
router.post('/', verifyToken, upload.single('avatar'), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { avatar: req.file.path },
      { new: true }
    );
    res.json({ avatarUrl: user.avatar });
  } catch (err) {
    res.status(500).json({ error: 'Error uploading avatar' });
  }
});

module.exports = router;