import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleEnter = () => {
    if (code === '7654321') {
      navigate('/dashboard');
    } else {
      alert('Code incorrect. Veuillez réessayer.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='flex flex-col justify-evenly items-center h-[400px] w-[50%] space-y-4 bg-black rounded-md shadow-[0px_4px_15px_rgba(100,100,100,0.5)]' >
      <h1 className='text-white text-2xl font-bold'>
        Bienvenue sur le site de 4Sud ! 
      </h1>
      <div className='flex flex-col items-start'>
        <label className='text-gray-500 text-sm text-end' >Entrez votre code d&apos;accès</label>
        <input
          type='text'
          placeholder='7654321'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className='px-4 py-2 border rounded-md'
          />

          </div>
        <button
          onClick={handleEnter}
          className='mt-2 bg-blue-500 text-md text-white px-8 py-2 rounded-md'
        >
          Entrer
        </button>
    </div>
    </div>
  );
};
