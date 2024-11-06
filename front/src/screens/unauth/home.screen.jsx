import {Link} from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <div className='flex justify-center items-center h-[400px]'>
            <Link to={'chart'}>Enter</Link>
        </div>
    );
}
