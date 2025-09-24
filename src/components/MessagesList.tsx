import React from 'react';
import './MessagesList.css';

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
}

interface MessagesListProps {
  onChatSelect: (chatId: string) => void;
  onBack: () => void;
}

const MessagesList: React.FC<MessagesListProps> = ({ onChatSelect, onBack }) => {
  const chats: Chat[] = [
    {
      id: 'tuong-vy',
      name: 'Tường Vy',
      avatar: 'TV',
      lastMessage: 'Đừng như thế mà Quân, chúng ta nói chuyện bàn hết đi',
      time: '22:54',
      unread: 3
    },
  ];

  return (
    <div className="messages-list">
      <div className="messages-list-header">
        <button className="back-button" onClick={onBack}>
          <span>←</span>
        </button>
      </div>

      <div className="search-bar">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>

      <div className="chats-container">
        {chats.map((chat) => (
          <div 
            key={chat.id} 
            className="chat-item"
            data-chat-id={chat.id}
            onClick={() => onChatSelect(chat.id)}
          >
            <div className="chat-avatar">
              {chat.avatar}
            </div>
            <div className="chat-info">
              <div className="chat-details">
                <h3 className="chat-name">{chat.name}</h3>
                <p className="last-message">{chat.lastMessage}</p>
              </div>
              <div className="chat-meta">
                <span className="chat-time">{chat.time}</span>
                {chat.unread && (
                  <div className="unread-badge">{chat.unread}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesList;
