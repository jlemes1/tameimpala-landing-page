function Footer() {
  return (
    <div className='bg-black flex flex-col justify-center items-center p-4 '>
      <p className='mb-2'>
        Developed by{' '}
        <a
          href='https://github.com/jlemes1'
          target='_blank'
          rel='noreferrer noopener'
          className='underline decoration-white'
        >
          Juan Lemes
        </a>{' '}
        - Project for portfolio.
      </p>
      <p>
        This is a fan project and is not affiliated with or endorsed by Tame
        Impala.
      </p>
    </div>
  );
}

export default Footer;
