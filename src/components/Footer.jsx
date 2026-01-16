function Footer() {
  return (
    <footer
      id='footer'
      className='bg-black flex flex-col justify-center items-center p-4 '
    >
      <p className='mb-2'>
        © {new Date().getFullYear()} Developed by{' '}
        <a
          href='https://github.com/jlemes1'
          target='_blank'
          rel='noreferrer noopener'
          className='underline decoration-white'
        >
          Juan Lemes
        </a>
        . Project for portfolio.
      </p>
    </footer>
  );
}

export default Footer;
