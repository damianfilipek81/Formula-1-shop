const express = require('express');
const Product = require('../models/Product.model');
const path = require('path');

const router = express.Router();
const pathToImages = path.join(__dirname, '../../src/images/');


router.get('/products', async (req, res) => {
  console.log(req.session)
  try {
    const result = await Product.find();
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    const output = {
      ...result._doc,
      path: pathToImages
    };
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(output);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;