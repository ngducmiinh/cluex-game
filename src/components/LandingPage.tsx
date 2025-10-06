import React, { useState } from 'react';
import './LandingPage.css';
import IMAGES from '../assets';

interface LandingPageProps {
  onStartResearch: () => void;
  onStartSanGolf: () => void;
  onStartLastWords?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ 
  onStartResearch,
  onStartSanGolf,
  onStartLastWords
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption === 'nghien-cuu') {
      onStartResearch();
    } else if (selectedOption === 'san-golf') {
      onStartSanGolf();
    } else if (selectedOption === 'last-words' && onStartLastWords) {
      onStartLastWords();
    }
  };

  // Sử dụng ảnh background từ assets
  const backgroundStyle = {
    backgroundImage: `url(${IMAGES.backgrounds.main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="landing-page">
      {/* Chỉ sử dụng ảnh làm background, không có hiệu ứng khác */}
      <div className="background-image" style={backgroundStyle}></div>
      <div className="landing-container">
        <div className="logo-section">
          <div className="logo-circle">
            <img src={IMAGES.icons.logo} alt="ClueX Logo" className="logo-svg" />
          </div>
          <h1 className="main-title">Đáp án ClueX Game</h1>
        </div>

        <div className="info-box">
          <p className="info-text">
            Chọn hồ sơ bạn đã mua
          </p>
          
          <div className="options-list">
            <div className="option-item" onClick={() => handleOptionSelect('last-words')}>
              <div className={`radio-button ${selectedOption === 'last-words' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Lời Trăn Trối</span>
            </div>
            <div className="option-item" onClick={() => handleOptionSelect('san-golf')}>
              <div className={`radio-button ${selectedOption === 'san-golf' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Vụ án sân Golf</span>
            </div>
            <div className="option-item research-option" onClick={() => handleOptionSelect('nghien-cuu')}>
              <div className={`radio-button ${selectedOption === 'nghien-cuu' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-content">
                <span className="option-text">Trường học - Ký ức 2010</span>
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
