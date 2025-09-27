import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LockScreen from './components/LockScreen';
import HomeScreen from './components/HomeScreen';
import MessagesApp from './components/MessagesApp';
import PhoneApp from './components/PhoneApp';
import CameraApp from './components/CameraApp';
import PhotosApp from './components/PhotosApp';
import WeatherApp from './components/WeatherApp';
import NotesApp from './components/NotesApp';
import CalculatorApp from './components/CalculatorApp';
import './App.css';

type AppScreen = 'landing' | 'phone';
type PhoneScreen = 'lock' | 'home' | 'messages' | 'phone' | 'camera' | 'photos' | 'weather' | 'notes' | 'calculator';

function App() {
  const [currentApp, setCurrentApp] = useState<AppScreen>('landing');
  const [currentScreen, setCurrentScreen] = useState<PhoneScreen>('lock');

  const handleStartResearch = () => {
    setCurrentApp('phone');
    setCurrentScreen('lock');
  };

  const handleUnlock = () => {
    setCurrentScreen('home');
  };

  const handleAppOpen = (appName: string) => {
    switch (appName) {
      case 'messages':
        setCurrentScreen('messages');
        break;
      case 'phone':
        setCurrentScreen('phone');
        break;
      case 'camera':
        setCurrentScreen('camera');
        break;
      case 'photos':
        setCurrentScreen('photos');
        break;
      case 'weather':
        setCurrentScreen('weather');
        break;
      case 'notes':
        setCurrentScreen('notes');
        break;
      case 'calculator':
        setCurrentScreen('calculator');
        break;
      default:
        console.log(`Opening ${appName} app`);
    }
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'lock':
        return <LockScreen onUnlock={handleUnlock} />;
      case 'home':
        return <HomeScreen onAppOpen={handleAppOpen} />;
      case 'messages':
        return <MessagesApp onBack={handleBackToHome} />;
      case 'phone':
        return <PhoneApp onBack={handleBackToHome} />;
      case 'camera':
        return <CameraApp onBack={handleBackToHome} />;
      case 'photos':
        return <PhotosApp onBack={handleBackToHome} />;
      case 'weather':
        return <WeatherApp onBack={handleBackToHome} />;
      case 'notes':
        return <NotesApp onBack={handleBackToHome} />;
      case 'calculator':
        return <CalculatorApp onBack={handleBackToHome} />;
      default:
        return <LockScreen onUnlock={handleUnlock} />;
    }
  };

  const handleBackToLanding = () => {
    setCurrentApp('landing');
    setCurrentScreen('lock');
  };

  const renderApp = () => {
    switch (currentApp) {
      case 'landing':
        return <LandingPage onStartResearch={handleStartResearch} />;
      case 'phone':
        return (
          <div className="phone-app-container">
            <button className="back-to-landing-button" onClick={handleBackToLanding}>
              ← Quay lại trang chủ
            </button>
            <div className="phone-container">
              <div className="phone-screen">
                {renderScreen()}
              </div>
            </div>
          </div>
        );
      default:
        return <LandingPage onStartResearch={handleStartResearch} />;
    }
  };

  return (
    <div className="App">
      {renderApp()}
    </div>
  );
}

export default App;
