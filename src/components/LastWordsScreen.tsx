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
  // Hai đáp án đúng là "Biên bản khám nghiệm tử thi" và "Lời khai của Cao Quốc Bảo"
  const correctAnswers = [5, 6];
  
  // Sử dụng ảnh background từ assets
  const backgroundStyle = {
    backgroundImage: `url(${IMAGES.backgrounds.main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

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
    if (selectedOption !== null && correctAnswers.includes(selectedOption)) {
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
        <div className="app-header">
          <button className="app-back-button" onClick={onBackToLanding}>
            <span>←</span>
          </button>
          <h2>Vụ Án Lời Trăn Trối</h2>
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

            <div 
              className={`option-item ${selectedOption === 4 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(4)}
            >
              <div className={`radio-button ${selectedOption === 4 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Thư đe dọa</div>
            </div>

            <div 
              className={`option-item ${selectedOption === 5 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(5)}
            >
              <div className={`radio-button ${selectedOption === 5 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Biên bản khám nghiệm tử thi</div>
            </div>

            <div 
              className={`option-item ${selectedOption === 6 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(6)}
            >
              <div className={`radio-button ${selectedOption === 6 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Lời khai của Cao Quốc Bảo</div>
            </div>

            <div 
              className={`option-item ${selectedOption === 7 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(7)}
            >
              <div className={`radio-button ${selectedOption === 7 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Lời khai của Cao Đức Dương</div>
            </div>

            <div 
              className={`option-item ${selectedOption === 8 ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(8)}
            >
              <div className={`radio-button ${selectedOption === 8 ? 'selected' : ''}`}>
                <div className="radio-inner"></div>
              </div>
              <div className="option-text">Lời khai của Cao Thu Phương</div>
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
              Sai rồi! Hãy thử lại với bằng chứng khác.
            </div>
          )}

          {isCorrect && (
            <div className="success-message">
              <p>Chính xác! {selectedOption === 5 ? "Biên bản khám nghiệm tử thi" : "Lời khai của Cao Quốc Bảo"} là manh mối quan trọng!</p>
              <p>Chúc mừng bạn đã phá án thành công!</p>
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
