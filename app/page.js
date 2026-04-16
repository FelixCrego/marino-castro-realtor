import Link from "next/link";
import { PrivateConsultationCard } from "../components/private-consultation-card";
import { SiteShell } from "../components/site-shell";

const metrics = [
  { value: "20+ Years", label: "Real estate experience" },
  { value: "NJ Focused", label: "Serving Newark and surrounding markets" },
  { value: "English / Spanish", label: "Clear communication at every step" }
];

const services = [
  {
    title: "Seller representation",
    body:
      "Thoughtful pricing, elevated presentation, and measured negotiation for owners who want strong market positioning."
  },
  {
    title: "Complex property guidance",
    body:
      "Support for inherited homes, tenant situations, probate timelines, distressed property, and owners who need clarity fast."
  },
  {
    title: "Investor perspective",
    body:
      "Marino combines the lens of a realtor with real investor logic, so the recommendation fits the property instead of forcing a generic path."
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
    title: "Private discovery",
    body:
      "Start with a direct conversation about the property, timing, and what you want the outcome to be."
  },
  {
    step: "02",
    title: "Strategic recommendation",
    body:
      "Marino helps determine whether listing, direct sale, or another route makes the most sense for your market and situation."
  },
  {
    step: "03",
    title: "Confident execution",
    body:
      "Once the direction is clear, the transaction is managed with cleaner communication and fewer surprises."
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

            <div className="luxury-hero-content">
              <p className="eyebrow light-eyebrow">
                Marino Castro | New Jersey Realtor And Investor
              </p>
              <h1>Clean, high-end real estate guidance for New Jersey sellers and buyers.</h1>
              <p>
                A more private, polished approach for clients who need strong
                market judgment, investor-level insight, and a clearer path
                forward.
              </p>
              <div className="hero-actions">
                <Link className="button button-solid light-button" href="/contact-us">
                  Schedule Consultation
                </Link>
                <a
                  className="button button-ghost light"
                  href="https://www.instagram.com/marinocastro23/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Instagram
                </a>
              </div>
            </div>

            <div className="hero-signature-card">
              <img src="/assets/marino-profile.jpg" alt="Marino Castro" />
              <div>
                <strong>Marino Castro</strong>
                <span>Realtor, investor, and bilingual advisor based in New Jersey</span>
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
        <div className="container signature-grid">
          <div className="signature-copy">
            <p className="eyebrow">Private Advisory</p>
            <h2>Representation that feels measured, not transactional.</h2>
            <p>
              The site is now centered around a quieter luxury feel: strong
              photography, restrained typography, and focused messaging instead
              of a busy lead-generation layout.
            </p>
            <p>
              Marino&apos;s positioning works best when it feels credible and
              composed. That means clear seller strategy, investor-grade
              judgment, and guidance for complex property situations without
              turning the brand into a cash-buyer template.
            </p>

            <div className="signature-note">
              <span>Core Positioning</span>
              <p>
                Licensed real estate guidance with practical experience across
                distressed, inherited, tenant-occupied, and value-add property
                decisions in New Jersey.
              </p>
            </div>
          </div>

          <aside className="consultation-rail">
            <PrivateConsultationCard />
          </aside>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="container">
          <div className="section-heading editorial-heading">
            <p className="eyebrow">What Marino Brings</p>
            <h2>A more refined client experience across traditional and complex sales.</h2>
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
          <div className="market-visual">
            <img
              src="/assets/buying-house.webp"
              alt="Clients reviewing a home purchase"
            />
          </div>

          <div className="market-copy">
            <p className="eyebrow">Primary Markets</p>
            <h2>Focused on the New Jersey markets where relationships and timing matter.</h2>
            <p>
              Marino serves clients in and around Newark with a style that is
              calm, direct, and more tailored than the average high-volume real
              estate site.
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
          <p className="eyebrow">Start The Conversation</p>
          <h2>Discuss the property privately and choose the strategy that fits.</h2>
          <p>
            Reach out for listing guidance, a second opinion on a direct sale,
            or help navigating a more complex New Jersey property situation.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/contact-us">
              Contact Marino
            </Link>
            <Link className="button button-ghost" href="/about-us">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
