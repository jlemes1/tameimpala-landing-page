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
      <div id='header' />
      <Header />
      <main id='main' className='pt-26 pb-26'>
        <Hero />
        <div id='divider' className='pb-26' />
        <Divider />
        <div id='tour' />
        <Tour />
        <div id='divider' className='pb-26' />
        <Divider />
        <div id='discography' />
        <Discography />
        <div id='divider' className='pb-26' />
        <Divider />
        <div id='history' />
        <History />
      </main>
      <footer id='footer'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
