import React, { useState, useEffect } from 'react';


const weatherIcons = {
  Sunny: '☀️',
  Cloudy: '☁️',
  Rainy: '🌧️',
};

const fetchWeatherData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const weatherConditions = ['Sunny', 'Cloudy', 'Rainy'];
      const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      const temperature = Math.floor(Math.random() * 30) + 15;
      

      if (Math.random() < 0.1) {
        reject('Failed to fetch weather data');
      } else {
        resolve({ condition, temperature });
      }
    }, 2000); 
  });
};

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWeatherData();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="weather-widget">
      <h2>Weather Widget</h2>
      <p>Current Temperature: {weatherData.temperature}°C</p>
      <p>Condition: {weatherData.condition} {weatherIcons[weatherData.condition]}</p>
    </div>
  );
};

export default WeatherWidget;
