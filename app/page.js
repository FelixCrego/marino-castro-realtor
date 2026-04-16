import Link from "next/link";
import { SiteShell } from "../components/site-shell";

const metrics = [
  { value: "20+ Years", label: "Real estate experience" },
  { value: "Newark, NJ", label: "Serving surrounding New Jersey markets" },
  { value: "English / Spanish", label: "Clear communication throughout the process" }
];

const services = [
  {
    title: "Seller Representation",
    body:
      "Thoughtful pricing, elevated marketing, and steady negotiation for owners who want their property positioned with intention."
  },
  {
    title: "Buyer Guidance",
    body:
      "Clear advice, responsive communication, and local perspective for buyers who want a more composed experience from search to closing."
  },
  {
    title: "Investment Perspective",
    body:
      "Marino's investor background adds an extra layer of practical judgment when evaluating value, opportunity, and long-term positioning."
  }
];

const markets = [
  "Newark",
  "Essex County",
  "Hudson County",
  "Union County",
  "Middlesex County",
  "Passaic County"
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    body:
      "Start with a private conversation about the property, your timing, and what you want the result to be."
  },
  {
    step: "02",
    title: "Strategic Direction",
    body:
      "Marino helps shape the right next move with a clearer view of market fit, timing, and presentation."
  },
  {
    step: "03",
    title: "Confident Execution",
    body:
      "Once the plan is set, the process is handled with cleaner communication, steadier guidance, and fewer surprises."
  }
];

export default function HomePage() {
  return (
    <SiteShell currentPath="/">
      <section className="luxury-hero">
        <div className="container">
          <div className="luxury-hero-frame">
            <img
              src="/assets/hero-bg.webp"
              alt="Luxury New Jersey home exterior"
              className="luxury-hero-image"
            />
            <div className="luxury-hero-overlay" />

            <div className="luxury-hero-content luxury-hero-clean">
              <p className="eyebrow light-eyebrow">Marino Castro | New Jersey Realtor</p>
              <h1>Refined representation for New Jersey real estate.</h1>
              <p>
                Marino Castro offers a more private, strategy-led experience for
                buyers, sellers, and investors who value clear advice, strong
                presentation, and disciplined execution.
              </p>
              <div className="hero-actions">
                <Link className="button button-solid light-button" href="/contact-us">
                  Schedule Private Consultation
                </Link>
                <Link className="button button-ghost light" href="/about-us">
                  Meet Marino
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-metric-strip">
            {metrics.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section signature-section">
        <div className="container signature-grid clean-two-col">
          <div className="signature-copy">
            <p className="eyebrow">About Marino</p>
            <h2>A more composed real estate experience, built around judgment and trust.</h2>
            <p>
              Marino Castro is positioned for clients who want more than a
              generic transaction. The approach is calm, personal, and centered
              on making the right move for the property rather than forcing a
              one-size-fits-all process.
            </p>
            <p>
              His background in both real estate and investing adds perspective,
              but the brand stays focused on service, presentation, and results.
            </p>
          </div>

          <aside className="elegant-contact-card">
            <span>Private Consultation</span>
            <h3>Newark, New Jersey</h3>
            <p>
              Buyers, sellers, and select investors can reach out directly for a
              more private conversation.
            </p>
            <a href="tel:9738513790">(973) 851-3790</a>
            <a href="mailto:ocastro@buymyhome.net">ocastro@buymyhome.net</a>
          </aside>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="container">
          <div className="section-heading editorial-heading">
            <p className="eyebrow">Services</p>
            <h2>Representation designed to feel polished, clear, and personal.</h2>
          </div>

          <div className="luxury-card-grid">
            {services.map((item) => (
              <article className="luxury-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section market-section">
        <div className="container market-grid">
          <div className="market-copy">
            <p className="eyebrow">Markets</p>
            <h2>Focused on the New Jersey communities where local knowledge still matters.</h2>
            <p>
              Marino serves clients in and around Newark with a style that is
              more measured than the average high-volume real estate site.
            </p>
            <div className="market-list">
              {markets.map((market) => (
                <span key={market}>{market}</span>
              ))}
            </div>
          </div>

          <div className="market-visual">
            <img
              src="/assets/buying-house.webp"
              alt="Clients reviewing a home purchase"
            />
          </div>
        </div>
      </section>

      <section className="section process-minimal-section">
        <div className="container">
          <div className="section-heading center-heading">
            <p className="eyebrow">Process</p>
            <h2>A simple structure from first conversation to closing.</h2>
          </div>

          <div className="process-minimal-grid">
            {process.map((item) => (
              <article className="process-minimal-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta-panel">
          <p className="eyebrow">Get In Touch</p>
          <h2>Begin with a private conversation about your next move.</h2>
          <p>
            Reach out for buyer guidance, seller representation, or a more
            strategic discussion around a New Jersey property opportunity.
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
