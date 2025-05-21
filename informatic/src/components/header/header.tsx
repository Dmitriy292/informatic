import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className='absolute top-10 left-1/2 transform -translate-x-1/2'>
        <Link to="/informatic"><button className='mx-2 cursor-pointer'>Информатика</button></Link>
        <Link to="/infa"><button className='mx-2 cursor-pointer'>Полезная информация</button></Link>
        <Link to="/courses"><button className='mx-2 cursor-pointer'>Курсы</button></Link>
        <Link to="/page"><button className='mx-2 cursor-pointer'>О сайте</button></Link>
      </div>
    </div>
  );
};

export default Header;
