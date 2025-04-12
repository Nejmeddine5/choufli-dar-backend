const House = require('../models/house');
const { getCoordinates } = require('../utils/geocode');

exports.createHouse = async (req, res) => {
  const { title, description, address, city, price } = req.body;

  try {
    const coordinates = await getCoordinates(`${address}, ${city}`);

    const house = new House({
      title,
      description,
      address,
      city,
      price,
      user: req.user?.id || null, 
      location: {
        type: 'Point',
        coordinates: coordinates
      }
    });

    await house.save();
    res.status(201).json(house);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Erreur serveur", error: err.message });
  }
};

exports.getHouses = async (req, res) => {
  try {
    const houses = await House.find().populate('user', 'name email');
    res.json(houses);
  } catch (err) {
    res.status(500).json({ msg: 'Erreur serveur' });
  }
};
