const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit a contact form message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    // Save to database
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
  }
});

module.exports = router;
