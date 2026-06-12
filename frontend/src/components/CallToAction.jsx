const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box glass-panel">
          <h2>Ready to transform your finances?</h2>
          <p>Join millions of users who are already experiencing the future of payments.</p>
          <form className="cta-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn-secondary">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
