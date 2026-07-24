
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Gallery from './components/Gallery';
import WhatIsCapoeira from './components/WhatIsCapoeira';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Instructors from './components/Instructors';
import Videos from './components/Videos';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Gallery />
        <WhatIsCapoeira />
        <Schedule />
        <Location />
        <Instructors />
        <Videos />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
