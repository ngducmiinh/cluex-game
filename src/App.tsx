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
import GolfCaseScreen from './components/GolfCaseScreen';
import GolfCaseNextQuestionScreen from './components/GolfCaseNextQuestionScreen';
import GolfCaseSuccessScreen from './components/GolfCaseSuccessScreen';
import './App.css';

// Thêm các loại màn hình ứng dụng mới
type AppScreen = 'landing' | 'phone' | 'tran-troi' | 'san-golf' | 'san-golf-next-question' | 'san-golf-success';
type PhoneScreen = 'lock' | 'home' | 'messages' | 'phone' | 'camera' | 'photos' | 'weather' | 'notes' | 'calculator';

function App() {
  const [currentApp, setCurrentApp] = useState<AppScreen>('landing');
  const [currentScreen, setCurrentScreen] = useState<PhoneScreen>('lock');

  // Xử lý chọn "Nghiên cứu" - Big Case
  const handleStartResearch = () => {
    setCurrentApp('phone');
    setCurrentScreen('lock');
  };
  
  // Xử lý chọn "Lối trần trời"
  const handleStartTranTroi = () => {
    setCurrentApp('tran-troi');
  };
  
  // Xử lý chọn "Vụ án sân Golf"
  const handleStartSanGolf = () => {
    setCurrentApp('san-golf');
  };
  
  // Xử lý khi trả lời đúng câu hỏi đầu tiên của Vụ án sân Golf
  const handleGolfCorrectAnswer = () => {
    setCurrentApp('san-golf-next-question');
  };
  
  // Xử lý khi phá án thành công
  const handleGolfSolveCase = () => {
    setCurrentApp('san-golf-success');
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
        return <LandingPage 
          onStartResearch={handleStartResearch}
          onStartTranTroi={handleStartTranTroi}
          onStartSanGolf={handleStartSanGolf}
        />;
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
      case 'tran-troi':
        return (
          <div className="case-container">
            <button className="back-to-landing-button" onClick={handleBackToLanding}>
              ← Quay lại trang chủ
            </button>
            <div className="case-content">
              <h1>Lời Trăn Trối</h1>
              <p>Nội dung đáp án cho Lời Trăn Trối sẽ được hiển thị ở đây.</p>
              <p>Hồ sơ này đang được chuẩn bị...</p>
            </div>
          </div>
        );
      case 'san-golf':
        return (
          <GolfCaseScreen 
            onBackToLanding={handleBackToLanding}
            onCorrectAnswer={handleGolfCorrectAnswer}
          />
        );
        
      case 'san-golf-next-question':
        return (
          <GolfCaseNextQuestionScreen 
            onBackToLanding={handleBackToLanding}
            onSolveCase={handleGolfSolveCase}
          />
        );
        
      case 'san-golf-success':
        return (
          <GolfCaseSuccessScreen 
            onBackToLanding={handleBackToLanding}
          />
        );
      default:
        return <LandingPage 
          onStartResearch={handleStartResearch}
          onStartTranTroi={handleStartTranTroi}
          onStartSanGolf={handleStartSanGolf}
        />;
    }
  };

  return (
    <div className="App">
      {renderApp()}
    </div>
  );
}

export default App;
