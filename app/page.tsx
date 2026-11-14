import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Background from '@/components/Background';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}