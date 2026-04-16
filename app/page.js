import Link from "next/link";
import { SiteShell } from "../components/site-shell";

const statItems = [
  { value: "20+ Years", label: "Real estate experience" },
  { value: "Buy • Sell • Invest", label: "Three clear ways Marino helps clients move" },
  { value: "English / Spanish", label: "Clear communication across every step" }
];

const serviceCards = [
  {
    title: "Buy with stronger guidance",
    body:
      "For buyers who want better market perspective, sharper positioning, and a calmer experience from search through closing."
  },
  {
    title: "Sell with confidence",
    body:
      "For owners who want thoughtful pricing, elevated presentation, and representation that feels measured instead of rushed."
  },
  {
    title: "Sell directly when it fits",
    body:
      "For owners who need a more direct investor solution, Marino also buys and helps evaluate cleaner off-market options."
  }
];

const directBuyPoints = [
  "Inherited property",
  "Tenant-occupied homes",
  "Properties needing repairs",
  "Vacant homes",
  "Timeline-sensitive sales",
  "Owners comparing listing vs. direct sale"
];

const markets = [
  "Newark",
  "Essex County",
  "Hudson County",
  "Union County",
  "Middlesex County",
  "Passaic County"
];

export default function HomePage() {
  return (
    <SiteShell currentPath="/">
      <section className="premium-home-hero">
        <div className="container">
          <div className="premium-home-hero-frame">
            <img
              src="/assets/hero-bg.webp"
              alt="Luxury New Jersey home exterior"
              className="premium-home-hero-image"
            />
            <div className="premium-home-hero-overlay" />

            <div className="premium-home-hero-grid">
              <div className="premium-home-copy">
                <p className="eyebrow light-eyebrow">
                  Marino Castro | New Jersey Realtor And Real Estate Investor
                </p>
                <h1>Buy well. Sell with confidence. Choose a direct buyer when it makes sense.</h1>
                <p>
                  Marino Castro works with buyers, sellers, and property owners
                  across New Jersey who want clearer guidance, stronger
                  representation, and a more practical path when a direct sale
                  is the better move.
                </p>
                <div className="hero-actions">
                  <Link className="button button-solid light-button" href="/contact-us">
                    Schedule Consultation
                  </Link>
                  <Link className="button button-ghost light" href="/about-us">
                    Learn More
                  </Link>
                </div>
              </div>

              <aside className="premium-marino-card">
                <div className="premium-marino-head">
                  <img
                    src="/assets/marino-profile.jpg"
                    alt="Marino Castro"
                    className="premium-marino-avatar"
                  />
                  <div>
                    <strong>Marino Castro</strong>
                    <span>Realtor | Real Estate Investor</span>
                  </div>
                </div>
                <p>
                  A more personal, strategy-led approach for clients who need
                  the right move, not a generic sales script.
                </p>
                <div className="premium-marino-tags">
                  <span>Buyer Guidance</span>
                  <span>Seller Representation</span>
                  <span>Direct Buying</span>
                </div>
              </aside>
            </div>
          </div>

          <div className="premium-stat-strip">
            {statItems.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-services-section">
        <div className="container">
          <div className="section-heading editorial-heading">
            <p className="eyebrow">How Marino Helps</p>
            <h2>Three ways to move forward in New Jersey real estate.</h2>
          </div>

          <div className="premium-service-grid">
            {serviceCards.map((item) => (
              <article className="premium-service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-dual-section">
        <div className="container premium-dual-grid">
          <div className="premium-panel premium-panel-light">
            <p className="eyebrow">Representation</p>
            <h2>List traditionally when market exposure is the right move.</h2>
            <p>
              Marino helps sellers approach pricing, presentation, negotiation,
              and timing with a cleaner plan designed to support value and
              confidence.
            </p>
          </div>

          <div className="premium-panel premium-panel-dark">
            <p className="eyebrow light-eyebrow">Direct Buy</p>
            <h2>Sell directly when simplicity matters more than putting it on the market.</h2>
            <p>
              Marino also buys and can help owners evaluate direct-sale options
              when the property or situation calls for a faster, more practical
              solution.
            </p>
            <div className="premium-point-grid">
              {directBuyPoints.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section split-showcase-section">
        <div className="container split-showcase-grid premium-showcase-grid">
          <div className="split-showcase-copy">
            <p className="eyebrow">Local Focus</p>
            <h2>Serving clients in and around Newark with a more polished experience.</h2>
            <p>
              The brand is meant to feel premium, direct, and composed. That
              means stronger communication, clearer strategy, and less of the
              noise that makes real estate feel transactional.
            </p>
            <div className="market-list">
              {markets.map((market) => (
                <span key={market}>{market}</span>
              ))}
            </div>
          </div>

          <div className="split-showcase-visual">
            <img
              src="/assets/buying-house.webp"
              alt="Clients reviewing a home purchase"
            />
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta-panel premium-final-cta">
          <p className="eyebrow">Get In Touch</p>
          <h2>Start with a conversation about the property and the goal.</h2>
          <p>
            Reach out for buyer guidance, seller representation, or a direct
            discussion about selling your property to an investor.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/contact-us">
              Contact Marino
            </Link>
            <a
              className="button button-ghost"
              href="https://www.instagram.com/marinocastro23/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
