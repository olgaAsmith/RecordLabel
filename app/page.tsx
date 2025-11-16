import Artists from './components/Artists/Artists';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Description />
      <Artists />
    </div>
  );
}
