import albumImg from '../utils/albums';

function Discography() {
  return (
    <div className='bg-black mx-5 md:mx-20 rounded-xl p-5 md:p-10'>
      <div className='flex justify-center items-center uppercase text-3xl md:text-5xl mt-10 md:mt-20'>
        <h2>Discography</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 justify-items-center place-content-center p-5 md:p-10 max-w-5xl mx-auto md:text-left'>
        {albumImg.map((album) => (
          <img
            key={album.id}
            src={album.src}
            alt={album.alt}
            className='mx-auto block w-40 md:w-64 border-2 border-zinc-700  hover:contrast-125  transition duration-300  rounded-xl'
          />
        ))}
      </div>
    </div>
  );
}

export default Discography;
