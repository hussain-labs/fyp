import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Is PayChain safe and secure to use?",
      answer: "Absolutely. PayChain uses bank-grade AES-256 encryption, multi-signature authentication, and fully secure smart contracts. All balances are fully backed 1:1, and we strictly comply with all local financial regulations."
    },
    {
      question: "What cryptocurrency wallets and networks do you support?",
      answer: "We support major networks including Ethereum (ERC-20), Solana (SPL), Polygon, and Bitcoin. You can connect standard Web3 wallets like MetaMask, Phantom, Coinbase Wallet, or link directly via email/social logins."
    },
    {
      question: "How long does a global transaction take to settle?",
      answer: "On our blockchain network, transactions settle instantly (typically in under 5 seconds). If you withdraw funds to a local bank account, settlements can take anywhere from instant to 24 hours depending on bank processing systems."
    },
    {
      question: "Are there any hidden exchange rate markups or fees?",
      answer: "No. PayChain operates with complete transparency. We offer real-time mid-market exchange rates, and any transaction fees (which are negligible, usually under 0.1%) are clearly shown upfront before you hit confirm."
    },
    {
      question: "Do I need a business license to open an account?",
      answer: "No, anyone can open a Starter account for personal transfers or freelancing payments. If you wish to scale to Business Pro or custom enterprise volume limits, we will request standard business verification documents."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about borderless blockchain payments with PayChain.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <div 
                className="faq-question" 
                onClick={() => handleToggle(index)}
              >
                <span>{item.question}</span>
                <i className='bx bx-chevron-down'></i>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
