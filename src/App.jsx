import Header from './components/Header';
import Hero from './components/Hero';
import Divider from './components/Divider';
import Tour from './pages/Tour';
import Discography from './pages/Discography';

function App() {
  return (
    <>
      <div id='header' />
      <Header />
      <main id='main' className='pt-26'>
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
      </main>
    </>
  );
}

export default App;
