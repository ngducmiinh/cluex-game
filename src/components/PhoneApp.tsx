import React, { useState } from 'react';
import './PhoneApp.css';

interface PhoneAppProps {
  onBack: () => void;
}

const PhoneApp: React.FC<PhoneAppProps> = ({ onBack }) => {
  const [callState, setCallState] = useState<'none' | 'calling' | 'busy'>('none');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCallClick = () => {
    if (phoneNumber.trim()) {
      setCallState('calling');
      // After 3 seconds of "calling", show busy state
      setTimeout(() => {
        setCallState('busy');
        // After 2 more seconds, close the call screen
        setTimeout(() => {
          setCallState('none');
          setPhoneNumber('');
        }, 2000);
      }, 3000);
    }
  };

  const handleNumberInput = (number: string) => {
    if (phoneNumber.length < 15) {
      setPhoneNumber(phoneNumber + number);
    }
  };

  const handleDelete = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const dialPad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
  ];

  return (
    <div className="phone-app">
      <div className="app-header">
        <button className="app-back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <h2>Phone</h2>
      </div>

      <div className="phone-content">
        <div className="phone-display">
          <input 
            type="text" 
            value={phoneNumber}
            readOnly
            placeholder="Enter phone number"
            className="phone-input"
          />
        </div>

        <div className="dial-pad">
          {dialPad.map((row, rowIndex) => (
            <div key={rowIndex} className="dial-row">
              {row.map((num) => (
                <button
                  key={num}
                  className="dial-button"
                  onClick={() => handleNumberInput(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="phone-controls">
          <button className="delete-button" onClick={handleDelete}>
            ⌫
          </button>
          <button 
            className="call-button" 
            onClick={handleCallClick}
            disabled={!phoneNumber.trim()}
          >
            📞
          </button>
        </div>
      </div>

      {callState !== 'none' && (
        <div className="call-screen">
          <div className="call-interface">
            <div className="caller-info">
              <div className="caller-avatar">
                📞
              </div>
              <h2 className="caller-name">{phoneNumber}</h2>
              <div className="call-status">
                {callState === 'calling' && (
                  <>
                    <div className="calling-animation">
                      <div className="pulse-ring"></div>
                      <div className="pulse-ring pulse-ring-delay-1"></div>
                      <div className="pulse-ring pulse-ring-delay-2"></div>
                    </div>
                    <p>Đang gọi...</p>
                  </>
                )}
                {callState === 'busy' && (
                  <p className="busy-message">Người dùng đang bận</p>
                )}
              </div>
            </div>
            <div className="call-actions">
              <button 
                className="end-call-button" 
                onClick={() => setCallState('none')}
              >
                📞
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneApp;
