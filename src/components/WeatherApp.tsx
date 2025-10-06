import React from 'react';
import './WeatherApp.css';

interface WeatherAppProps {
  onBack: () => void;
}

const WeatherApp: React.FC<WeatherAppProps> = ({ onBack }) => {
  return (
    <div className="weather-app">
      <div className="app-header messages-header">
        <button className="app-back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <div className="contact-name">
          <h2>Weather</h2>
        </div>
      </div>

      <div className="weather-content">
        <div className="current-weather">
          <div className="weather-icon">🌤️</div>
          <div className="temperature">25°C</div>
          <div className="weather-desc">Partly Cloudy</div>
          <div className="location">Hồ Chí Minh</div>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-icon">💨</span>
            <span className="detail-label">Gió</span>
            <span className="detail-value">12 km/h</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">💧</span>
            <span className="detail-label">Độ ẩm</span>
            <span className="detail-value">68%</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">👁️</span>
            <span className="detail-label">Tầm nhìn</span>
            <span className="detail-value">10 km</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
