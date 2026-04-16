import Link from "next/link";
import { OfferForm } from "../components/offer-form";
import { SiteShell } from "../components/site-shell";

const highlights = [
  { value: "20+ Years", label: "Real estate experience" },
  { value: "Agent + Investor", label: "Two perspectives, one strategy" },
  { value: "English / Spanish", label: "Clear communication for more families" }
];

const valueProps = [
  {
    title: "Strategic listing guidance",
    body:
      "When maximizing market value is the right play, Marino positions the property with clear pricing, presentation, and negotiation strategy."
  },
  {
    title: "Direct-sale flexibility",
    body:
      "When time, repairs, probate, or tenant issues are driving the decision, Marino can help evaluate cleaner off-market solutions."
  },
  {
    title: "Investor-level analysis",
    body:
      "Marino's background in investing, wholesaling, and acquisitions brings sharper judgment to pricing, upside, and deal structure."
  }
];

const expertiseCards = [
  {
    title: "Distressed and inherited property",
    body:
      "Public business bio details point to experience with probate, vacant homes, fire damage, foreclosures, and owners who need a practical path forward."
  },
  {
    title: "Faith, family, and trust",
    body:
      "Marino's public profile emphasizes a faith-first, family-focused approach, which is reflected in the tone of the brand and the client experience."
  },
  {
    title: "NJ local knowledge",
    body:
      "The site is written for New Jersey property owners, buyers, and investors who want clear recommendations instead of generic national-template advice."
  }
];

const serviceAreas = [
  "Newark",
  "Essex County",
  "Union County",
  "Middlesex County",
  "Hudson County",
  "Passaic County"
];

const processSteps = [
  {
    title: "Start with a private conversation",
    body:
      "Share the property, your timing, and what you're trying to accomplish. Marino starts by identifying the right strategy, not forcing a canned process."
  },
  {
    title: "Review the strongest path",
    body:
      "You'll get a grounded recommendation based on condition, equity, location, and market fit, whether that's listing, buying, investing, or a direct sale."
  },
  {
    title: "Move forward with clarity",
    body:
      "Once the approach is set, Marino helps manage the next steps cleanly so the transaction feels controlled, not chaotic."
  }
];

const comparisonRows = [
  {
    label: "Ideal situation",
    listing: "Owners who want full market exposure and retail pricing strategy",
    direct: "Owners who care more about simplicity, speed, or condition-based flexibility"
  },
  {
    label: "Property condition",
    listing: "May benefit from selective prep and presentation",
    direct: "Often works best for as-is properties"
  },
  {
    label: "Buyer activity",
    listing: "Showings, staging decisions, and open-market interest",
    direct: "Private review with fewer moving parts"
  },
  {
    label: "Timeline",
    listing: "Depends on demand, financing, and inspections",
    direct: "Often faster and more controlled"
  },
  {
    label: "Decision style",
    listing: "Best for owners optimizing price",
    direct: "Best for owners optimizing convenience"
  }
];

export default function HomePage() {
  return (
    <SiteShell currentPath="/">
      <section className="section home-hero">
        <div className="container hero-stage">
          <div className="hero-primary">
            <div className="hero-portrait-shell">
              <div className="hero-portrait-glow" />
              <div className="hero-portrait-frame">
                <img
                  src="/assets/marino-profile.jpg"
                  alt="Marino Castro"
                  className="hero-portrait-large"
                />
              </div>
              <div className="hero-portrait-caption">
                <strong>Marino Castro</strong>
                <span>Realtor, investor, and bilingual advisor in New Jersey</span>
              </div>
            </div>

            <div className="hero-copy hero-copy-minimal">
              <p className="eyebrow">Marino Castro | New Jersey Realtor And Investor</p>
              <h1>Talk through the property before you choose the wrong strategy.</h1>
              <p className="hero-text">
                From inherited homes and tenant issues to urgent timelines and
                as-is sales, Marino helps New Jersey owners decide whether to
                list, sell directly, or take a more strategic next step.
              </p>
              <div className="hero-actions">
                <Link className="button button-solid" href="/contact-us">
                  Schedule Consultation
                </Link>
                <Link className="button button-ghost" href="/how-it-works">
                  View Process
                </Link>
              </div>
              <div className="trust-grid trust-grid-closer trust-grid-compact">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="hero-form-card sticky-form-card">
            <OfferForm />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container feature-split">
          <div className="feature-copy-block">
            <p className="eyebrow">Premium Service</p>
            <h2>Need to make the right move in New Jersey real estate?</h2>
            <p>
              This brand is designed for clients who want judgment, discretion,
              and flexibility. Marino helps sellers who need market exposure,
              owners who want a cleaner direct-sale route, buyers who need
              stronger representation, and investors looking for clearer deal
              analysis.
            </p>
            <p>
              Instead of pushing every client toward the same answer, the site
              is structured around a premium consultative approach: understand
              the property first, define the objective second, then choose the
              right execution path.
            </p>
          </div>

          <div className="portrait-card">
            <img
              src="/assets/buying-house.webp"
              alt="Clients completing a home purchase"
            />
          </div>
        </div>
      </section>

      <section className="section accent-section">
        <div className="container">
          <div className="section-heading center-heading">
            <p className="eyebrow">What You Get</p>
            <h2>Clean advice, elevated presentation, and realistic execution.</h2>
          </div>

          <div className="card-grid thirds">
            {valueProps.map((item) => (
              <article className="info-card" key={item.title}>
                <span className="mini-tag">Premium</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-layout align-start">
          <div className="section-heading light-heading">
            <p className="eyebrow">Why Marino</p>
            <h2>The value of working with an agent who understands investor logic.</h2>
            <p>
              Marino's public profile presents a combination that most polished
              brokerage sites do not: faith-led communication, family-centered
              trust, and real experience across investor-grade property
              decisions.
            </p>
          </div>

          <div className="location-panel">
            <span>Primary Markets</span>
            <ul>
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container card-grid thirds expertise-grid">
          {expertiseCards.map((item) => (
            <article className="info-card dark-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading center-heading">
            <p className="eyebrow">How It Works</p>
            <h2>A straightforward process designed to feel private and polished.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((item, index) => (
              <article className="process-step-card" key={item.title}>
                <span className="step-index">Step {index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container">
          <div className="section-heading center-heading">
            <p className="eyebrow">A Fair Comparison</p>
            <h2>List traditionally when it serves the goal. Move directly when it does not.</h2>
            <p>
              Marino can help you weigh the difference between a full retail
              strategy and a more direct investor-oriented solution.
            </p>
          </div>

          <div className="comparison-card">
            <div className="comparison-head">
              <span>Decision Point</span>
              <span>Traditional Listing</span>
              <span>Direct Solution</span>
            </div>
            {comparisonRows.map((row) => (
              <div className="comparison-row" key={row.label}>
                <span>{row.label}</span>
                <span>{row.listing}</span>
                <span>{row.direct}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-panel cta-panel-closer">
            <div>
              <p className="eyebrow">Private Consultation</p>
              <h2>Talk through the property before you commit to the wrong strategy.</h2>
              <p>
                Reach out for listing guidance, a direct-sale review, or an
                investment conversation. The experience is designed to feel
                clean, premium, and specific to your situation.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button button-solid" href="/contact-us">
                Contact Marino
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
        </div>
      </section>
    </SiteShell>
  );
}
