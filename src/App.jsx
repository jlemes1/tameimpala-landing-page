import Header from './components/Header';
import Hero from './components/Hero';
import Divider from './components/Divider';
import Tour from './pages/Tour';
import Discography from './pages/Discography';
import History from './pages/History';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Divider />
        <Tour />
        <Divider />
        <Discography />
        <Divider />
        <History />
      </Main>
      <Footer />
    </>
  );
}

export default App;
