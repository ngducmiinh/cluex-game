import React, { useState } from 'react';
import './CalculatorApp.css';

interface CalculatorAppProps {
  onBack: () => void;
}

const CalculatorApp: React.FC<CalculatorAppProps> = ({ onBack }) => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="calculator-app">
      <div className="app-header messages-header">
        <button className="app-back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <div className="contact-name">
          <h2>Calculator</h2>
        </div>
      </div>

      <div className="calculator-content">
        <div className="calculator-display">
          <div className="display-text">{display}</div>
        </div>

        <div className="calculator-buttons">
          <button className="calc-button function" onClick={clear}>C</button>
          <button className="calc-button function">±</button>
          <button className="calc-button function">%</button>
          <button className="calc-button operator" onClick={() => inputOperation('÷')}>÷</button>
            
          <button className="calc-button number" onClick={() => inputNumber('7')}>7</button>
          <button className="calc-button number" onClick={() => inputNumber('8')}>8</button>
          <button className="calc-button number" onClick={() => inputNumber('9')}>9</button>
          <button className="calc-button operator" onClick={() => inputOperation('×')}>×</button>
            
          <button className="calc-button number" onClick={() => inputNumber('4')}>4</button>
          <button className="calc-button number" onClick={() => inputNumber('5')}>5</button>
          <button className="calc-button number" onClick={() => inputNumber('6')}>6</button>
          <button className="calc-button operator" onClick={() => inputOperation('-')}>-</button>
            
          <button className="calc-button number" onClick={() => inputNumber('1')}>1</button>
          <button className="calc-button number" onClick={() => inputNumber('2')}>2</button>
          <button className="calc-button number" onClick={() => inputNumber('3')}>3</button>
          <button className="calc-button operator" onClick={() => inputOperation('+')}>+</button>
            
          <button className="calc-button number zero" onClick={() => inputNumber('0')}>0</button>
          <button className="calc-button number" onClick={inputDecimal}>.</button>
          <button className="calc-button operator equals" onClick={performCalculation}>=</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
