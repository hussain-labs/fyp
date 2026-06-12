import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import FAQ from '../components/FAQ';

const PricingPage = () => {
  return (
    <main className="page-wrapper fade-in">
      <section className="page-header">
        <div className="container">
          <h1>Plans & <span>Pricing</span></h1>
          <p>Transparent pricing designed for every stage of your business — from individual transfers to enterprise-grade payment infrastructure.</p>
        </div>
      </section>

      <Pricing />
      <FAQ />
      <CallToAction />
    </main>
  );
};

export default PricingPage;
