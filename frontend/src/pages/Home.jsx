import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import DashboardPreview from '../components/DashboardPreview';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <DashboardPreview />
      <CallToAction />
    </main>
  );
};

export default Home;
