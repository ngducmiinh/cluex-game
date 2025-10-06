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
  const correctPassword = '103117';

  const handleNumberPress = (num: string) => {
    const newPassword = password + num;
    setPassword(newPassword);
    setShowError(false);
    
    // Limit to reasonable password length
    if (newPassword.length >= 10) {
      showErrorMessage('Mật khẩu quá dài');
    }
  };
  
  const showErrorMessage = (message?: string) => {
    setShowError(true);
    setPassword('');
    
    // Add vibration if supported
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
    
    // Automatically hide error after 2 seconds
    setTimeout(() => {
      setShowError(false);
    }, 2000);
  };

  const handleContinue = () => {
    if (password === correctPassword) {
      onUnlock();
    } else {
      showErrorMessage();
    }
  };

  const handleDelete = () => {
    setPassword(prev => prev.slice(0, -1));
    setShowError(false);
  };



  const handleHint = () => {
    setShowHint(true);
  };

  return (
    <div className="lock-screen">
      <div className="lock-status-container">
        <div className="lock-status-pill">
        </div>
      </div>

      <div className="lock-content">
        <h2 className="password-title">Mật khẩu của bạn</h2>

        <div className="password-display">
          <div className={`password-input-container ${showError ? 'error-border' : ''}`}>
            <span className="password-text">
              {showPassword ? password : password && Array.from(password).map((_, index) => '•').join('')}
            </span>
            <button 
              className="toggle-visibility-btn" 
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
              </svg>
            </button>
          </div>
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
              <span className="number">{num}</span>
              {num === 2 && <div className="letter-hint">A B C</div>}
              {num === 3 && <div className="letter-hint">D E F</div>}
              {num === 4 && <div className="letter-hint">G H I</div>}
              {num === 5 && <div className="letter-hint">J K L</div>}
              {num === 6 && <div className="letter-hint">M N O</div>}
              {num === 7 && <div className="letter-hint">P Q R S</div>}
              {num === 8 && <div className="letter-hint">T U V</div>}
              {num === 9 && <div className="letter-hint">W X Y Z</div>}
            </button>
          ))}
          <div className="keypad-button empty"></div>
          <button 
            className="keypad-button"
            onClick={() => handleNumberPress('0')}
          >
            <span className="number">0</span>
          </button>
          <button 
            className="keypad-button delete-button"
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
