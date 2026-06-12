const GlobalNetwork = () => {
  const regions = [
    {
      name: "North America",
      speed: "Instant Payouts",
      rails: ["FedNow", "ACH", "Interac (Canada)", "Real-Time Payments"],
      volume: "$18.5B+ settled",
      icon: "bx-globe"
    },
    {
      name: "Europe & United Kingdom",
      speed: "< 2 seconds",
      rails: ["SEPA Instant", "Faster Payments (UK)", "EBA Clearing"],
      volume: "$14.2B+ settled",
      icon: "bx-map-alt"
    },
    {
      name: "Latin America",
      speed: "Real-Time",
      rails: ["Pix (Brazil)", "SPEI (Mexico)", "PSE (Colombia)"],
      volume: "$8.9B+ settled",
      icon: "bx-navigation"
    },
    {
      name: "Asia Pacific",
      speed: "< 5 seconds",
      rails: ["UPI (India)", "PromptPay (Thailand)", "PayNow (Singapore)"],
      volume: "$11.6B+ settled",
      icon: "bx-trip"
    }
  ];

  return (
    <section className="global-network" id="global-network">
      <div className="container">
        <div className="section-header">
          <h2>Borderless Settlement Rails</h2>
          <p>We connect digital assets directly into local retail banking networks worldwide for instant, zero-friction payouts.</p>
        </div>

        <div className="regions-grid">
          {regions.map((region, index) => (
            <div className="region-card glass-panel" key={index}>
              <div className="region-header">
                <h3>
                  <i className={`bx ${region.icon}`} style={{ marginRight: '0.5rem', color: 'var(--primary)' }}></i>
                  {region.name}
                </h3>
                <span className="speed-tag">{region.speed}</span>
              </div>
              <div className="region-rails">
                {region.rails.map((rail, rIndex) => (
                  <span className="rail-badge" key={rIndex}>{rail}</span>
                ))}
              </div>
              <div className="region-stats">
                <p>Volume Processed</p>
                <h4>{region.volume}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
