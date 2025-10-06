import React, { useState, useEffect, useRef } from 'react';
import './ChatView.css';

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isMe: boolean;
  type?: 'missed_call' | 'call_back';
}

interface ChatViewProps {
  chatId: string;
  onBack: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({ chatId, onBack }) => {
  const [callState, setCallState] = useState<'none' | 'calling' | 'busy'>('none');

  const handleCallClick = () => {
    setCallState('calling');
    // After 3 seconds of "calling", show busy state
    setTimeout(() => {
      setCallState('busy');
      // After 2 more seconds, close the call screen
      setTimeout(() => {
        setCallState('none');
      }, 2000);
    }, 3000);
  };
  const getChatData = (chatId: string) => {
    if (chatId === 'tuong-vy') {
      return {
        name: 'Tường Vy',
        avatar: 'TV',
        messages: [
          {
            id: 1,
            sender: 'Me',
            text: 'Tường Vy, tao vừa xem danh sách công bố giải thưởng. Tại sao tên tao không có trong danh sách giải cuộc thi mà cả team lại vẫn đủ những người khác?',
            time: '22:39',
            isMe: true
          },
          {
            id: 2,
            sender: 'Tường Vy',
            text: 'Hả? Gì cơ? M đang nói gì thế?',
            time: '22:40',
            isMe: false
          },
          {
            id: 3,
            sender: 'Me',
            text: 'M đừng giả vờ giả vịt ở đây với t. T nhất định phải làm rõ chuyện này.',
            time: '22:41',
            isMe: true
          },
          {
            id: 4,
            sender: 'Tường Vy',
            text: 'Quân, bình tĩnh. Có nhầm lẫn hay sai sót gì đó đây thôi. T cũng không biết chuyện này. T vừa mới xem.',
            time: '22:42',
            isMe: false
          },
          {
            id: 5,
            sender: 'Me',
            text: 'Nhầm lẫn? M nghĩ tao ngây thơ à? T là người đưa ra ý tưởng chính, vai trò chuyên môn quan trọng cũng là t, chạy mô hình, làm toàn bộ số liệu. Bọn m làm được những gì, chỉ ngồi hả hê sau lưng, còn chấm điểm và ghi chú khi đã có tất cả từ tao rồi. Đến lúc nhận giải thì lại chỉ có mấy đứa bọn m đứng tên. Giải thưởng trị giá bao nhiêu? Học bổng 100%, việc làm ở Hikari Global Innovation. Tao đã thức trắng bao đêm. Mày nghĩ tao ngây thơ đến mức tin vào lời nói suông đó à? Cái giải thưởng này chỉ t mới xứng đáng. Mày, với tư cách nhóm trưởng, không có trách nhiệm gì sao?',
            time: '22:43',
            isMe: true
          },
          {
            id: 6,
            sender: 'Tường Vy',
            text: 'Sao m lại đổ lỗi cho t? Đây là quyết định của hội đồng. T đâu có quyền. T cũng không rõ chuyện này như m mà lúc...',
            time: '22:44',
            isMe: false
          },
          {
            id: 7,
            sender: 'Me',
            text: 'Quyết định của ai? Mày, Quỳnh Anh và thằng Tùng đã thỏa thuận với nhau? Bọn mấy định ăn cắp công lao của tao trắng trợn như thế à? Đừng có rở vở trò hèn hạ tùy tiện, quá muộn rồi.',
            time: '22:45',
            isMe: true
          },
          {
            id: 8,
            sender: 'Tường Vy',
            text: 'Ko phải thế! Bọn t ko làm chuyện đó. Bọn mình là một nhóm mà. Dù ko có tên trong danh sách thì cống hiến của m vẫn ở đó, m làm thế thì mọi thứ sẽ nổ tung mất. Giải thưởng này không phải do 1 người mà công sức nhiều người mới có được, nếu bẻ gãy m, bọn t cũng ko muốn mọi chuyện đi đến bước đó đâu đừng...',
            time: '22:46',
            isMe: false
          },
          {
            id: 9,
            sender: 'Me',
            text: 'Đóng góp của tao ko có tên trong danh sách thì còn có ý nghĩa gì? Giải thưởng này là học bổng toàn phần, là cơ hội làm việc của t, những thứ mà đến cả đi ngủ t cũng mơ thấy. Tất cả đều tan biến.',
            time: '22:47',
            isMe: true
          },
          {
            id: 10,
            sender: 'Tường Vy',
            text: 'M có biết giải thưởng lần này có thể cứu cuộc đời t ko, biết nó quan trọng với t đến mức nào ko? Bao nhiêu cố gắng của t lại để bọn mày hưởng hết à?',
            time: '22:48',
            isMe: false
          },
          {
            id: 11,
            sender: 'Tường Vy',
            text: 'Quân, hãy bình tĩnh lại, đừng làm gì trong lúc nóng giận. T sẽ gọi cho thầy giáo, xin thầy một cuộc hẹn. Cả nhóm mình sẽ cùng gặp thầy để làm rõ mọi chuyện. Được không?',
            time: '22:49',
            isMe: false
          },
          {
            id: 12,
            sender: 'Me',
            text: 'Gặp để làm gì? Để các người lấp liếm mọi chuyện à? Tao đã thu thập tất cả bằng chứng công sức t bỏ ra bấy lâu nay cho cuộc thi này. T sẽ vạch trần tất cả, không có cơ hội cho các người bao che đâu.',
            time: '22:50',
            isMe: true
          },
          {
            id: 13,
            sender: 'Tường Vy',
            text: 'M đừng manh động. M sẽ phá hủy tất cả, không chỉ của bọn t mà còn của m nữa. Chúng ta sẽ báo cáo lên trên và giải quyết được mà, hãy ngồi lại cùng nhau bàn bạc chút được ko, đừng nóng vội mà làm liều lúc này.',
            time: '22:51',
            isMe: false
          },
          {
            id: 14,
            sender: 'Me',
            text: 'Phá hủy? Lòng tin của tao đã bị phá hủy rồi. Ngày mai, lá thư tố cáo sẽ được gửi lên thẳng tới Hội đồng. Hãy chuẩn bị mà đón nhận. T sẽ tự lấy lại công bằng và những thứ xứng đáng thuộc về t.',
            time: '22:52',
            isMe: true
          },
          {
            id: 15,
            sender: 'Tường Vy',
            text: 'Đừng như thế mà Quân, chúng ta nói chuyện bàn bạc lại được không?',
            time: '22:53',
            isMe: false
          },
          {
            id: 16,
            sender: 'Tường Vy',
            text: '☎️ Cuộc gọi nhỡ',
            time: '23:16',
            isMe: false,
            type: 'missed_call' as const
          }
        ]
      };
    } else if (chatId === 'clue-x') {
      return {
        name: 'Clue-X',
        avatar: 'CX',
        messages: [
          {
            id: 1,
            sender: 'Clue-X',
            text: 'Chúc bạn chơi game vui vẻ! 🎮',
            time: '23:42',
            isMe: false
          }
        ]
      };
    }
    return { name: '', avatar: '', messages: [] };
  };

  const chatData = getChatData(chatId);
  const [messages, setMessages] = useState<Message[]>(chatData.messages as Message[]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Scroll to bottom when chat is first opened
    scrollToBottom();
  }, [chatId]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
      
      const message: Message = {
        id: messages.length + 1,
        sender: 'Me',
        text: newMessage.trim(),
        time: timeStr,
        isMe: true
      };
      
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-view">
      <div className="app-header">
        <button className="app-back-button visible" onClick={onBack}>
          <span>←</span>
        </button>
        <div className="contact-name">
          <h2>{chatData.name}</h2>
        </div>
        <div className="header-actions">
          <button className="action-button" onClick={handleCallClick}>📞</button>
        </div>
      </div>

      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.isMe ? 'message-sent' : 'message-received'} ${message.type ? `message-${message.type}` : ''}`}
          >
            <div 
              className={`message-bubble ${message.type ? `${message.type}-bubble` : ''}`}
              data-sender={message.sender}
              data-chat-id={chatId}
            >
              {message.type === 'missed_call' && (
                <div className="call-message">
                  <div className="call-info">
                    <span className="call-icon">📞</span>
                    <span className="call-text">Cuộc gọi nhỡ</span>
                  </div>
                  <button className="call-back-button" onClick={handleCallClick}>
                    <span className="call-back-text">Gọi lại</span>
                  </button>
                </div>
              )}
              {!message.type && (
                <p className="message-text">{message.text}</p>
              )}
              <span className="message-time">{message.time}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="message-input-container" onSubmit={sendMessage}>
        <div className="input-wrapper">
          <button type="button" className="attachment-button">📎</button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="message-input"
          />
          <button type="submit" className="send-button" disabled={!newMessage.trim()}>
            ➤
          </button>
        </div>
      </form>

      {callState !== 'none' && (
        <div className="call-screen">
          <div className="call-interface">
            <div className="caller-info">
              <div className={`caller-avatar ${chatId === 'clue-x' ? 'clue-x-avatar' : 'tuong-vy-avatar'}`}>
                {chatData.avatar}
              </div>
              <h2 className="caller-name">{chatData.name}</h2>
              <div className="call-status">
                {callState === 'calling' && (
                  <>
                    <div className="calling-animation">
                      <div className="pulse-ring"></div>
                      <div className="pulse-ring pulse-ring-delay-1"></div>
                      <div className="pulse-ring pulse-ring-delay-2"></div>
                    </div>
                    <p>Đang gọi...</p>
                  </>
                )}
                {callState === 'busy' && (
                  <p className="busy-message">Người dùng đang bận</p>
                )}
              </div>
            </div>
            <div className="call-actions">
              <button 
                className="end-call-button" 
                onClick={() => setCallState('none')}
              >
                📞
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatView;
