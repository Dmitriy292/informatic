import React, { useState, useEffect } from 'react';
import './RotatingImage.css'; // Создайте этот файл для стилей

const RotatingImage: React.FC = () => {
  const [dots, setDots] = useState<string>('.');
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots === '...') {
          return '.';
        } else {
          return prevDots + '.';
        }
      });
    }, 500);

    const disappearTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(disappearTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {isVisible && (
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-64 h-64">
            <img
              src="src\Img\main.jpg" 
              alt="Rotating"
              className="w-full h-full object-cover animate-spin-right"
            />
          </div>
          <div className="mt-4 text-xl">
            Loading{dots}
          </div>
        </div>
      )}
    </div>
  );
};

export default RotatingImage;
