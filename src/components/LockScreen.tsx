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
        <div className="app-header">
          <h2>Nhập mật mã</h2>
        </div>

        <div className={`password-display ${showError ? 'password-error' : ''}`}>
          {password && Array.from(password).map((_, index) => (
            <span key={index} className={`password-char ${showError ? 'error' : ''}`}>•</span>
          ))}
          <span className="password-cursor"></span>
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
