import React, { useState } from 'react';
import './GolfCaseScreen.css';
import IMAGES from '../assets';

interface GolfCaseScreenProps {
  onBackToLanding: () => void;
  onCorrectAnswer: () => void; // Sẽ được sử dụng để chuyển sang câu hỏi tiếp theo
}

const GolfCaseScreen: React.FC<GolfCaseScreenProps> = ({ 
  onBackToLanding,
  onCorrectAnswer
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowError(false);
  };

  const handleContinue = () => {
    if (selectedOption === 'ban-ghi-cuoc-goi') {
      onCorrectAnswer(); // Chuyển sang câu hỏi tiếp theo khi đáp án đúng
    } else {
      setShowError(true); // Hiển thị thông báo lỗi khi đáp án sai
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
          <h2 className="question-title">Bằng chứng nào giúp bạn tìm ra hung thủ?</h2>
          
          <div className="options-list">
            <div className="option-item" onClick={() => handleOptionSelect('bai-bao')}>
              <div className={`radio-button ${selectedOption === 'bai-bao' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Bài báo</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('anh-hien-truong')}>
              <div className={`radio-button ${selectedOption === 'anh-hien-truong' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Ảnh hiện trường</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('ban-ghi-cuoc-goi')}>
              <div className={`radio-button ${selectedOption === 'ban-ghi-cuoc-goi' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Bản ghi cuộc gọi với 113</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('thu-luat-su')}>
              <div className={`radio-button ${selectedOption === 'thu-luat-su' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Thư của luật sư</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('bao-cao-hien-truong')}>
              <div className={`radio-button ${selectedOption === 'bao-cao-hien-truong' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Báo cáo hiện trường</span>
            </div>
            
            <div className="option-item" onClick={() => handleOptionSelect('loi-khai')}>
              <div className={`radio-button ${selectedOption === 'loi-khai' ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">Lời khai của Park Tùng Lâm</span>
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

export default GolfCaseScreen;
