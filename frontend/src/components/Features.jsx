const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose PayChain?</h2>
          <p>We combine cutting-edge technology with intuitive design to give you the ultimate financial experience.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card glass-panel fade-in">
            <div className="icon-box"><i className='bx bx-bolt-circle'></i></div>
            <h3>Lightning Fast</h3>
            <p>Settle cross-border transactions in seconds, not days. Our optimized routing ensures your money arrives instantly.</p>
          </div>
          
          <div className="feature-card glass-panel fade-in">
            <div className="icon-box"><i className='bx bx-shield-quarter'></i></div>
            <h3>Bank-Grade Security</h3>
            <p>Protected by state-of-the-art encryption and fraud monitoring systems working 24/7 to keep your funds safe.</p>
          </div>
          
          <div className="feature-card glass-panel fade-in">
            <div className="icon-box"><i className='bx bx-line-chart'></i></div>
            <h3>Smart Analytics</h3>
            <p>Gain deep insights into your spending habits with our AI-powered categorization and visual dashboards.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
