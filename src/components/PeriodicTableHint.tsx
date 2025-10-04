import React from 'react';
import './PeriodicTableHint.css';

interface PeriodicTableHintProps {
  onClose: () => void;
}

const PeriodicTableHint: React.FC<PeriodicTableHintProps> = ({ onClose }) => {
  return (
    <div className="hint-overlay" onClick={onClose}>
      <div className="hint-modal periodic-table-modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="periodic-hint">
          <div className="periodic-table-image">
            <img 
              src="/images/icons/tuanhoan.png" 
              alt="Bảng tuần hoàn các nguyên tố hóa học" 
              className="full-periodic-table"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodicTableHint;
