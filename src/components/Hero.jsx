function Hero() {
  return (
    <section
      id='hero'
      className='grid grid-cols-1 md:grid-cols-2 mt-25 uppercase bg-black p-5 md:p-10 mx-5 md:mx-20 rounded-xl'
    >
      <div className='flex flex-col items-center justify-center gap-4 mb-8 md:mb-0'>
        <h2 className='text-3xl md:text-5xl '>Deadbeat</h2>
        <span className='text-xl md:text-3xl '>out now</span>
      </div>
      <div>
        <iframe
          data-testid='embed-iframe'
          style={{ borderRadius: '12px' }}
          src='https://open.spotify.com/embed/album/5WulAOx9ilWy1h8UGZ1gkI?utm_source=generator&theme=0'
          width='100%'
          height='450'
          allowFullScreen
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        />
      </div>
    </section>
  );
}

export default Hero;
