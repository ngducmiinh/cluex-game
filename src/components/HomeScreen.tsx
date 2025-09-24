import React from 'react';
import './HomeScreen.css';

interface HomeScreenProps {
  onAppOpen: (appName: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onAppOpen }) => {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString('vi-VN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  const apps = [
    { id: 'messages', name: 'Messages', icon: '💬', color: '#007AFF' },
    { id: 'phone', name: 'Phone', icon: '📞', color: '#00C853' },
    { id: 'camera', name: 'Camera', icon: '📷', color: '#9E9E9E' },
    { id: 'photos', name: 'Photos', icon: '🖼️', color: '#FF9800' },
    { id: 'weather', name: 'Weather', icon: '🌤️', color: '#03A9F4' },
    { id: 'notes', name: 'Notes', icon: '📝', color: '#FFC107' },
    { id: 'calculator', name: 'Calculator', icon: '🔢', color: '#E91E63' },
  ];

  return (
    <div className="home-screen">
      <div className="status-bar">
        <span className="time">{getCurrentTime()}</span>
        <div className="status-icons">
          <span className="signal">Clue-X</span>
          <span className="wifi"></span>
          <span className="battery">67%</span>
        </div>
      </div>

      <div className="home-content">
        <div className="home-header">
          <div className="date-time">
            <h1 className="current-time">{getCurrentTime()}</h1>
          </div>
        </div>

        <div className="apps-grid">
          {apps.map((app) => (
            <div
              key={app.id}
              className="app-icon"
              onClick={() => {
                console.log('App clicked:', app.id);
                onAppOpen(app.id);
              }}
              style={{ '--app-color': app.color } as React.CSSProperties}
            >
              <div className="app-icon-bg">
                <span className="app-emoji">{app.icon}</span>
              </div>
              <span className="app-name">{app.name}</span>
            </div>
          ))}
        </div>

        <div className="dock">
          <div className="dock-apps">
            <div className="dock-app" onClick={() => {
              console.log('Dock app clicked: messages');
              onAppOpen('messages');
            }}>
              <div className="dock-icon" style={{ background: '#007AFF' }}>
                💬
              </div>
            </div>
            <div className="dock-app" onClick={() => {
              console.log('Dock app clicked: phone');
              onAppOpen('phone');
            }}>
              <div className="dock-icon" style={{ background: '#00C853' }}>
                📞
              </div>
            </div>
            <div className="dock-app" onClick={() => {
              console.log('Dock app clicked: camera');
              onAppOpen('camera');
            }}>
              <div className="dock-icon" style={{ background: '#9E9E9E' }}>
                📷
              </div>
            </div>
            <div className="dock-app" onClick={() => {
              console.log('Dock app clicked: calculator');
              onAppOpen('calculator');
            }}>
              <div className="dock-icon" style={{ background: '#E91E63' }}>
                🔢
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
