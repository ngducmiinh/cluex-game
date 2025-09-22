import React, { useState } from 'react';
import './App.css';
import ResponsiveTest from './components/ResponsiveTest';

function App() {
  const [showResponsiveTest, setShowResponsiveTest] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">ClueX Game</h1>
        <p className="App-description">
          Chào mừng bạn đến với ClueX Game - Trò chơi thú vị cho mọi lứa tuổi!
        </p>
        <div className="App-buttons">
          <button className="App-button primary">Bắt đầu chơi</button>
          <button 
            className="App-button secondary"
            onClick={() => setShowResponsiveTest(true)}
          >
            Test Responsive
          </button>
        </div>
      </header>
      
      <main className="App-main">
        <section className="feature-section">
          <div className="container">
            <h2>Tính năng chính</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🎮 Dễ chơi</h3>
                <p>Giao diện đơn giản, dễ sử dụng trên mọi thiết bị</p>
              </div>
              <div className="feature-card">
                <h3>📱 Responsive</h3>
                <p>Hoạt động mượt mà trên máy tính và điện thoại</p>
              </div>
              <div className="feature-card">
                <h3>🏆 Thử thách</h3>
                <p>Nhiều level với độ khó tăng dần</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="App-footer">
        <p>&copy; 2025 ClueX Game. Tất cả quyền được bảo lưu.</p>
      </footer>

      <ResponsiveTest 
        isVisible={showResponsiveTest}
        onClose={() => setShowResponsiveTest(false)}
      />
    </div>
  );
}

export default App;
