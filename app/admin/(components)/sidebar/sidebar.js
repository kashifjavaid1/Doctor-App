import React from 'react';
import Link from 'next/link';
import { FaGraduationCap } from 'react-icons/fa';

import { RxDashboard, RxPerson, RxShadowOuter } from 'react-icons/rx';
import { FaCheckCircle } from 'react-icons/fa';

const Sidebar = ({ children }) => {
  return (
    <div className='flex py-20'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
        
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20}  />
            </div>
          </Link>
          <Link href="/User">
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
         
         
        </div>
      </div>
    
    </div>
  );
};

export default Sidebar;