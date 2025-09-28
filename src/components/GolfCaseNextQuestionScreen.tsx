import React, { useState } from 'react';
import './GolfCaseScreen.css';
import IMAGES from '../assets';

interface GolfCaseNextQuestionScreenProps {
  onBackToLanding: () => void;
  onSolveCase: () => void; // Thêm prop để xử lý khi phá án thành công
}

const GolfCaseNextQuestionScreen: React.FC<GolfCaseNextQuestionScreenProps> = ({ 
  onBackToLanding,
  onSolveCase
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowError(false);
  };

  const handleContinue = () => {
    if (selectedOption === '14') {
      onSolveCase(); // Chuyển đến màn hình phá án thành công
    } else {
      setShowError(true); // Hiển thị thông báo lỗi khi chọn sai
    }
  };

  // Sử dụng ảnh background từ assets
  const backgroundStyle = {
    backgroundImage: `url(${IMAGES.backgrounds.main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="golf-case-screen">
      <div className="background-image" style={backgroundStyle}></div>
      <div className="golf-case-container">
        <div className="logo-section">
          <button className="back-button" onClick={onBackToLanding}>
            ← Quay lại
          </button>
          <h1 className="main-title">Vụ Án Sân Golf</h1>
        </div>

        <div className="question-box">
          <h2 className="question-title">Dòng số mấy trong bản ghi âm chứa manh mối cần thiết?</h2>
          
          <div className="options-list">
            <div className="option-item" onClick={() => handleOptionSelect('2')}>
              <div className={`radio-button ${selectedOption === '2' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">2</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('4')}>
              <div className={`radio-button ${selectedOption === '4' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">4</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('5')}>
              <div className={`radio-button ${selectedOption === '5' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">5</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('8')}>
              <div className={`radio-button ${selectedOption === '8' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">8</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('10')}>
              <div className={`radio-button ${selectedOption === '10' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">10</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('14')}>
              <div className={`radio-button ${selectedOption === '14' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">14</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('15')}>
              <div className={`radio-button ${selectedOption === '15' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">15</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('18')}>
              <div className={`radio-button ${selectedOption === '18' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">18</span>
            </div>
          </div>
          
          {showError && (
            <div className="error-message">
              Đáp án chưa đúng, vui lòng chọn lại!
            </div>
          )}

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

export default GolfCaseNextQuestionScreen;
