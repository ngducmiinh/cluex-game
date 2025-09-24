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
            sender: 'Tường Vy',
            text: 'Tường Vy tao vừa xem danh sách công bố giải thưởng. Tại sao lại tao không có trong danh sách giải cuộc thi mà cả team lại yêu cầu mình nguời khác?',
            time: '22:39',
            isMe: false
          },
          {
            id: 2,
            sender: 'Me',
            text: 'Hả? Gì cơ? M đang nói gì thế?',
            time: '22:40',
            isMe: true
          },
          {
            id: 3,
            sender: 'Tường Vy',
            text: 'M đúng giả vờ giả vị ở đây với t. T nhất định phải làm rõ chuyện này',
            time: '22:41',
            isMe: false
          },
          {
            id: 4,
            sender: 'Me',
            text: 'Quân, bình tĩnh. Có nhầm lần hay sai sót gì đây thôi. T cũng không biết chuyện này. T vừa mới xem.',
            time: '22:42',
            isMe: true
          },
          {
            id: 5,
            sender: 'Tường Vy',
            text: 'Nhầm làm? M nghĩ tao ngây thơ à? T là người đưa ra ý tưởng chính, vài trò chuyện nọm quan trọng cùng là t. Chấy mở hình, làm toàn bộ số liệu. Còn bọn m gì đã được trao phần thưởng thì còn m. Trong khi t mất tất cả công sức, t đã để trễn khai. Bờ là những gì bọn m gây dựng lên từ thành công t. Rõ ràng thường tôi giả bào nhiều? Hóc bộng 100%, việc làm gì thấm m?',
            time: '22:43',
            isMe: false
          },
          {
            id: 6,
            sender: 'Tường Vy',
            text: 'Innovation. Tao đã thừa trang bào đem. Mày vợn tao nộm nây. Hóc chung về lời nói sướng dó à? Cái giai thưởng nây chỉ t mới xứng đáng. Mày, với tư cách nhanh trưởng, không có trách nhiệm gì sau?',
            time: '22:44',
            isMe: false
          },
          {
            id: 7,
            sender: 'Me',
            text: 'Sao m lại nói tôi vậy. Đây là lần đầu của hôi đồng, T đầu có quyền. T cũng sẽ chuyện là biết về những này.',
            time: '22:45',
            isMe: true
          },
          {
            id: 8,
            sender: 'Tường Vy',
            text: 'Quyết định của ai? Mày, Quynh Anh và thằng Tùng chứ m? Tại tao không biết chuyện? Bọn mây định ăn cắp công lao của tao trong gì không mày thì m có từ và có gì vô tôi huy tự tế, quá muộn rồi',
            time: '22:46',
            isMe: false
          },
          {
            id: 9,
            sender: 'Me',
            text: 'Kô phải thế! Bọn t ko làm chuyện đó. Bọn mình là một nhóm mà. Du tao đẻ tên m trong danh sách những công sức của m thì vẫn á đó, m làm thế thì có thấy này mọi người cùng nhau quy dung sẻ cô đỗng đó bé, m cũng có những cổ chuyển đi đền buộc đô đâu dung ko?',
            time: '22:47',
            isMe: true
          },
          {
            id: 10,
            sender: 'Tường Vy',
            text: 'Đừng gọp các tao ko có tên trong danh sách thì con có ý nghĩa gì? Giai thưởng nây là học tập của tao. Và như vậy có tổ vức của t, những thứ mà đem cả đỗ ngà t cũng như trực.',
            time: '22:48',
            isMe: false
          },
          {
            id: 11,
            sender: 'Me',
            text: 'M có biết giải thưởng lần nây có mấy cái được đội t ko, biết thó quan trọng với t đến mức nào không. T đáng tại nếu như t lại để bọn mây hưởng hết à?',
            time: '22:49',
            isMe: true
          },
          {
            id: 12,
            sender: 'Tường Vy',
            text: 'Quân, hay binh tình lại, đừng làm gì trong lúc nóng giận. T sẽ gọi cho thầy giáo, xin thêm một cuộc họp, t muốn có cơ hội mì cũng góp thây để làm rõ mọi chuyện. Được không?',
            time: '22:50',
            isMe: false
          },
          {
            id: 13,
            sender: 'Me',
            text: 'Gặp để làm gì? Bé các nguời tụp kiểm mọi thứng vì tao có thi thuật lại bảo tụp để t cô cơ hội thương. Cái j cũng tại. Tao và cuộc thi nây. T sẽ xách trần tất cả, không có chỗ nào cho group. Hà',
            time: '22:51',
            isMe: true
          },
          {
            id: 14,
            sender: 'Tường Vy',
            text: 'M đúng mạnh đồng. M sẽ phá hủy tất cả, không chí của mình nào cua m nưa. Chúng ta sẽ bảo cáo lén trên và giải thích được mà, làm rõ công chức của một bận các chút được ko, đừng nằng vòi mà làm líu lúc nây.',
            time: '22:52',
            isMe: false
          },
          {
            id: 15,
            sender: 'Me',
            text: 'Phá hay? Lòng tin của tao đã bị phá hủy bởi nhóm mài, là thứ có thể sử dụng gọi bọn có tầm nhìn có thể áp dụng với mà đón nhận. T sẽ tự lấy lại công bằng và những thứ xứng đáng về t',
            time: '22:53',
            isMe: true
          },
          {
            id: 16,
            sender: 'Tường Vy',
            text: 'Đừng như thế mà Quân, chúng ta nói chuyện bàn hết đi',
            time: '22:54',
            isMe: false
          },
          {
            id: 17,
            sender: 'Tường Vy',
            text: '☎️ Cuộc gọi nhỡ',
            time: '23:16',
            isMe: false,
            type: 'missed_call' as const
          },
          {
            id: 18,
            sender: 'Tường Vy',
            text: '☎️ Cuộc gọi nhỡ',
            time: '23:42',
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
  const [messages, setMessages] = useState<Message[]>(chatData.messages);
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
      <div className="chat-header">
        <button className="back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <div className="chat-info">
          <div className="contact-details">
            <h3>{chatData.name}</h3>
          </div>
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
                    <span className="call-icon">☎️</span>
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
