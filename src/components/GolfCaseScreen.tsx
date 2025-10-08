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
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const correctAnswer = 2; // Đáp án đúng là 'ban-ghi-cuoc-goi', index 2
  
  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    // Reset error state when selecting a new option
    if (hasAnswered) {
      setHasAnswered(false);
      setIsCorrect(false);
    }
  };

  const checkAnswer = () => {
    setHasAnswered(true);
    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
      // Delay trước khi chuyển sang câu hỏi tiếp theo
      setTimeout(() => {
        onCorrectAnswer();
      }, 2000);
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
        <div className="app-header">
          <button className="app-back-button" onClick={onBackToLanding}>
            <span>←</span>
          </button>
          <h2>Vụ Án Sân Golf</h2>
        </div>

        <div className="question-box">
          <h2 className="question-title">Bằng chứng nào giúp bạn tìm ra hung thủ?</h2>
          
          <div className="options-list">
            <div 
              className={`option-item ${selectedOption === 0 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(0)}
            >
              <div className={`radio-button ${selectedOption === 0 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Bài báo</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 1 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(1)}
            >
              <div className={`radio-button ${selectedOption === 1 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Ảnh hiện trường</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 2 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(2)}
            >
              <div className={`radio-button ${selectedOption === 2 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Bản ghi cuộc gọi với 113</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 3 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(3)}
            >
              <div className={`radio-button ${selectedOption === 3 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Thư của luật sư</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 4 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(4)}
            >
              <div className={`radio-button ${selectedOption === 4 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Báo cáo hiện trường</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 5 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(5)}
            >
              <div className={`radio-button ${selectedOption === 5 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Lời khai của Park Tùng Lâm</div>
            </div>
          </div>
          
          {hasAnswered && !isCorrect && (
            <div className="error-message" style={{
              textAlign: 'center',
              margin: '20px auto',
              padding: '15px',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              display: 'block'
            }}>
              Đáp án chưa đúng, vui lòng chọn lại!
            </div>
          )}

          {isCorrect && (
            <div className="success-message">
              <p>Chính xác! Bản ghi cuộc gọi chính là manh mối quan trọng!</p>
              <p>Đang chuyển đến câu hỏi tiếp theo...</p>
            </div>
          )}

          <button 
            className={`continue-button ${selectedOption !== null ? 'enabled' : ''}`}
            onClick={selectedOption !== null ? checkAnswer : undefined}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default GolfCaseScreen;
