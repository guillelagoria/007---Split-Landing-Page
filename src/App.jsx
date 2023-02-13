import React, { useEffect, useRef } from 'react';
import './App.css';

export const App = () => {

  const left = useRef(null);
  const right = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    left.current.addEventListener('mouseenter', () => container.current.classList.add('hover-left'));
    left.current.addEventListener('mouseleave', () => container.current.classList.remove('hover-left'));

    right.current.addEventListener('mouseenter', () => container.current.classList.add('hover-right'));
    right.current.addEventListener('mouseleave', () => container.current.classList.remove('hover-right'));
  }, []);
  return (
    <>
    <body>
      <div className='container' ref={container}>
        <div className="split left" ref={left}>
          <h1>Google Pixel</h1>
          <a href="#" className='btn'>Buy Now</a>
        </div>
        <div className="split right" ref={right}>
          <h1>Apple iPhone</h1>
          <a href="#" className='btn'>Buy Now</a>
        </div>
      </div>
    </body>
    </>
  )
};

export default App;
