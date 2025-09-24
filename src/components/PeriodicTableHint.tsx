import React from 'react';
import './PeriodicTableHint.css';

interface PeriodicTableHintProps {
  onClose: () => void;
}

const PeriodicTableHint: React.FC<PeriodicTableHintProps> = ({ onClose }) => {
  // Simplified periodic table with key elements
  const elements = [
    { symbol: 'H', name: 'Hydrogen', number: 1, row: 0, col: 0 },
    { symbol: 'He', name: 'Helium', number: 2, row: 0, col: 17 },
    { symbol: 'Li', name: 'Lithium', number: 3, row: 1, col: 0 },
    { symbol: 'Be', name: 'Beryllium', number: 4, row: 1, col: 1 },
    { symbol: 'B', name: 'Boron', number: 5, row: 1, col: 12 },
    { symbol: 'C', name: 'Carbon', number: 6, row: 1, col: 13 },
    { symbol: 'N', name: 'Nitrogen', number: 7, row: 1, col: 14 },
    { symbol: 'O', name: 'Oxygen', number: 8, row: 1, col: 15 },
  ];

  return (
    <div className="hint-overlay" onClick={onClose}>
      <div className="hint-modal" onClick={(e) => e.stopPropagation()}>
        <div className="hint-header">
          <h3>Bảng Tuần Hoàn - Gợi Ý</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="periodic-hint">
          <p className="hint-text">
            Hãy nhìn vào các số hiệu nguyên tử... 🧪
          </p>
          
          <div className="elements-grid">
            {elements.map((element) => (
              <div key={element.symbol} className="element-card">
                <div className="element-number">{element.number}</div>
                <div className="element-symbol">{element.symbol}</div>
                <div className="element-name">{element.name}</div>
              </div>
            ))}
          </div>
          
          <div className="hint-footer">
            <p className="hint-clue">
              💡 Mật khẩu có thể liên quan đến số hiệu nguyên tử của 6 nguyên tố đầu tiên...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodicTableHint;
