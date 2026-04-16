import Link from "next/link";
import { SiteShell } from "../components/site-shell";

const markets = [
  "Newark",
  "Essex County",
  "Hudson County",
  "Union County",
  "Middlesex County"
];

const serviceCards = [
  {
    title: "Buying your next home",
    body:
      "Work with an advisor who can help you move through the New Jersey market with clearer guidance, stronger positioning, and more confidence."
  },
  {
    title: "Selling your current home",
    body:
      "From pricing and presentation to negotiation and timing, Marino helps sellers approach the market with a cleaner strategy."
  },
  {
    title: "Investing with perspective",
    body:
      "For clients evaluating opportunities beyond a traditional move, Marino brings practical investor awareness without turning the brand into a wholesale site."
  }
];

const process = [
  {
    step: "01",
    title: "Start with the goal",
    body:
      "Buying, selling, relocating, or evaluating an opportunity starts with one direct conversation."
  },
  {
    step: "02",
    title: "Build the right plan",
    body:
      "Marino helps shape the right direction based on market context, timing, presentation, and your priorities."
  },
  {
    step: "03",
    title: "Move with confidence",
    body:
      "Once the strategy is clear, the process moves forward with steadier communication and cleaner expectations."
  }
];

export default function HomePage() {
  return (
    <SiteShell currentPath="/">
      <section className="broker-hero">
        <div className="container">
          <div className="broker-hero-frame">
            <img
              src="/assets/hero-bg.webp"
              alt="Luxury New Jersey home exterior"
              className="broker-hero-image"
            />
            <div className="broker-hero-overlay" />

            <div className="broker-hero-content">
              <p className="eyebrow light-eyebrow">Explore New Jersey Real Estate</p>
              <h1>Your next move starts with the right representation.</h1>
              <p>
                Marino Castro offers a cleaner, more personal real estate
                experience for buyers, sellers, and investors across New Jersey.
              </p>
            </div>

            <div className="broker-search-card">
              <div className="broker-search-tabs">
                <span>Buy</span>
                <span>Sell</span>
                <span>Invest</span>
              </div>
              <strong>Focused on the markets around Newark and beyond.</strong>
              <div className="broker-market-row">
                {markets.map((market) => (
                  <span key={market}>{market}</span>
                ))}
              </div>
              <div className="hero-actions">
                <Link className="button button-solid" href="/contact-us">
                  Work With Marino
                </Link>
                <Link className="button button-ghost" href="/about-us">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section brand-intro-section">
        <div className="container brand-intro-grid">
          <div>
            <p className="eyebrow">About Marino</p>
            <h2>Dedicated to a more refined New Jersey real estate experience.</h2>
          </div>
          <div>
            <p>
              Marino Castro is positioned for clients who want stronger
              guidance, cleaner communication, and a strategy that feels
              intentional from the first conversation.
            </p>
            <p>
              The brand is built to feel more like a high-end brokerage
              presence: direct, polished, and centered on service rather than
              generic lead-generation language.
            </p>
          </div>
        </div>
      </section>

      <section className="section service-editorial-section">
        <div className="container">
          <div className="section-heading editorial-heading">
            <p className="eyebrow">Services</p>
            <h2>Real estate guidance across the moments that matter most.</h2>
          </div>

          <div className="service-editorial-grid">
            {serviceCards.map((item) => (
              <article className="service-editorial-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href="/contact-us">Start here</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-showcase-section">
        <div className="container split-showcase-grid">
          <div className="split-showcase-visual">
            <img
              src="/assets/buying-house.webp"
              alt="Clients reviewing a home purchase"
            />
          </div>

          <div className="split-showcase-copy">
            <p className="eyebrow">Local Focus</p>
            <h2>Local market awareness with a more composed client experience.</h2>
            <p>
              Marino serves clients in and around Newark with an approach that
              feels more measured than the average high-volume real estate site.
            </p>
            <div className="market-list">
              {markets.map((market) => (
                <span key={market}>{market}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-minimal-section">
        <div className="container">
          <div className="section-heading center-heading">
            <p className="eyebrow">Process</p>
            <h2>A simple structure from consultation to closing.</h2>
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
          <h2>Connect directly with Marino Castro.</h2>
          <p>
            Reach out for buyer guidance, seller representation, or a more
            strategic conversation about your next New Jersey real estate move.
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
