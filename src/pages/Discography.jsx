import { useState } from 'react';
import albumData from '../utils/albums';
import AlbumModal from '../components/AlbumModal';

function Discography() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAlbum(null);
  };

  return (
    <div className='bg-black mx-5 md:mx-20 rounded-xl p-5 md:p-10'>
      <div className='flex justify-center items-center uppercase text-3xl md:text-5xl mt-10 md:mt-20'>
        <h2>Discography</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 justify-items-center place-content-center p-5 md:p-10 max-w-5xl mx-auto md:text-left'>
        {albumData.map((album) => (
          <img
            key={album.id}
            src={album.src}
            alt={album.alt}
            onClick={() => handleAlbumClick(album)}
            className='mx-auto block w-40 md:w-64 border-2 border-zinc-700 hover:contrast-125 transition duration-300 rounded-xl cursor-pointer'
          />
        ))}
      </div>

      <AlbumModal
        album={selectedAlbum}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Discography;
