import React, { useState, useEffect } from 'react';
import './LastWordsScreen.css';
import './LastWordsSuccessScreen.css';
import IMAGES from '../assets';

interface TuongVySuccessScreenProps {
  onBackToLanding: () => void;
}

const TuongVySuccessScreen: React.FC<TuongVySuccessScreenProps> = ({ onBackToLanding }) => {
  // We no longer need the popup image state since we're not showing images
  // const [popupImage, setPopupImage] = useState<string | null>(null);
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
          <h2>Vụ Án Tường Vy</h2>
        </div>

        <div className="question-box success-box">
          <h2 className="success-title">Chúc mừng bạn đã phá án thành công!!!</h2>
          
          <div className="success-content">
            <div className="story-text" style={{ textAlign: 'left', lineHeight: '1.6' }}>
              <p>Chúc mừng bạn đã đến được đây, thám tử. Dựa trên tất cả các bằng chứng đã thu thập và phân tích, chúng ta có thể kết luận rằng hung thủ của vụ án này không ai khác chính là Tường Vy và Vũ Lê Đức Tùng. Nhưng liệu họ có thật sự có ý định sát hại bạn học ngay tại ngôi trường này?</p>
              
              <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#d9534f' }}>1. Động cơ và Kế hoạch</h3>
              <p>Cả Tường Vy, Quỳnh Anh và Tùng đều biết chuyện Quân bị gạch tên khỏi đội tham gia nghiên cứu dự án bởi Tường Vy là kẻ đầu xỏ, kéo theo Tùng, còn Quỳnh Anh mãi về sau mới biết. Thầy Đạt – người hướng dẫn và chỉ đạo nhóm nghiên cứu cũng biết điều này nhưng biết mình không so được với gia đình của Tường Vy nên lại đành ngậm bồ hòn làm ngọt. Mục đích của việc gạch tên này là vì mọi người đã quá chán ghét thái độ của Quân, càng về sau Quân càng chẳng coi ai ra gì, và vì giải thưởng cùng các phần thưởng và chế độ quá tốt, lại chỉ có một suất cho người đứng đầu trong nghiên cứu, lòng tham của ai cũng lớn.</p>
              
              <p>Ban đầu, Tường Vy và Tùng chỉ muốn làm Quân bất tỉnh để có thời gian xóa tên cậu khỏi dự án và tiêu hủy lá thư tố cáo. Động cơ của họ xuất phát từ:</p>
              
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li><strong>Tham vọng của Vy:</strong> Vy chịu áp lực rất lớn từ gia đình, cô đã bị ràng buộc bới hình tượng con ngoan, trò giỏi, tài sắc vẹn toàn trong mắt mọi người, phải đạt giải Nhất để không phụ lòng mong đợi. Cô lo sợ việc Quân tố cáo sẽ hủy hoại tương lai của mình.</li>
                <li><strong>Sự mê muội của Tùng:</strong> Tùng, vì cũng không thích Quân từ rất lâu rồi, lại thêm giải thưởng cùng các phần thưởng và chế độ quá tốt nên khi nghe việc Vy định gạch tên Quân đi cũng đồng ý, chỉ là không ngờ Quân lại định gom bằng chứng và nộp thư tố cáo bọn họ nên khi nghe Vy, Tùng đã đồng ý giúp cô thực hiện kế hoạch này bằng cách sử dụng thuốc an thần của mẹ để bỏ vào cà phê của Quân.</li>
              </ul>
              
              <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#d9534f' }}>2. Phương thức gây án</h3>
              <p>- Khi Tường Vy nhận tin nhắn của Quân, cô đã ngay lập tức nảy ra ý định bỏ thuốc Quân rồi tranh thủ xóa hết dữ liệu và thư tố cáo. Cùng với đó Vy đã hỏi thăm Tiến Anh về thời gian Quân đến trường để ra tay. Nhưng Vy cũng biết sức mình có hạn và Vy cũng không thể hi sinh một mình nên đã nói chuyện này với Tùng và Vy chắc chắn Tùng sẽ không từ chối việc này vì hai bạn đã chơi thân nhau rất lâu, Vy cũng biết Tùng rất quan trọng giải thưởng này, cũng không kém mình là mấy. Tóm lại, bắt nguồn từ lòng tham của cả Vy và Tùng.</p>
              
              <p>- Vy không liên lạc được với Quân nhưng đã hỏi thăm qua Tiến Anh, Tiến Anh không nghi ngờ gì về việc Vy hỏi nên đã tiết lộ thời gian Quân đến trường. Cô biết không thể chậm trễ hơn nên đã bảo Tùng triển khai theo kế hoạch đã bàn trước đó là bỏ thuốc vào thứ gì đó mời Quân uống để giải hòa, sau đó tranh thủ các khoảng thời gian khác nhau và các địa điểm không có cam hoặc khuất cam để thực hiện các hành động trong kế hoạch mà vẫn có đủ chứng cứ ngoại phạm. Vy đã lẻn ra khỏi nhà theo con đường vòng không có cam.</p>
              
              <p>- Điều Vy và Tùng không ngờ là Quân bị lên cơn đau tim do uống phải cafe chứa thuốc an thần, khi Vy và Tùng phát hiện ra thì đã quá muộn. Cả 2 đều nhận thức được hành động của bản thân</p>
            </div>
            <button 
              className="continue-button enabled" 
              onClick={onBackToLanding}
              style={{ marginTop: '20px' }}
            >
              Quay lại trang chủ
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TuongVySuccessScreen;
