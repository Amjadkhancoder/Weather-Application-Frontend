import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(`https://wttr.in/${city}?format=3`);
      const data = await response.text();
      setWeather(data);
    } catch (error) {
      setWeather('Oops! Something went wrong.');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>🌤️ Weather Forecast Portal</h1>
        <p>Get quick weather updates from anywhere in the world!</p>
      </header>

      <section className="search-section">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Check Weather</button>
        {weather && <p className="weather-result">{weather}</p>}
      </section>

      <section className="about">
        <h2>About This App</h2>
        <p>
          Weather Forecast Portal is a React-based web app that uses the wttr.in API to provide live weather updates. Just enter any city name to get instant conditions.
        </p>
      </section>

      <section className="owner">
        <h2>Owner Info</h2>
        <p>🧑 Created by: <strong>Amjad Khan</strong></p>
        <p>🎓 Program: Master of Computer Applications (MCA)</p>
        <p>🛠 Developer's Note:</p>
        <p>
          I’m an MCA student with hands-on experience in frontend development and API integration. This app was developed entirely by me using React.js and the wttr.in API, showcasing real-time weather data with a user-friendly interface. Through this project, I've implemented core web technologies, improved my design aesthetics using CSS, and built a fully functional system that reflects what I've learned and understood. It’s more than just code — it's my way of converting theory into a real-world application.
        </p>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>📧 Email: <strong>amjadkhan87011@mail.com</strong></p>
        <p>💬 For queries, suggestions or collaboration, feel free to reach out via email.</p>
      </section>

      <footer>
        <h3>Tips & Tricks</h3>
        <ul>
          <li>Use valid city names for accurate results (e.g. Delhi, Tokyo, New York).</li>
          <li>Check spellings — system is case-insensitive but typos may cause errors.</li>
          <li>Try ":help" in the input for secret wttr features!</li>
        </ul>
        <p>© 2025 Weather Forecast Portal — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;



