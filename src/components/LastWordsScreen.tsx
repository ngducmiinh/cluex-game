import React, { useState } from 'react';
import './LastWordsScreen.css';
import IMAGES from '../assets';

interface LastWordsScreenProps {
  onBackToLanding: () => void;
  onCorrectAnswer: () => void;
}

const LastWordsScreen: React.FC<LastWordsScreenProps> = ({ onBackToLanding, onCorrectAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const correctAnswer = 1; // Giả sử đáp án đúng là lựa chọn 1
  
  // Sử dụng ảnh background từ assets
  const backgroundStyle = {
    backgroundImage: `url(${IMAGES.backgrounds.main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
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

  return (
    <div className="last-words-screen">
      <div className="background-image" style={backgroundStyle}></div>
      <div className="last-words-container wide-container">
        <div className="logo-section">
          <button className="back-button" onClick={onBackToLanding}>
            ← Quay lại
          </button>
          <h1 className="main-title">Vụ Án Lời Trăn Trối</h1>
        </div>

        <div className="question-box">
          <h2 className="question-title">Vụ án bí ẩn về những lời trăn trối cuối cùng của nạn nhân. Bằng chứng nào có thể giúp bạn tìm ra hung thủ?</h2>
          
          <div className="options-list">
            <div 
              className={`option-item ${selectedOption === 0 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(0)}
            >
              <div className={`radio-button ${selectedOption === 0 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Bản ghi âm cuộc gọi cuối cùng</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 1 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(1)}
            >
              <div className={`radio-button ${selectedOption === 1 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Mẩu giấy ghi chú tìm thấy bên cạnh nạn nhân</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 2 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(2)}
            >
              <div className={`radio-button ${selectedOption === 2 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Lịch sử giao dịch ngân hàng</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 3 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(3)}
            >
              <div className={`radio-button ${selectedOption === 3 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Bản ghi camera an ninh</div>
            </div>
          </div>

          {hasAnswered && !isCorrect && (
            <div className="error-message">
              Sai rồi! Hãy thử lại với bằng chứng khác.
            </div>
          )}

          {isCorrect && (
            <div className="success-message">
              <p>Chính xác! Mẩu giấy ghi chú là manh mối quan trọng!</p>
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

export default LastWordsScreen;
