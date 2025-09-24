import React, { useState } from 'react';
import './LockScreen.css';
import PeriodicTableHint from './PeriodicTableHint';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const correctPassword = '123456';

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const handleNumberPress = (num: string) => {
    if (password.length < 6) {
      setPassword(prev => prev + num);
      setShowError(false);
    }
  };

  const handleDelete = () => {
    setPassword(prev => prev.slice(0, -1));
    setShowError(false);
  };

  const handleContinue = () => {
    if (password === correctPassword) {
      onUnlock();
    } else {
      setShowError(true);
      setPassword('');
    }
  };

  const handleHint = () => {
    setShowHint(true);
  };

  const renderPasswordDots = () => {
    return Array.from({ length: 6 }, (_, index) => (
      <div 
        key={index} 
        className={`password-dot ${index < password.length ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <div className="lock-screen">
      <div className="status-bar">
        <span className="time">{getCurrentTime()}</span>
        <div className="status-icons">
          <span className="signal">📶</span>
          <span className="wifi">📶</span>
          <span className="battery">100%</span>
        </div>
      </div>

      <div className="lock-content">
        <div className="lock-header">
          <h2 className="lock-title">Nhập mật khẩu</h2>
          {showError && (
            <p className="error-message">Mật khẩu không đúng</p>
          )}
        </div>

        <div className="password-input">
          <div className="password-dots">
            {renderPasswordDots()}
          </div>
        </div>

        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              className="keypad-btn number"
              onClick={() => handleNumberPress(num.toString())}
            >
              {num}
            </button>
          ))}
          <button 
            className="keypad-btn hint"
            onClick={handleHint}
          >
            Gợi ý
          </button>
          <button
            className="keypad-btn number"
            onClick={() => handleNumberPress('0')}
          >
            0
          </button>
          <button
            className="keypad-btn delete"
            onClick={handleDelete}
          >
            ⌫
          </button>
        </div>

        <div className="action-buttons">
          <button 
            className="continue-btn"
            onClick={handleContinue}
            disabled={password.length !== 6}
          >
            Tiếp tục
          </button>
        </div>
      </div>

      {showHint && (
        <PeriodicTableHint onClose={() => setShowHint(false)} />
      )}
    </div>
  );
};

export default LockScreen;
