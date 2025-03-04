🌍 Weather Map App
📌 Overview
This is an interactive weather map application built with React, TypeScript, and React Leaflet. The app allows users to click on a map location to retrieve real-time weather details, including:

📍 Location Name (if available)
🌡 Temperature (°C)
☁️ Weather Condition (e.g., "Clear Sky")
💧 Humidity (%)
🌬 Wind Speed (m/s)
The weather data is fetched from the OpenWeatherMap API and displayed in a sidebar while keeping the map interactive.

🛠️ Tech Stack & Libraries Used
Core Technologies
React – JavaScript library for building UI components.
TypeScript – Statically typed JavaScript for better code safety.
React Leaflet – Interactive map rendering using Leaflet.js.
Axios – For making API requests to OpenWeatherMap.
React Bootstrap – UI styling and responsive components.
CSS – Custom styles for layout and UI enhancements.
Installed Dependencies
To ensure the app runs correctly, these libraries were installed:


npm install react react-dom react-leaflet leaflet axios react-bootstrap
For TypeScript support, these additional types were installed:

npm install --save-dev @types/react-leaflet @types/leaflet

🔧 How to Set Up & Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/your-username/weather-map-app.git
cd weather-map-app
2️⃣ Install Dependencies

npm install

3️⃣ Get OpenWeatherMap API Key
Sign up at OpenWeatherMap.
Generate a free API key.
Create a .env file in the root of your project and add:

REACT_APP_WEATHER_API_KEY=your_api_key_here
4️⃣ Start the Development Server

npm start
The app will run at http://localhost:3000.

📂 Project Structure
perl

weather-map-app/
│── src/
│   ├── components/
│   │   ├── Map.tsx        # Interactive map using React Leaflet
│   │   ├── WeatherInfo.tsx # Sidebar displaying weather details
│   ├── api/
│   │   ├── weather.ts     # API request functions for OpenWeatherMap
│   ├── App.tsx           # Main app layout
│   ├── index.tsx         # Entry point for React
│   ├── styles.css        # Global styles
│── public/
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation

📌 Assumptions Made During Development
Weather API Response Structure

The OpenWeatherMap API provides correct latitude & longitude-based weather data.
If a location has no name, it defaults to "Unknown".
User Interaction with the Map

The user can click anywhere on the map to fetch weather data.
The map is not zoom-restricted, allowing navigation to any location.
UI Layout & Responsiveness

The map takes 50% of the screen (right side).
The weather sidebar takes 50% (left side).
The app is desktop-friendly but can be adjusted for mobile use.
Error Handling

If the API request fails, an error message is displayed.

A loading spinner appears when fetching weather data.
🚀 Future Enhancements
🌙 Dark Mode Toggle
📌 Search Bar for City Search
📅 7-Day Weather Forecast
🌍 GPS-Based Location Detection
🐞 Issues & Support
If you encounter any issues, feel free to open an issue or contact me at mahlangukamogelo206@gmail.com.

📜 License
This project is open-source.