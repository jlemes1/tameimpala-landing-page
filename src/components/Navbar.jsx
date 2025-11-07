import { Link } from 'react-scroll';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import img from '../assets/log.svg';
import { useState } from 'react';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className='fixed w-full top-0 left-0 z-50'>
      <div className='bg-black flex flex-row justify-between items-center px-4 md:px-32'>
        <Link to='header'>
          <img src={img} alt='Logo' className='w-sm cursor-pointer' />
        </Link>

        {/* Desktop sections */}
        <nav className='hidden md:flex items-center uppercase text-white mr-32 text-2xl gap-10'>
          <Link
            to='tour'
            spy={true}
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-gray-400'
          >
            Tour
          </Link>
          <Link
            to='discography'
            spy={true}
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-gray-400'
          >
            Discography
          </Link>
          <Link
            to='history'
            spy={true}
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-gray-400'
          >
            History
          </Link>
          <a
            href='https://storeuk.tameimpala.com/'
            target='_blank'
            className='hover:text-gray-400'
            title='Shop'
          >
            Shop
          </a>
        </nav>

        {/* Desktop social media */}
        <div className='hidden md:flex items-center gap-4'>
          <a
            href='https://www.instagram.com/tameimpala'
            target='_blank'
            title='Instagram'
          >
            <FaInstagram className='text-white text-3xl hover:text-pink-500' />
          </a>
          <a
            href='https://www.youtube.com/@TameImpala'
            target='_blank'
            title='Youtube'
          >
            <FaYoutube className='text-white text-3xl hover:text-red-600' />
          </a>
          <a
            href='https://open.spotify.com/intl-es/artist/5INjqkS1o8h1imAzPqGZBb'
            target='_blank'
            title='Spotify'
          >
            <FaSpotify className='text-white text-3xl hover:text-green-500' />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden cursor-pointer' onClick={handleChange}>
          {menu ? (
            <AiOutlineClose size={24} className='text-white' />
          ) : (
            <AiOutlineMenu size={24} className='text-white' />
          )}
        </div>
      </div>

      {/* Mobile sections */}
      <div
        className={`${menu ? 'translate-x-0' : '-translate-x-full'} 
        md:hidden fixed top-16 left-0 right-0 bottom-0 
        flex flex-col bg-black text-white p-4 
        transition-transform duration-300 ease-in-out`}
      >
        <nav className='flex flex-col space-y-4 text-xl uppercase'>
          <Link
            to='tour'
            spy={true}
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-gray-400'
            onClick={handleChange}
          >
            Tour
          </Link>
          <Link
            to='discography'
            spy={true}
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-gray-400'
            onClick={handleChange}
          >
            Discography
          </Link>
          <Link
            to='history'
            spy={true}
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-gray-400'
            onClick={handleChange}
          >
            History
          </Link>
          <a
            href='https://storeuk.tameimpala.com/'
            target='_blank'
            className='hover:text-gray-400'
            title='Shop'
          >
            Shop
          </a>
        </nav>

        {/* Mobile social media */}
        <div className='flex justify-center gap-6 mt-8'>
          <a
            href='https://www.instagram.com/tameimpala'
            target='_blank'
            title='Instagram'
          >
            <FaInstagram className='text-white text-3xl hover:text-pink-500' />
          </a>
          <a
            href='https://www.youtube.com/@TameImpala'
            target='_blank'
            title='Youtube'
          >
            <FaYoutube className='text-white text-3xl hover:text-red-600' />
          </a>
          <a
            href='https://open.spotify.com/intl-es/artist/5INjqkS1o8h1imAzPqGZBb'
            target='_blank'
            title='Spotify'
          >
            <FaSpotify className='text-white text-3xl hover:text-green-500' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
