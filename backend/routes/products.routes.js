const express = require('express');
const Product = require('../models/Product.model');

const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const result = await Product
      .find();
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;