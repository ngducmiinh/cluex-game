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
    const showTimer = setTimeout(() => {
      setShowConfetti(true);
      
      // Để confetti tiếp tục rơi trong 14 giây
      const hideConfettiTimer = setTimeout(() => {
        setShowConfetti(false);
      }, 14000);
      
      return () => {
        clearTimeout(hideConfettiTimer);
      };
    }, 300);
    
    return () => {
      clearTimeout(showTimer);
    };
  }, []);  // Không có dependency để tránh re-render

  return (
    <div className="last-words-screen">
      <div className="background-image" style={backgroundStyle}></div>
      
      {/* Hiệu ứng confetti */}
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
      )}      <div className="last-words-container wide-container">
        <div className="app-header">
          <button className="app-back-button" onClick={onBackToLanding}>
            <span>←</span>
          </button>
          <h2>Vụ Án Lời Trăn Trối</h2>
        </div>

        <div className="question-box success-box">
          <h2 className="success-title">Chúc mừng bạn đã phá án "Vụ án Lời Trăn Trối" thành công!!!</h2>
          
          <div className="success-content">
            <p className="story-text">
Cao Quốc Bảo chính là hung thủ. Bảo và Chi tranh cãi khi gặp nhau ở biệt thự, trong lúc căng thẳng, Chi đã vô tình tiết lộ việc để lại di thư trước khi đến. Cao Quốc Bảo khi ấy đã rất kích động, cùng với những bất mãn khi đã có suy nghĩ Chi lấy hết những gì đáng ra nên thuộc về hắn. 1 phút bốc đồng, 1 đời bốc cứt, Bảo đã ra tay sát hại Chi... Hắn hoảng loạn và sợ hãi khi nhận ra mình đã gây ra án mạng, Bảo bỏ chạy khỏi biệt thự như để chạy trốn hiện thực. Khi hắn ta tỉnh táo trở lại thì đã không còn kịp để trở lại hiện trường. Bạn nghĩ hắn ta sẽ hối hận vì đã gay ra tội lỗi hay sẽ hối hận vì đã không xử lý sạch sẽ?             </p>
            <div className="evidence-images">
              <div className="evidence-image-container">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/lastwords/1.png`}
                  className="evidence-image"
                  onClick={() => setPopupImage(`${process.env.PUBLIC_URL}/images/lastwords/1.png`)}
                  alt="Biên bản khám nghiệm tử thi"
                />
                <p className="image-hint">Nhấn ảnh để xem rõ hơn</p>
              </div>
              
              <div className="evidence-image-container">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/lastwords/2.png`}
                  className="evidence-image"
                  onClick={() => setPopupImage(`${process.env.PUBLIC_URL}/images/lastwords/2.png`)}
                  alt="Lời khai của Cao Quốc Bảo"
                />
                <p className="image-hint">Nhấn ảnh để xem rõ hơn</p>
              </div>

              <div className="evidence-image-container">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/lastwords/3.png`}
                  className="evidence-image"
                  onClick={() => setPopupImage(`${process.env.PUBLIC_URL}/images/lastwords/3.png`)}
                  alt="Mẩu giấy ghi chú"
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
            <div className="popup-caption-container">
              {popupImage.includes('1.png') && (
                <p className="popup-caption">Cao Thu Phương là giáo viên dạy văn, không sai lỗi dấu câu cơ bản</p>
              )}
              {popupImage.includes('2.png') && (
                <p className="popup-caption">Khám nghiệm tử thi chứng minh hung thủ thuận tay trái, tay thuận có lực mạnh hơn tay không thuận.</p>
              )}
              {popupImage.includes('3.png') && (
                <p className="popup-caption small-caption">Người duy nhất dùng tay trái</p>
              )}
            </div>
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
