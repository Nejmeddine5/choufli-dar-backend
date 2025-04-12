const axios = require('axios');

async function getCoordinates(address) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

  const res = await axios.get(url, {
    headers: {
      'User-Agent': 'ChoufliDar-App'
    }
  });

  if (res.data.length === 0) {
    throw new Error('Adresse non trouvée');
  }

  const { lat, lon } = res.data[0];
  return [parseFloat(lon), parseFloat(lat)];
}

module.exports = { getCoordinates };
