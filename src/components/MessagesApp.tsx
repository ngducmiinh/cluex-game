import React, { useState } from 'react';
import MessagesList from './MessagesList';
import ChatView from './ChatView';
import './MessagesApp.css';

interface MessagesAppProps {
  onBack: () => void;
}

const MessagesApp: React.FC<MessagesAppProps> = ({ onBack }) => {
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

  if (currentView === 'chat') {
    return (
      <ChatView 
        chatId={selectedChatId} 
        onBack={handleBackToList}
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
