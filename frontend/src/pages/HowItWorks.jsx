const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: "bx-user-plus",
      title: "Create Account",
      description: "Sign up in seconds on mobile or web. No complex paperwork, just seamless onboarding with secure identity verification."
    },
    {
      number: "02",
      icon: "bx-wallet",
      title: "Connect Wallet & Funding",
      description: "Securely link your cryptocurrency wallets or your local bank account. Fund your balance with zero hidden deposit fees."
    },
    {
      number: "03",
      icon: "bx-send",
      title: "Send & Receive Globally",
      description: "Transfer funds to anyone in over 190 countries instantly. Recipient can withdraw instantly to local banks, cards, or digital wallets."
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How PayChain Works</h2>
          <p>Get started with secure borderless global transactions in three simple steps.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card glass-panel" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                <i className={`bx ${step.icon}`}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
