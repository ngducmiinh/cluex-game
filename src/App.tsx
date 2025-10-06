import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LockScreen from './components/LockScreen';
import HomeScreen from './components/HomeScreen';
import MessagesApp from './components/MessagesApp';
import PhoneApp from './components/PhoneApp';
import CameraApp from './components/CameraApp';
import PhotosApp from './components/PhotosApp';
import WeatherApp from './components/WeatherApp';
import CalculatorApp from './components/CalculatorApp';
import GolfCaseScreen from './components/GolfCaseScreen';
import GolfCaseNextQuestionScreen from './components/GolfCaseNextQuestionScreen';
import GolfCaseSuccessScreen from './components/GolfCaseSuccessScreen';
import LastWordsScreen from './components/LastWordsScreen';
// LastWordsNextQuestionScreen removed - skipping to success directly
import LastWordsSuccessScreen from './components/LastWordsSuccessScreen';
import TuongVyAnswerScreen from './components/TuongVyAnswerScreen';
import TuongVySuccessScreen from './components/TuongVySuccessScreen';
import './App.css';
import './components/AppHeaderFix.css'; // CSS để fix position cho các headers trong apps

// Thêm các loại màn hình ứng dụng mới
type AppScreen = 'landing' | 'phone' | 'san-golf' | 'san-golf-next-question' | 'san-golf-success' | 'last-words' | 'last-words-next-question' | 'last-words-success' | 'tuong-vy-answer' | 'tuong-vy-success';
type PhoneScreen = 'lock' | 'home' | 'messages' | 'phone' | 'camera' | 'photos' | 'weather' | 'calculator';

function App() {
  const [currentApp, setCurrentApp] = useState<AppScreen>('landing');
  const [currentScreen, setCurrentScreen] = useState<PhoneScreen>('lock');

  // Xử lý chọn "Nghiên cứu" - Big Case
  const handleStartResearch = () => {
    setCurrentApp('phone');
    setCurrentScreen('lock');
  };
  
  // Xử lý chọn "Vụ án sân Golf"
  const handleStartSanGolf = () => {
    setCurrentApp('san-golf');
  };
  
  // Xử lý chọn "Lời Trăn Trối"
  const handleStartLastWords = () => {
    setCurrentApp('last-words');
  };
  
  // Xử lý khi trả lời đúng câu hỏi đầu tiên của Vụ án sân Golf
  const handleGolfCorrectAnswer = () => {
    setCurrentApp('san-golf-next-question');
  };
  
  // Xử lý khi phá án thành công
  const handleGolfSolveCase = () => {
    setCurrentApp('san-golf-success');
  };
  
  // Xử lý khi trả lời đúng câu hỏi của Lời Trăn Trối (trực tiếp đến màn hình thành công)
  const handleLastWordsCorrectAnswer = () => {
    setCurrentApp('last-words-success');
  };
  
  // handleLastWordsSolveCase removed - skipping to success directly

  // Xử lý khi chuyển sang màn hình câu đố Tường Vy
  const handleShowTuongVyAnswer = () => {
    setCurrentApp('tuong-vy-answer');
  };

  // Xử lý khi trả lời đúng câu hỏi của Tường Vy
  const handleTuongVyCorrectAnswer = () => {
    setCurrentApp('tuong-vy-success');
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
        return <MessagesApp onBack={handleBackToHome} onShowTuongVyAnswer={handleShowTuongVyAnswer} />;
      case 'phone':
        return <PhoneApp onBack={handleBackToHome} />;
      case 'camera':
        return <CameraApp onBack={handleBackToHome} />;
      case 'photos':
        return <PhotosApp onBack={handleBackToHome} />;
      case 'weather':
        return <WeatherApp onBack={handleBackToHome} />;
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
          onStartSanGolf={handleStartSanGolf}
          onStartLastWords={handleStartLastWords}
        />;
      case 'phone':
        return (
          <div className="phone-app-container">
            {currentScreen === 'lock' && (
              <button className="back-to-landing-button" onClick={handleBackToLanding}>
                Quay lại trang chủ
              </button>
            )}
            <div className="phone-container">
              <div className="phone-screen">
                {renderScreen()}
              </div>
            </div>
          </div>
        );

      case 'last-words':
        return (
          <LastWordsScreen 
            onBackToLanding={handleBackToLanding}
            onCorrectAnswer={handleLastWordsCorrectAnswer}
          />
        );
        
      // Case 'last-words-next-question' removed - skipping to success directly
        
      case 'last-words-success':
        return (
          <LastWordsSuccessScreen 
            onBackToLanding={handleBackToLanding}
          />
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
      case 'tuong-vy-answer':
        return (
          <TuongVyAnswerScreen 
            onBackToChat={() => {
              setCurrentApp('phone');
              setCurrentScreen('messages');
            }}
            onCorrectAnswer={handleTuongVyCorrectAnswer}
          />
        );
      case 'tuong-vy-success':
        return (
          <TuongVySuccessScreen 
            onBackToLanding={handleBackToLanding}
          />
        );
      default:
        return <LandingPage 
          onStartResearch={handleStartResearch}
          onStartSanGolf={handleStartSanGolf}
          onStartLastWords={handleStartLastWords}
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
