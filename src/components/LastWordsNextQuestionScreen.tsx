import React, { useState } from 'react';
import './LastWordsScreen.css';
import IMAGES from '../assets';

interface LastWordsNextQuestionScreenProps {
  onBackToLanding: () => void;
  onSolveCase: () => void;
}

const LastWordsNextQuestionScreen: React.FC<LastWordsNextQuestionScreenProps> = ({ onBackToLanding, onSolveCase }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const correctAnswer = 2; // Giả sử đáp án đúng là lựa chọn 3
  
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
      // Tiếp tục đến màn hình thành công
      setTimeout(() => {
        onSolveCase(); // Chuyển đến màn hình success
      }, 2000);
    }
  };

  return (
    <div className="last-words-screen">
      <div className="background-image" style={backgroundStyle}></div>
      <div className="last-words-container wide-container">
        <div className="logo-section">
          <button className="back-button" onClick={onBackToLanding}>
            ←
          </button>
          <h1 className="main-title">Vụ Án Lời Trăn Trối</h1>
        </div>

        <div className="question-box">
          <h2 className="question-title">Mẩu giấy ghi chú được tìm thấy có một thông điệp bí ẩn. Theo bạn, thông điệp này ám chỉ ai là hung thủ?</h2>
          
          <div className="options-list">
            <div 
              className={`option-item ${selectedOption === 0 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(0)}
            >
              <div className={`radio-button ${selectedOption === 0 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Người vợ</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 1 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(1)}
            >
              <div className={`radio-button ${selectedOption === 1 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Người con trai</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 2 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(2)}
            >
              <div className={`radio-button ${selectedOption === 2 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Người hàng xóm</div>
            </div>
            
            <div 
              className={`option-item ${selectedOption === 3 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(3)}
            >
              <div className={`radio-button ${selectedOption === 3 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Đối tác kinh doanh</div>
            </div>
          </div>

          {hasAnswered && !isCorrect && (
            <div className="error-message">
              Sai rồi! Hãy phân tích thông điệp trong mẩu giấy kỹ hơn.
            </div>
          )}

          {isCorrect && (
            <div className="success-message">
              <p>Chính xác! Người hàng xóm chính là hung thủ!</p>
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

export default LastWordsNextQuestionScreen;
