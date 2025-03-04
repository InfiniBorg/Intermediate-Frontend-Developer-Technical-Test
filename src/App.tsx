import { useState, useEffect } from "react";
import Map from "./components/Map"; 
import WeatherInfo from "./components/WeatherInfo"; 
import { getWeather } from "./api/weather"; 
import "./App.css"; 

const App = () => {
  const [weather, setWeather] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

    const handleLocationSelect = async (lat: number, lon: number) => {
    try {
      const weatherData = await getWeather(lat, lon); 
      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const timeString = date.toLocaleTimeString();
      setCurrentTime(timeString);
    }, 1000); 

  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <i className="fa fa-cloud-sun"></i> {/* Weather icon */}
          <h1>Weather Map</h1>
        </div>
        <div className="time-display">
          <i className="fa fa-clock"></i> {/* Clock Icon */}
          <span>{currentTime}</span>
        </div>
      </header>

      <div className="main-content">
        <div className="info-container">
          <WeatherInfo weather={weather} />
        </div>
        <div className="map-container">
          <Map onLocationSelect={handleLocationSelect} />
        </div>
      </div>

      <footer>
        <p>KT Mahlangu Weather Map App © 2025</p>
      </footer>
    </div>
  );
};

export default App;
