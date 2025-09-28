import React, { useState, useEffect } from 'react';
import './GolfCaseScreen.css';
import './GolfCaseSuccessScreen.css';
import IMAGES from '../assets';

interface GolfCaseSuccessScreenProps {
  onBackToLanding: () => void;
}

const GolfCaseSuccessScreen: React.FC<GolfCaseSuccessScreenProps> = ({ onBackToLanding }) => {
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
    <div className="golf-case-screen">
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
      
      <div className="golf-case-container wide-container">
        <div className="logo-section">
          <h1 className="main-title">Vụ Án Sân Golf</h1>
        </div>

        <div className="question-box success-box">
          <h2 className="success-title">Chúc mừng bạn đã phá án "Vụ án Sân Golf" thành công!!!</h2>
          
          <div className="success-content">
            <p className="story-text">
              Tú có động cơ mạnh mẽ và sâu sắc. Ông Tuấn đã chặt cây, gây ra vụ tai nạn làm hỏng chiếc xe Porsche cổ quý giá của Tú, cũng vô cùng quan trọng với bố của Tú, cái cây cũng như người bố đã luôn gắn liền với những ngày tháng của Tú. Và còn tồi tệ hơn vì Tú là một người đã ly hôn và bị xa lánh bởi người con. Cái không chỉ là tài sản vật chất mà còn là biểu tượng của hy vọng và niềm vui,cũng như đứa con trai và mỗi lần nó trở về ông đều cảm thấy rất hạnh phúc. Khi nó bị hủy hoại, mọi sự dồn nén của Tú đã bùng phát. Lời nói "Đó là tất cả nguồn sống và hy vọng của tao!" được nghe thấy trong cuộc cãi vã tại hiện trường, hoàn toàn phù hợp với câu chuyện của Tú.
            </p>
            <div className="evidence-images">
              <div className="evidence-image-container">
                <img 
                  src="/images/golfcase/ques1.jpg" 
                  className="evidence-image"
                  onClick={() => setPopupImage("/images/golfcase/ques1.jpg")}
                  alt="Bằng chứng - Bản ghi cuộc gọi với 113"
                />
                <p className="image-hint">Nhấn ảnh để xem rõ hơn ạ</p>
              </div>
              
              <div className="evidence-image-container">
                <img 
                  src="/images/golfcase/ques2.jpg" 
                  className="evidence-image"
                  onClick={() => setPopupImage("/images/golfcase/ques2.jpg")} 
                  alt="Bằng chứng - Dòng 14 trong bản ghi âm"
                />
                <p className="image-hint">Nhấn ảnh để xem rõ hơn ạ</p>
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

export default GolfCaseSuccessScreen;
