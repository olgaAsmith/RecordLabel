import Artists from './components/Artists/Artists';
import ScrollUpButton from './components/Base/ScrollUpButton/ScrollUpButton';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import History from './components/History/History';
import Join from './components/Join/Join';
import Partners from './components/Partners/Partners';
import PhotoLine from './components/PhotoLine/PhotoLine';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Hero />
        <Description />
        <Artists />
        <History />
        <PhotoLine />
        <Roadmap />
        <Team />
        <Partners />
        <Join />
      </main>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}
