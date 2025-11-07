function Hero() {
  return (
    <div className='grid grid-cols-2 mt-25 uppercase bg-black p-10 mx-20 rounded-xl '>
      <div className='flex flex-col items-center justify-center gap-4 '>
        <h2 className='text-5xl font-bold text-white'>Deadbeat</h2>
        <span className='text-3xl font-bold text-white'>out now</span>
      </div>
      <div>
        <iframe
          data-testid='embed-iframe'
          style={{ borderRadius: '12px' }}
          src='https://open.spotify.com/embed/album/5WulAOx9ilWy1h8UGZ1gkI?utm_source=generator&theme=0'
          width='100%'
          height='520'
          allowFullScreen
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        />
      </div>
    </div>
  );
}

export default Hero;
