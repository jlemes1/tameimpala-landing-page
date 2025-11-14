import Header from './components/Header';
import Hero from './components/Hero';
import Divider from './components/Divider';
import Tour from './pages/Tour';
import Discography from './pages/Discography';
import History from './pages/History';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header id='header'>
        <Header />
      </header>
      <main id='main' className='pt-26 pb-26'>
        <section id='hero'>
          <Hero />
        </section>
        <div className='pb-26' />
        <Divider />
        <section id='tour'>
          <Tour />
        </section>
        <div className='pb-26' />
        <Divider />
        <section id='discography'>
          <Discography />
        </section>
        <div className='pb-26' />
        <Divider />
        <section id='history'>
          <History />
        </section>
      </main>
      <footer id='footer'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
