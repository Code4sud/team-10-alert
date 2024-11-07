import {NavLink} from 'react-router-dom';

const Navbar = () => {


  return (
      <nav className='bg-[#203D4E] min-h-[calc(100vh-112px)] flex flex-col gap-4 min-w-48 rounded-xl'>
        <img src='src/assets/logo.png' alt='logo' className='w-full' />
        <div className='flex flex-col items-center gap-4'>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? 'text-[#00D9FF] font-bold flex items-center gap-4' : 'text-white flex items-center gap-4'}
          >
            <img src='src/assets/dashboard.svg' alt='logo' className='w-5 h-5' />
            Dashboard
          </NavLink>
          <NavLink
            to='/scenarios'
            className={({ isActive }) => isActive ? 'text-[#00D9FF] font-bold flex items-center gap-4' : 'text-white flex items-center gap-4'}
          >
            <img src='src/assets/scenario.svg' alt='logo' className='w-5 h-5' />
            Scénarios
          </NavLink>
        </div>
      </nav>
  );
};

export default Navbar;
