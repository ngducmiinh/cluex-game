import React, { useState } from 'react';
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

type PhoneScreen = 'lock' | 'home' | 'messages' | 'phone' | 'camera' | 'photos' | 'weather' | 'notes' | 'calculator';

function App() {
  const [currentScreen, setCurrentScreen] = useState<PhoneScreen>('lock');

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

  return (
    <div className="App">
      <div className="phone-container">
        <div className="phone-screen">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}

export default App;
