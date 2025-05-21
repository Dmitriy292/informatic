import React, { useState, useEffect } from 'react';
import Header from '../components/header/header';

const Page: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
    <Header/>
      {isVisible && (
        <div>
            <div className='flex'>
                <h1 className="absolute top-40 left-100 w-100">Это Ильдар Ильясыч, один из величайших информатиков всего мира. Справа от текста вы можете увидеть его лик.</h1>
                <img className="rounded-3xl w-150 absolute top-40 left-220"  src="src\Img\main.jpg"  alt="" />
            </div>
        </div>
      )}
    </div>
  );
};

export default Page;
