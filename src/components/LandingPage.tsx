import React, { useState } from 'react';
import './LandingPage.css';

interface LandingPageProps {
  onStartResearch: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartResearch }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption === 'nghien-cuu') {
      onStartResearch();
    }
    // Handle other options if needed
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="logo-section">
          <div className="logo-circle">
            <img src="/images/icons/cluexicon.png" alt="ClueX Logo" className="logo-svg" />
          </div>
          <h1 className="main-title">Đáp án ClueX Game</h1>
        </div>

        <div className="info-box">
          <p className="info-text">
            Điền thông tin của bạn khi mua hàng và ăn tiếp tục để xem đáp án
          </p>
          
          <div className="options-list">
            <div className="option-item" onClick={() => handleOptionSelect('tran-troi')}>
              <div className={`radio-button ${selectedOption === 'tran-troi' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Lối tràn trôi</span>
            </div>
            <div className="option-item" onClick={() => handleOptionSelect('san-golf')}>
              <div className={`radio-button ${selectedOption === 'san-golf' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Vụ án sân golf</span>
            </div>
            <div className="option-item research-option" onClick={() => handleOptionSelect('nghien-cuu')}>
              <div className={`radio-button ${selectedOption === 'nghien-cuu' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-content">
                <span className="option-text">Nghiên cứu</span>
                <span className="option-subtitle">Chọn mục này để nhập mật khẩu giải đố của Big Case</span>
              </div>
            </div>
          </div>

          <button 
            className={`continue-button ${selectedOption ? 'enabled' : ''}`} 
            onClick={handleContinue}
            disabled={!selectedOption}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
