// api/weather.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { city } = req.query;
  const apiKey = process.env.API_KEY;

  if (!city) {
    return res.status(400).json({ error: 'Parâmetro city obrigatório' });
  }

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod).json({ error: data.message });
    }

    res.status(200).json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno' });
  }
};
