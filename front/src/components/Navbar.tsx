import {NavLink} from 'react-router-dom';
import {Button} from "@/components/ui/button";
import {TbLogout2} from "react-icons/tb";
import {useUserStore} from "@/store/users/user.store";

const Navbar = () => {
    const {logout} = useUserStore();

    return (
        <nav
            className='bg-[#203D4E] min-h-[calc(100vh-112px)] flex flex-col items-center gap-4 min-w-48 rounded-xl pb-8 fixed'>
            <img src='../../public/logo.png' alt='logo' className='w-full'/>
            <div className='flex flex-col items-center gap-4 h-100'>
                <NavLink
                    to='/'
                    className={({isActive}) => isActive ? 'text-[#00D9FF] font-bold flex items-center gap-4' : 'text-white flex items-center gap-4'}
                >
                    <img src='../../public/dashboard.svg' alt='logo' className='w-5 h-5'/>
                    Dashboard
                </NavLink>
                <NavLink
                    to='/scenarios'
                    className={({isActive}) => isActive ? 'text-[#00D9FF] font-bold flex items-center gap-4' : 'text-white flex items-center gap-4'}
                >
                    <img src='../../public/scenario.svg' alt='logo' className='w-5 h-5'/>
                    Scénarios
                </NavLink>


            </div>
            <div className="flex-grow"></div>
            <Button variant="destructive" onClick={logout}><TbLogout2/>Déconnexion</Button>
        </nav>
    );
};

export default Navbar;
