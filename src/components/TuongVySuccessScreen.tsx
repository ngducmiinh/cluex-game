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
          <h2>Trường học - Ký ức 2010</h2>
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
              
              <p>- Điều Vy và Tùng không ngờ là Quân bị lên cơn đau tim do uống phải cafe chứa thuốc an thần, khi Vy và Tùng phát hiện ra thì đã quá muộn. Cả 2 đều nhận thức được hành động của bản thân đã đưa họ vào ngõ cụt, họ còn quá trẻ để nhận những sự trừng phạt của pháp luật. Vậy nên đến lúc này, họ quyết định làm liều một phen, tiêu hủy tất cả bằng chứng, dựng nên hiện trường giả.</p>
              
              <p>- Cả 2 lôi Quân ra cầu thang rồi nhét Panadol vào balo Quân để tạo hiện trường bị sốc thuốc, lên cơn đau tim và ngã cầu thang tử vong. Vy và Tùng đều biết khi khám nghiệm tử thi sẽ lộ ra việc có thuốc trong cơ thể nạn nhân nhưng còn ngã cầu thang để đánh lạc hướng điều tra của cảnh sát.</p>
              
              <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#d9534f' }}>3. Bằng chứng Ngoại phạm Giả mạo</h3>
              <p>Đây là điểm yếu chí mạng trong lời khai và khẩu cung của cả hai, và là bằng chứng đanh thép nhất để buộc tội họ.</p>
              
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li><strong>Sơ hở trong lời khai của Tùng:</strong> Tùng khai rằng sau khi đưa Vy về lúc 16h và ở lại 15 phút, anh ta đã "ghé qua quán cà phê" mua 4 cốc, từ 16h26 – 16h43, khoảng thời gian này chính là lúc Tùng quay về nhà để lấy thuốc của mẹ vì nhà Tùng ngay đó, Tùng biết mẹ có thuốc này, Tùng không mua ngoài vì sẽ để lại bằng chứng, Tùng chỉ không ngờ đến việc công an điều tra cả về gia đình Tùng và phát hiện mẹ Tùng có sử dụng loại thuốc này. Và quay lại trường lúc "hơn 17h" (theo lời Tùng) hoặc 17h15-17h20 (theo lời thầy Đạt) hoặc 17h30 (theo lời Quỳnh Anh), khoảng thời gian 16h50-tầm 17h20 là lúc Tùng và Vy đều đã có mặt ở trường để thực hiện các bước tiếp theo, vì thời gian khá gấp rút và lại là tầm chiều tối, không có đèn hành lang nên hiện trường đã để lại các vật chứng buộc tội.</li>
                
                <li><strong>Lời nói dối của Vy:</strong> Vy đã khẳng định cô ở nhà và chỉ nhớ bố mẹ vào phòng đắp chăn cho cô một lần. Chi tiết này đã vô tình tố cáo cô. Một người thực sự ngủ thiếp đi sẽ không thể biết được bố mẹ vào phòng mấy lần. Câu trả lời đúng phải là "em không biết" chứ không phải "em không nhớ" nếu thực sự Vy đã ngủ ở nhà. Điều này chứng tỏ cô chỉ giả vờ ngủ và đã bí mật ra ngoài trong lúc bố mẹ cô "ở trong bếp và loanh quanh trong nhà", chính lời khai này của bố mẹ đã tạo ra thời điểm để Vy chuồn ra khỏi nhà và trở về mà chẳng ai phát hiện ra. Và vết chân ở hiện trường chính là của Vy để lại, như lời khai của Tùng: "đi lại bất tiện" đã vô tình làm cảnh sát nghi vấn và phải đặt ra câu hỏi với Vy: "Em có bất kì vết thương nào trên cơ thể không?", tiếp đến lời khai của Quỳnh anh có nói: "Lúc đó trời bắt đầu tối, mùa hè nên bác bảo vệ cũng chẳng bật đèn hành lang" lại giải thích tại sao lại có vết dép ngay hiện trường mà cả Tùng và Vy không để ý được. Vết dép này là vô tình dẫm vào vết cafe của Quân nhưng Vy lại không hề biết vì lúc đó trời bắt đầu tối, thời gian lại có hạn nên cả 2 phải đẩy nhanh hành động để thời gian lẫn hành động không bị nghi vấn. Tiếp đến từ lời khai của Quỳnh Anh: "Trông mắt cậu ấy còn dại" chứng tỏ Vy có vấn đề về mắt, cảnh sát bắt đầu xem bản khám sức khỏe của Vy và biết Vy bị cận nhưng lại không thấy Vy đeo kính, qua dò hỏi thì biết Vy đeo lens nhưng sẽ chẳng ai đeo lens 24/24, chắc chắn khi học ở nhà Vy sẽ sử dụng kính mắt thường, theo thói quen ở nhà như vậy nên trong lúc vội vàng, từng phút trôi qua cũng có thể khiến Vy lệch kế hoạch thì làm gì còn thời gian lo đeo lens. Chính trong lúc kéo và điều chỉnh cái xác, Vy đã vô tình để rơi cái khăn lau kính ở trong góc. Khi cảnh sát tìm thấy là trông còn khá mới nên không thể là nó đã vô tình rơi ở đây khá lâu.</li>
              </ul>
              
              <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#d9534f' }}>4. Tang vật Không thể Chối cãi</h3>
              <p>Các tang vật tại hiện trường đã liên kết Tùng và Vy với vụ án một cách không thể chối cãi.</p>
              
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li><strong>Cái khăn lau kính màu hồng:</strong> Chiếc khăn này thuộc về Tường Vy, người đã chuyển sang dùng kính áp tròng nhưng vẫn dùng kính cận khi ở nhà. Lời khai của Quỳnh Anh về việc "mắt Vy còn hơi dại" trước đây đã vô tình xác nhận lý do Vy chuyển sang kính áp tròng, củng cố thêm bằng chứng rằng chiếc khăn tại hiện trường là của cô. Điều này chứng tỏ Vy đã có mặt tại hiện trường để dọn dẹp bằng chứng.</li>
                
                <li><strong>Thuốc Panadol trong ba lô của Quân:</strong> Điều tra cho thấy Quân có tiền sử bệnh tim và không bao giờ dùng Panadol. Tùng đã bỏ thuốc này vào ba lô của Quân để làm cho cái chết trông giống một cơn đau tim ngay tại cầu thang và ngã xuống.</li>
                
                <li><strong>Vết dép khập khiễng của Tường Vy:</strong> Vy đã bị thương từ trước ở chân trái nên đi lại hơi khó khăn. Thời điểm xảy ra vụ án là chiều tối, đèn hành lang không bật nên Vy vô tình dẫm phải cafe và để lại dấu, khi về đến nhà cũng vội vàng xem xét tình hình và trở lại phòng ngủ.</li>
              </ul>
              
              <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#d9534f' }}>5. Loại trừ các Nghi phạm Khác</h3>
              <p>Để khẳng định Tùng và Vy là hung thủ, chúng ta cần phải chứng minh những người khác là vô tội:</p>
              
              <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
                <li><strong>Quỳnh Anh:</strong> Mặc dù có những mâu thuẫn nhỏ với Quân, bằng chứng ngoại phạm của cô rất vững chắc. Cô ở trong phòng họp cùng thầy Đạt và Tùng trong suốt khoảng thời gian quan trọng. Thời gian cô ra ngoài đi vệ sinh là quá ngắn để thực hiện vụ án. Hơn nữa, những bằng chứng vật lý như khăn lau kính và Panadol đều không liên quan đến cô.</li>
                
                <li><strong>Thầy Đạt và Tiến Anh:</strong> Cả hai đều có bằng chứng ngoại phạm rất rõ ràng. Thầy Đạt ở lại phòng họp cùng Quỳnh Anh và Tùng, và Tiến Anh đã được bạn bè, hàng xóm và bố mẹ làm chứng là không ở trường vào thời điểm xảy ra vụ án. Họ không có động cơ đủ mạnh để ra tay sát hại Quân.</li>
              </ul>
              
              <p>Bằng cách xâu chuỗi tất cả các bằng chứng và lời khai, chúng ta đã có một bức tranh hoàn chỉnh về vụ án, với Tường Vy và Vũ Lê Đức Tùng là hai hung thủ chính.</p>
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
