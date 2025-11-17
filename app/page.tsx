import Artists from './components/Artists/Artists';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import History from './components/History/History';
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
      </main>
    </div>
  );
}
