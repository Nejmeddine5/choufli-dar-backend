const express = require('express');
const router = express.Router();
const houseController = require('../controllers/houseController');

router.post('/', houseController.createHouse);
router.get('/', houseController.getHouses);

module.exports = router;
