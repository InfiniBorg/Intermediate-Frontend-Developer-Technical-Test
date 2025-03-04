import { Spinner } from "react-bootstrap"; 

const WeatherInfo = ({ weather }: { weather: any }) => {
  if (!weather) {
    return (
      <div className="placeholder">
        <Spinner animation="border" variant="primary" /> Loading weather...
      </div>
    );
  }

  return (
    <div className="weather-info">
      <h2>🌤 Weather Details</h2>
      <ul>
        <li><strong>📍 Location:</strong> {weather.name || "Unknown"}</li>
        <li><strong>🌡 Temperature:</strong> {weather.main.temp}°C</li>
        <li><strong>☁️ Condition:</strong> {weather.weather[0].description}</li>
        <li><strong>💧 Humidity:</strong> {weather.main.humidity}%</li>
        <li><strong>🌬 Wind Speed:</strong> {weather.wind.speed} m/s</li>
      </ul>
    </div>
  );
};

export default WeatherInfo;
