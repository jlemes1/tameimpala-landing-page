import { AiOutlineClose } from 'react-icons/ai';

function AlbumModal({ album, isOpen, onClose }) {
  if (!isOpen || !album) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-zinc-700/50  p-4'>
      <div className='absolute inset-0' onClick={onClose}></div>

      <div className='relative bg-black border-2 border-zinc-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 text-white hover:text-gray-400 transition'
          aria-label='Close modal'
        >
          <AiOutlineClose size={32} className='cursor-pointer' />
        </button>

        <div className='p-6 md:p-10'>
          <div className='flex justify-center mb-6'>
            <img
              src={album.src}
              alt={album.alt}
              className='w-48 md:w-64 rounded-lg border-2 border-zinc-700'
            />
          </div>

          <h2 className='text-2xl md:text-4xl font-bold text-center mb-8 uppercase'>
            {album.title}
          </h2>

          <div>
            <h3 className='text-xl md:text-2xl font-semibold mb-4 uppercase'>
              Tracklist
            </h3>
            <ol className='space-y-2 md:space-y-3'>
              {album.tracklist.map((track) => (
                <li
                  key={track.id}
                  className='flex items-start text-base md:text-lg text-gray-200 hover:text-white transition'
                >
                  <span className='mr-4 font-semibold text-zinc-500'>
                    {track.id}.
                  </span>
                  <span>{track.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumModal;
