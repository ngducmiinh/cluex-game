import React, { useState, useEffect } from 'react';
import './LastWordsScreen.css';
import './LastWordsSuccessScreen.css';
import IMAGES from '../assets';

interface LastWordsSuccessScreenProps {
  onBackToLanding: () => void;
}

const LastWordsSuccessScreen: React.FC<LastWordsSuccessScreenProps> = ({ onBackToLanding }) => {
  // State cho việc hiển thị ảnh popup
  const [popupImage, setPopupImage] = useState<string | null>(null);
  // State để kiểm soát hiệu ứng confetti
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  
  // Sử dụng ảnh background từ assets
  const backgroundStyle = {
    backgroundImage: `url(${IMAGES.backgrounds.main})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  
  // Tạo hiệu ứng confetti khi component được render
  useEffect(() => {
    // Để hiệu ứng xuất hiện mượt mà sau khi component đã render
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="last-words-screen">
      <div className="background-image" style={backgroundStyle}></div>
      
      {/* Hiệu ứng confetti/băng rôn */}
      {showConfetti && (
        <div className="confetti-container">
          {/* Băng rôn thẳng */}
          {Array(30).fill(null).map((_, i) => (
            <div 
              key={`straight-${i}`} 
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: `hsl(${Math.floor(Math.random() * 3) * 120}, 100%, 60%)`,
                width: '8px',
                height: '25px'
              }}
            />
          ))}
          
          {/* Confetti hình tròn */}
          {Array(20).fill(null).map((_, i) => (
            <div 
              key={`circle-${i}`} 
              className="confetti confetti-circle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
              }}
            />
          ))}
          
          {/* Confetti hình sao */}
          {Array(15).fill(null).map((_, i) => (
            <div 
              key={`star-${i}`} 
              className="confetti confetti-star"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)`
              }}
            >
              ★
            </div>
          ))}
        </div>
      )}
      
      {/* Banner chúc mừng */}
      {showConfetti && (
        <div className="success-banner">
          <span>Chúc mừng! Bạn đã phá án thành công!</span>
        </div>
      )}
      
      <div className="last-words-container wide-container">
        <div className="logo-section">
          <h1 className="main-title">Vụ Án Lời Trăn Trối</h1>
        </div>

        <div className="question-box success-box">
          <h2 className="success-title">Chúc mừng bạn đã phá án "Vụ án Lời Trăn Trối" thành công!!!</h2>
          
          <div className="success-content">
            <p className="story-text">
              Người hàng xóm - ông Hoàng, đã lên kế hoạch giết hại nạn nhân vì một mâu thuẫn đất đai kéo dài nhiều năm. Trước khi qua đời, nạn nhân đã cố gắng để lại một manh mối bằng cách viết một mẩu giấy có vẻ như là lời trăn trối. Dòng chữ đầu tiên có vẻ như không liên quan: "Nơi hàng cây xanh, ánh sáng mặt trời". Tuy nhiên, nếu nhìn kỹ các chữ cái đầu tiên của mỗi từ sẽ tạo thành "NHXA", đó chính là từ viết tắt của "Người hàng xóm A". Nạn nhân không đủ thời gian để viết rõ ràng hơn, nhưng manh mối này đã giúp điều tra viên xác định được hung thủ chính là ông Hoàng - người hàng xóm sống ngay căn nhà thứ nhất bên cạnh.
            </p>
            <div className="evidence-images">
              <div className="evidence-image-container">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/lastwords/note.jpg`}
                  className="evidence-image"
                  onClick={() => setPopupImage(`${process.env.PUBLIC_URL}/images/lastwords/note.jpg`)}
                  alt="Mẩu giấy ghi chú của nạn nhân"
                />
                <p className="image-hint">Nhấn ảnh để xem rõ hơn</p>
              </div>
              
              <div className="evidence-image-container">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/lastwords/neighbor.jpg`}
                  className="evidence-image"
                  onClick={() => setPopupImage(`${process.env.PUBLIC_URL}/images/lastwords/neighbor.jpg`)}
                  alt="Bằng chứng người hàng xóm"
                />
                <p className="image-hint">Nhấn ảnh để xem rõ hơn</p>
              </div>
            </div>
            <button 
              className="continue-button enabled" 
              onClick={onBackToLanding}
              style={{ marginTop: '10px' }}
            >
              Quay lại trang chủ
            </button>
          </div>
        </div>
      </div>
      
      {/* Image Popup */}
      {popupImage && (
        <div className="image-popup-overlay" onClick={() => setPopupImage(null)}>
          <div className="image-popup-container">
            <img 
              src={popupImage} 
              alt="Bằng chứng phóng to" 
              className="image-popup"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="close-popup-button"
              onClick={() => setPopupImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LastWordsSuccessScreen;
