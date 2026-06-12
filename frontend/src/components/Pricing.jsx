const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "$0",
      period: "forever",
      description: "Ideal for individuals starting out with digital finance and global transfers.",
      features: [
        { text: "Up to $2,000 monthly volume", active: true },
        { text: "Standard transfer speed (1-2 days)", active: true },
        { text: "Basic multi-currency wallet", active: true },
        { text: "Standard email support", active: true },
        { text: "Custom payment request links", active: false },
        { text: "Dedicated account manager", active: false }
      ],
      featured: false,
      btnText: "Get Started Free",
      btnClass: "btn-secondary"
    },
    {
      name: "Business Pro",
      price: "$29",
      period: "per month",
      description: "Perfect for growing online businesses and global freelancers needing instant settlements.",
      features: [
        { text: "Up to $50,000 monthly volume", active: true },
        { text: "Instant transfers & settlements", active: true },
        { text: "Advanced multi-currency wallet", active: true },
        { text: "24/7 Priority support (chat & call)", active: true },
        { text: "Custom payment request links", active: true },
        { text: "Dedicated account manager", active: false }
      ],
      featured: true,
      badge: "Most Popular",
      btnText: "Start Free Trial",
      btnClass: "btn-primary"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "Customized solutions for high-volume companies and financial platforms.",
      features: [
        { text: "Unlimited transaction volume", active: true },
        { text: "Instant transfers & custom API access", active: true },
        { text: "Fully customized multi-currency vaults", active: true },
        { text: "24/7 Dedicated enterprise support", active: true },
        { text: "Custom white-labeled checkout links", active: true },
        { text: "Dedicated account manager & audit logs", active: true }
      ],
      featured: false,
      btnText: "Contact Sales",
      btnClass: "btn-secondary"
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your business needs. No hidden setup fees or surprise charges.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card glass-panel ${plan.featured ? 'featured' : ''}`} key={index}>
              {plan.featured && <div className="pricing-badge">{plan.badge}</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="pricing-price">
                  <span className="price-val">{plan.price}</span>
                  <span className="price-period">/ {plan.period}</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} style={{ opacity: feature.active ? 1 : 0.5 }}>
                    <i className={`bx ${feature.active ? 'bx-check-circle' : 'bx-x-circle'}`}></i>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button className={plan.btnClass}>{plan.btnText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
