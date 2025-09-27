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
  const [showPassword, setShowPassword] = useState(false);
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
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <h2 className="lock-title">Mật khẩu của bạn</h2>
        </div>

        <div className="password-input-container">
          <input 
            type={showPassword ? "text" : "password"}
            className="password-text-field"
            value={password}
            readOnly
            placeholder=""
          />
          <button 
            className="toggle-visibility-btn" 
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <span className="visibility-icon">👁️</span>
            ) : (
              <span className="visibility-icon">👁️‍🗨️</span>
            )}
          </button>
        </div>
        
        {showError && (
          <div className="error-message">Sai mật khẩu. Vui lòng thử lại.</div>
        )}

        <div className="keypad-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button 
              key={num} 
              className="keypad-button"
              onClick={() => handleNumberPress(num.toString())}
            >
              {num}
              {num === 2 && <div className="letter-hint">ABC</div>}
              {num === 3 && <div className="letter-hint">DEF</div>}
              {num === 4 && <div className="letter-hint">GHI</div>}
              {num === 5 && <div className="letter-hint">JKL</div>}
              {num === 6 && <div className="letter-hint">MNO</div>}
              {num === 7 && <div className="letter-hint">PQRS</div>}
              {num === 8 && <div className="letter-hint">TUV</div>}
              {num === 9 && <div className="letter-hint">WXYZ</div>}
            </button>
          ))}
          <div className="keypad-button empty"></div>
          <button 
            className="keypad-button"
            onClick={() => handleNumberPress('0')}
          >
            0
            <div className="letter-hint">_</div>
          </button>
          <button 
            className="keypad-button delete"
            onClick={handleDelete}
          >
            ⌫
          </button>
        </div>

        <div className="action-buttons">
          <button className="button secondary" onClick={handleHint}>
            Gợi ý
          </button>
          <button 
            className="button primary"
            onClick={handleContinue}
            disabled={password.length === 0}
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
