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
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const correctAnswer = 5; // Đáp án đúng là '14', index 5
  
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
      // Delay trước khi chuyển sang màn hình phá án thành công
      setTimeout(() => {
        onSolveCase();
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
        <div className="logo-section">
          <button className="back-button" onClick={onBackToLanding}>
            ←
          </button>
          <h1 className="main-title">Vụ Án Sân Golf</h1>
        </div>

        <div className="question-box">
          <h2 className="question-title">Dòng số mấy trong bản ghi âm chứa manh mối cần thiết?</h2>
          
          <div className="options-list">
            <div 
              className={`option-item ${selectedOption === 0 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(0)}
            >
              <div className={`radio-button ${selectedOption === 0 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">2</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 1 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(1)}
            >
              <div className={`radio-button ${selectedOption === 1 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">4</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 2 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(2)}
            >
              <div className={`radio-button ${selectedOption === 2 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">5</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 3 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(3)}
            >
              <div className={`radio-button ${selectedOption === 3 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">8</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 4 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(4)}
            >
              <div className={`radio-button ${selectedOption === 4 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">10</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 5 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(5)}
            >
              <div className={`radio-button ${selectedOption === 5 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">14</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 6 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(6)}
            >
              <div className={`radio-button ${selectedOption === 6 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">15</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 7 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(7)}
            >
              <div className={`radio-button ${selectedOption === 7 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">18</div>
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
              <p>Chính xác! Dòng 14 chứa manh mối quan trọng!</p>
              <p>Đang chuyển đến màn hình kết quả...</p>
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

export default GolfCaseNextQuestionScreen;
