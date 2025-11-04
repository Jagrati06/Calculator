import React, { useState } from 'react';

import './Calculator.css';

const buttons = [
  'AC', 'DEL', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '00', '0', '.', '='
];

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === '=') { // Use mathjs to calculate the expression
      try {
        // Use eval to calculate the expression
        const evalResult = eval(input);
        setResult(evalResult.toString());
        setInput(evalResult.toString()); // so you can continue calculations
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || '0'}
      </div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(btn)}
            className={`btn ${btn === '=' ? 'equals' : ''}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
