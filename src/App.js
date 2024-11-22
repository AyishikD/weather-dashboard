import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <WeatherWidget />
    </div>
  );
}

export default App;
