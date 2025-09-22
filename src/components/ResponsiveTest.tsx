import React from 'react';
import './ResponsiveTest.css';

interface ResponsiveTestProps {
  isVisible: boolean;
  onClose: () => void;
}

const ResponsiveTest: React.FC<ResponsiveTestProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="responsive-test-overlay">
      <div className="responsive-test-modal">
        <div className="responsive-test-header">
          <h3>📱 Responsive Test</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="responsive-test-content">
          <div className="test-info">
            <h4>Thông tin thiết bị hiện tại:</h4>
            <div className="device-info">
              <p><strong>Screen Width:</strong> <span id="screen-width">{window.innerWidth}px</span></p>
              <p><strong>Screen Height:</strong> <span id="screen-height">{window.innerHeight}px</span></p>
              <p><strong>Device Type:</strong> <span id="device-type">
                {window.innerWidth >= 1200 ? 'Desktop' : 
                 window.innerWidth >= 768 ? 'Tablet' : 
                 window.innerWidth >= 480 ? 'Mobile' : 'Small Mobile'}
              </span></p>
              <p><strong>Orientation:</strong> <span id="orientation">
                {window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait'}
              </span></p>
            </div>
          </div>
          
          <div className="test-elements">
            <h4>Test Elements:</h4>
            <div className="test-buttons">
              <button className="test-btn primary">Primary Button</button>
              <button className="test-btn secondary">Secondary Button</button>
            </div>
            
            <div className="test-grid">
              <div className="test-card">Card 1</div>
              <div className="test-card">Card 2</div>
              <div className="test-card">Card 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTest;
