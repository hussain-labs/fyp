import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import DashboardPreview from '../components/DashboardPreview';
import CurrencyConverter from '../components/CurrencyConverter';
import HowItWorks from '../components/HowItWorks';
import GlobalNetwork from '../components/GlobalNetwork';

import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <DashboardPreview />
      <CurrencyConverter />
      <HowItWorks />
      <GlobalNetwork />

      <FAQ />
      <CallToAction />
    </main>
  );
};

export default Home;
