const About = () => {
  return (
    <main className="page-wrapper fade-in">
      <section className="page-header">
        <div className="container">
          <div className="badge">Our Story</div>
          <h1>Redefining the Future of <span>Finance</span></h1>
          <p>We are on a mission to democratize global payments, making cross-border transactions as easy as sending a text message.</p>
        </div>
      </section>

      <section className="about-content container">
        <div className="about-grid">
          <div className="about-text glass-panel">
            <h2>Our Vision</h2>
            <p>Founded in 2026, PayChain was built on a simple premise: the legacy financial system is too slow, too expensive, and too exclusive. We set out to build a platform that leverages cutting-edge technology to give everyone access to instantaneous, zero-fee global transfers.</p>
            <p>Today, millions of users trust PayChain to handle their personal and business finances securely and efficiently.</p>
          </div>
          <div className="about-stats glass-panel">
            <div className="a-stat">
              <h3>$100B+</h3>
              <p>Total Processed</p>
            </div>
            <div className="a-stat">
              <h3>5M+</h3>
              <p>Global Users</p>
            </div>
            <div className="a-stat">
              <h3>400+</h3>
              <p>Team Members</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
