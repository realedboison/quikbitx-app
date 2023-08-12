import { HiOutlineMenuAlt2 } from 'react-icons/Hi';
import Sidebar from './Sidebar';
import { SidebarContext } from '../contexts/SidebarContext';
import { useContext } from 'react';

function Navigation() {
  const { isOpen, setIsOpen } = useContext(
    SidebarContext
  );
  return (
    <header className='bg-yellow-400'>
      <h1 className='text-4xl font-extrabold text-green-700 text-center uppercase'></h1>
      <div>
        <Sidebar />
      </div>
      <div className='  flex justify-between items-center p-2'>
        <h1 className='text-2xl font-extrabold'>
          Quikbitx
        </h1>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='flex justify-end cursor-pointer relative'>
          <HiOutlineMenuAlt2
            className='w-10 h-10 bg-green-200'
            bg-orange-600
          />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
