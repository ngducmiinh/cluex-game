import React from 'react';
import './GolfCaseScreen.css';
import IMAGES from '../assets';

interface GolfCaseNextScreenProps {
  onBackToLanding: () => void;
}

// Lưu ý: Component này hiện được thay thế bởi GolfCaseNextQuestionScreen
// và được giữ lại chỉ để tương thích ngược
const GolfCaseNextScreen: React.FC<GolfCaseNextScreenProps> = ({ onBackToLanding }) => {
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
          <h2 className="question-title">Chính xác!</h2>
          
          <div className="success-message">
            <p>Bạn đã trả lời đúng! Đáp án là "Bản ghi cuộc gọi với 113".</p>
            <p>Phần tiếp theo của câu đố đang được chuẩn bị.</p>
            <p>Hãy quay lại sau nhé!</p>
          </div>

          <button 
            className="continue-button enabled" 
            onClick={onBackToLanding}
            style={{ background: '#7e3118' }}
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default GolfCaseNextScreen;
