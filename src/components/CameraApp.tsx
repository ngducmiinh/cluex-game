import React from 'react';
import './CameraApp.css';

interface CameraAppProps {
  onBack: () => void;
}

const CameraApp: React.FC<CameraAppProps> = ({ onBack }) => {
  return (
    <div className="camera-app">
      <div className="app-header messages-header">
        <button className="app-back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <div className="contact-name">
          <h2>Camera</h2>
        </div>
      </div>

      <div className="camera-content">
        <div className="camera-error">
          <div className="error-icon">
            📷
          </div>
          <h3>Camera không thể sử dụng</h3>
          <p>Camera bị hỏng và không thể dùng được.</p>
          <p>Vui lòng liên hệ bộ phận kỹ thuật để được hỗ trợ.</p>
          
          <div className="error-details">
            <div className="error-code">
              <span>Mã lỗi: CAM_001</span>
            </div>
            <div className="error-suggestions">
              <h4>Gợi ý khắc phục:</h4>
              <ul>
                <li>Khởi động lại thiết bị</li>
                <li>Kiểm tra quyền truy cập camera</li>
                <li>Liên hệ hỗ trợ kỹ thuật</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraApp;
