const Contact = () => {
  return (
    <main className="page-wrapper fade-in">
      <section className="page-header">
        <div className="container">
          <div className="badge">Get in Touch</div>
          <h1>We'd Love to <span>Hear From You</span></h1>
          <p>Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.</p>
        </div>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          <div className="contact-info glass-panel">
            <h2>Contact Information</h2>
            <p>Reach out to us through any of these channels, and we will get back to you within 24 hours.</p>
            
            <div className="info-item">
              <i className='bx bx-envelope'></i>
              <div>
                <h4>Email</h4>
                <p>support@paychain.inc</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className='bx bx-phone'></i>
              <div>
                <h4>Phone</h4>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className='bx bx-map'></i>
              <div>
                <h4>Headquarters</h4>
                <p>123 Innovation Drive<br/>Tech City, CA 94000</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form glass-panel">
            <h2>Send us a message</h2>
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
