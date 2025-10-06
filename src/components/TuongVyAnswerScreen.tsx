import React, { useState } from 'react';
import './LastWordsScreen.css';
import IMAGES from '../assets';

interface TuongVyAnswerScreenProps {
  onBackToChat: () => void;
  onCorrectAnswer: () => void;
}

const TuongVyAnswerScreen: React.FC<TuongVyAnswerScreenProps> = ({ onBackToChat, onCorrectAnswer }) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  // Đáp án đúng là Phạm Tường Vy và Vũ Lê Đức Tùng
  const correctAnswers = [0, 2];
  
  // Sử dụng ảnh background từ assets
  const backgroundStyle = {
    backgroundImage: `url(${IMAGES.backgrounds.main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const handleOptionSelect = (optionIndex: number) => {
    // Toggle selection
    if (selectedOptions.includes(optionIndex)) {
      setSelectedOptions(selectedOptions.filter(idx => idx !== optionIndex));
    } else {
      setSelectedOptions([...selectedOptions, optionIndex]);
    }
    
    // Reset error state when selecting a new option
    if (hasAnswered) {
      setHasAnswered(false);
      setIsCorrect(false);
    }
  };

  const checkAnswer = () => {
    setHasAnswered(true);
    
    // Check if the selected options exactly match the correct answers
    const isExactMatch = 
      selectedOptions.length === correctAnswers.length && 
      correctAnswers.every(answer => selectedOptions.includes(answer)) &&
      selectedOptions.every(selected => correctAnswers.includes(selected));
    
    if (isExactMatch) {
      setIsCorrect(true);
      // Delay trước khi chuyển sang màn hình thành công
      setTimeout(() => {
        onCorrectAnswer();
      }, 2000);
    }
  };

  return (
    <div className="last-words-screen">
      <div className="background-image" style={backgroundStyle}></div>
      <div className="last-words-container wide-container">
        <div className="app-header">
          <button className="app-back-button" onClick={onBackToChat}>
            <span>←</span>
          </button>
          <h2>Trường học - Ký ức 2010</h2>
        </div>

        <div className="question-box">
          <h2 className="question-title">Hung thủ là ai?</h2>
          <p className="question-description">(Được chọn nhiều đáp án)</p>
          
          <div className="options-list">
            <div 
              className={`option-item ${selectedOptions.includes(0) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(0)}
            >
              <div className={`radio-button ${selectedOptions.includes(0) ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Phạm Tường Vy</div>
            </div>
            
            <div 
              className={`option-item ${selectedOptions.includes(1) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(1)}
            >
              <div className={`radio-button ${selectedOptions.includes(1) ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Nguyễn Quỳnh Anh</div>
            </div>
            
            <div 
              className={`option-item ${selectedOptions.includes(2) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(2)}
            >
              <div className={`radio-button ${selectedOptions.includes(2) ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Vũ Lê Đức Tùng</div>
            </div>
            
            <div 
              className={`option-item ${selectedOptions.includes(3) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(3)}
            >
              <div className={`radio-button ${selectedOptions.includes(3) ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Phạm Tiến Anh</div>
            </div>

            <div 
              className={`option-item ${selectedOptions.includes(4) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(4)}
            >
              <div className={`radio-button ${selectedOptions.includes(4) ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Lê Tiến Đạt</div>
            </div>

            <div 
              className={`option-item ${selectedOptions.includes(5) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(5)}
            >
              <div className={`radio-button ${selectedOptions.includes(5) ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Không ai cả, Quân tử vong do ngã cầu thang</div>
            </div>

            <div 
              className={`option-item ${selectedOptions.includes(6) ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(6)}
            >
              <div className={`radio-button ${selectedOptions.includes(6) ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Không ai cả, Quân tử vong do lên cơn đau tim</div>
            </div>
          </div>

          {hasAnswered && !isCorrect && (
            <div className="error-message">
              {selectedOptions.includes(0) && selectedOptions.includes(2) && selectedOptions.length > 2 ? 
                "Bạn đã tìm ra 2 hung thủ và cả người vô tội, đừng để người vô tội bị oan khuất. Hãy thử lại nhé!" :
                (selectedOptions.includes(0) || selectedOptions.includes(2)) && selectedOptions.length > 1 ?
                  "Bạn đã tìm đúng 1 hung thủ và người vô tội, đừng để người vô tội bị oan khuất. Hãy thử lại nhé!" :
                  (selectedOptions.includes(5) || selectedOptions.includes(6)) ?
                    "Hung thủ thành công thoát tội. Nạn nhân ra đi trong oan khuất. Hãy thử lại nhé!" :
                    "Bạn đã nghi ngờ người vô tội, đừng để người vô tội bị oan khuất. Hãy thử lại nhé!"}
            </div>
          )}

          {hasAnswered && isCorrect && (
            <div className="success-message">
              Chính xác! Phạm Tường Vy và Vũ Lê Đức Tùng là hai hung thủ.
            </div>
          )}

          <button 
            className={`continue-button ${selectedOptions.length > 0 ? 'enabled' : ''}`}
            onClick={checkAnswer}
            disabled={selectedOptions.length === 0}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default TuongVyAnswerScreen;
