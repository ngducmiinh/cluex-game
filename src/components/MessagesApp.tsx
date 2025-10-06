import React, { useState } from 'react';
import MessagesList from './MessagesList';
import ChatView from './ChatView';
import './MessagesApp.css';

interface MessagesAppProps {
  onBack: () => void;
  onShowTuongVyAnswer?: () => void;
}

const MessagesApp: React.FC<MessagesAppProps> = ({ onBack, onShowTuongVyAnswer }) => {
  const [currentView, setCurrentView] = useState<'list' | 'chat'>('list');
  const [selectedChatId, setSelectedChatId] = useState<string>('');

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
    setCurrentView('chat');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedChatId('');
  };

  const handleBackToHome = () => {
    onBack();
  };

  const handleShowAnswer = () => {
    if (onShowTuongVyAnswer) {
      onShowTuongVyAnswer();
    }
  };

  if (currentView === 'chat') {
    return (
      <ChatView 
        chatId={selectedChatId} 
        onBack={handleBackToList}
        onShowAnswer={selectedChatId === 'tuong-vy' ? handleShowAnswer : undefined}
      />
    );

  }

  return (
    <MessagesList 
      onChatSelect={handleChatSelect}
      onBack={handleBackToHome}
    />
  );
};

export default MessagesApp;
