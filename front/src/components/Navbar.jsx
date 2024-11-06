import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='px-2 mt-20 '>
        <div className='container mx-auto flex flex-wrap items-center justify-start space-x-4 mt-4'>
          <Link
            to='/dashboard'
            className='bg-[#262626] text-white px-4 py-2 rounded-md border border-white border-1'
          >
            Dashboard
          </Link>
          <Link
            to='/scenarios'
            className='bg-[#262626] text-white px-4 py-2 rounded-md border border-white border-1'
          >
            Mes Scénarios
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
