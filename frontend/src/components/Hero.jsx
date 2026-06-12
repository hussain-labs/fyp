import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">🚀 The #1 Payment Network</div>
          <h1>Seamless Global <span>Transactions</span> Without Limits</h1>
          <p>Experience the next generation of digital finance. Send, receive, and manage your money worldwide with zero hidden fees and bank-grade security.</p>
          <div className="hero-btns">
            <a href="#" className="btn-primary btn-large">Open Free Account <i className='bx bx-right-arrow-alt'></i></a>
            <a href="#" className="btn-secondary btn-large"><i className='bx bx-play-circle'></i> Watch Demo</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>$50B+</h3>
              <p>Volume Processed</p>
            </div>
            <div className="stat-item">
              <h3>2M+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>190+</h3>
              <p>Countries Supported</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper glass-panel">
            <img src={heroImg} alt="PayChain Global Network Illustration" />
            
            {/* Floating UI elements */}
            <div className="floating-card transfer-card">
              <div className="f-icon"><i className='bx bx-transfer'></i></div>
              <div className="f-text">
                <h4>Transfer Sent</h4>
                <p>$2,500 to Muzamil</p>
              </div>
              <div className="f-amount success">Success</div>
            </div>

            <div className="floating-card balance-card">
              <p>Total Balance</p>
              <h3>$124,560.00</h3>
              <div className="f-chart">
                <span className="bar b1"></span>
                <span className="bar b2"></span>
                <span className="bar b3"></span>
                <span className="bar b4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
