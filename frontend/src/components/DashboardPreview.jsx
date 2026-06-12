const DashboardPreview = () => {
  return (
    <section className="dashboard-preview" id="how-it-works">
      <div className="container">
        <div className="preview-wrapper glass-panel fade-in">
          <div className="preview-content">
            <h2>Everything you need, in one powerful app</h2>
            <ul className="benefit-list">
              <li><i className='bx bx-check-circle'></i> Generate virtual cards instantly</li>
              <li><i className='bx bx-check-circle'></i> Real-time notifications for every transaction</li>
              <li><i className='bx bx-check-circle'></i> Multi-currency accounts with mid-market rates</li>
            </ul>
            <a href="#" className="btn-primary">Explore Features</a>
          </div>
          <div className="preview-mockup">
            <div className="mockup-header">
              <div className="dots"><span></span><span></span><span></span></div>
            </div>
            <div className="mockup-body">
              <div className="m-card main-balance">
                <p>Available Balance</p>
                <h2>$45,290.50</h2>
                <span className="trend up"><i className='bx bx-up-arrow-alt'></i> +12.5% this month</span>
              </div>
              <div className="m-transactions">
                <h4>Recent Activity</h4>
                <div className="t-item">
                  <div className="t-info">
                    <div className="t-icon"><i className='bx bx-coffee'></i></div>
                    <div>
                      <h5>Starbucks</h5>
                      <p>Food & Drink</p>
                    </div>
                  </div>
                  <div className="t-amount negative">-$4.50</div>
                </div>
                <div className="t-item">
                  <div className="t-info">
                    <div className="t-icon bg-purple"><i className='bx bx-briefcase'></i></div>
                    <div>
                      <h5>Upwork Escrow</h5>
                      <p>Income</p>
                    </div>
                  </div>
                  <div className="t-amount positive">+$1,250.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
