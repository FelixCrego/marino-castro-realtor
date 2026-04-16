import Link from "next/link";
import { OfferForm } from "../components/offer-form";
import { SiteShell } from "../components/site-shell";

const highlights = [
  { value: "20+ Years", label: "Real estate experience" },
  { value: "410", label: "Instagram followers" },
  { value: "218", label: "Public posts and updates" }
];

const serviceCards = [
  {
    image: "/assets/no-hidden-fees.webp",
    title: "Representation with strategy",
    body:
      "Work with Marino on pricing, positioning, negotiations, and the right plan for your next move in New Jersey."
  },
  {
    image: "/assets/no-repairs.webp",
    title: "Direct-sale solutions",
    body:
      "If speed matters more than showings and prep work, Marino can help evaluate direct investor options and as-is scenarios."
  },
  {
    image: "/assets/no-staging.webp",
    title: "Investor-minded guidance",
    body:
      "From off-market conversations to value-add opportunities, the site is built for owners and investors who need practical options."
  }
];

const scenarios = [
  "Inherited property",
  "Vacant homes",
  "Fire-damaged houses",
  "Probate situations",
  "Tenant issues",
  "Outdated rentals",
  "Off-market opportunities",
  "Seller financing conversations"
];

const processSteps = [
  {
    title: "Start with your goal",
    body:
      "Tell Marino whether you want to list, buy, invest, or explore a direct sale. The first conversation is about fit, not pressure."
  },
  {
    title: "Review the property and market fit",
    body:
      "You get a realistic look at condition, timeline, and whether a retail listing or investor path makes more sense."
  },
  {
    title: "Move with a clear plan",
    body:
      "Once the strategy is set, Marino helps you execute with confidence, from walkthrough to contract to closing."
  }
];

const comparisonRows = [
  {
    label: "Best fit",
    listing: "Owners focused on market exposure and maximizing retail price",
    direct: "Owners prioritizing convenience, speed, or distressed-property solutions"
  },
  {
    label: "Repairs",
    listing: "Recommended when presentation affects value",
    direct: "Can often be sold as-is"
  },
  {
    label: "Showings",
    listing: "Buyer traffic, listing prep, and agent coordination",
    direct: "Private review with fewer moving parts"
  },
  {
    label: "Timeline",
    listing: "Depends on market response and financing",
    direct: "Flexible and often faster"
  },
  {
    label: "Strategy",
    listing: "MLS exposure, pricing, and negotiation",
    direct: "Problem-solving around condition, equity, and speed"
  }
];

export default function HomePage() {
  return (
    <SiteShell currentPath="/">
      <section className="section home-hero">
        <div className="container hero-surface">
          <div className="hero-copy hero-copy-closer">
            <p className="eyebrow">New Jersey Real Estate Agent And Investor</p>
            <h1>Clear real estate options for sellers, buyers, and investors in NJ.</h1>
            <p className="hero-subtitle">
              God first. Family focused. Practical guidance backed by real
              estate experience.
            </p>
            <p className="hero-text">
              Marino Castro helps clients navigate listings, investment
              opportunities, and direct-sale situations without unnecessary
              friction. The public Instagram profile highlights the same values
              seen throughout the business: faith, family, and a real estate
              mindset built around action.
            </p>
            <div className="hero-actions">
              <Link className="button button-solid" href="/contact-us">
                Book A Call
              </Link>
              <Link className="button button-ghost" href="/about-us">
                Learn More
              </Link>
            </div>
            <div className="trust-grid trust-grid-closer">
              {highlights.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-column">
            <div className="hero-image-panel">
              <img
                src="/assets/hero-bg.webp"
                alt="A residential property exterior"
                className="hero-background-image"
              />
              <div className="hero-badge">
                <img
                  src="/assets/marino-profile.jpg"
                  alt="Marino Castro"
                  className="hero-badge-avatar"
                />
                <div>
                  <strong>Marino Castro</strong>
                  <span>Real estate agent, investor, and Spanish-speaking advisor</span>
                </div>
              </div>
            </div>
            <div className="hero-form-card">
              <OfferForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-split">
          <div className="feature-copy-block">
            <div className="mini-profile">
              <img
                src="/assets/marino-profile.jpg"
                alt="Marino Castro profile"
                className="mini-avatar"
              />
              <div>
                <strong>Marino Castro</strong>
                <span>Based in Newark and serving surrounding New Jersey communities</span>
              </div>
            </div>
            <p className="eyebrow">Built Around Real Situations</p>
            <h2>Licensed-agent thinking with investor-level practicality.</h2>
            <p>
              Public business listings describe Marino as a real estate
              investor, wholesaler, and licensed agent with more than 20 years
              in the industry. That combination matters because not every
              property or client goal belongs in the same sales process.
            </p>
            <p>
              Some sellers need full market representation. Others need direct
              answers around repairs, probate, vacancies, or difficult tenants.
              This site is positioned to support both conversations.
            </p>
          </div>

          <div className="portrait-card">
            <img
              src="/assets/buying-house.webp"
              alt="A buyer receiving keys to a home"
            />
          </div>
        </div>
      </section>

      <section className="section condition-section" id="services">
        <div className="container">
          <div className="section-heading center-heading">
            <p className="eyebrow">Services</p>
            <h2>One brand, multiple ways to solve the deal.</h2>
            <p>
              The structure follows the premium feel of the reference site, but
              the messaging is tuned for Marino&apos;s NJ audience and public
              profile.
            </p>
          </div>

          <div className="card-grid thirds">
            {serviceCards.map((item) => (
              <article className="info-card image-card" key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="section-card-image"
                />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark testimonial-band">
        <div className="container">
          <div className="section-heading light-heading center-heading">
            <p className="eyebrow">Common Situations</p>
            <h2>Problems Marino is already positioned to help solve.</h2>
            <p>
              Public bio details point to experience with distressed assets,
              vacant properties, and motivated-seller situations, not just
              standard retail transactions.
            </p>
          </div>

          <div className="pill-grid">
            {scenarios.map((item) => (
              <span className="scenario-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading center-heading">
            <p className="eyebrow">How It Works</p>
            <h2>A simple process whether you are listing, investing, or selling direct.</h2>
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
            <p className="eyebrow">Two Paths</p>
            <h2>Not every property should follow the same playbook.</h2>
            <p>
              Marino can help evaluate whether your situation belongs in a
              traditional listing strategy or a direct investor-style solution.
            </p>
          </div>

          <div className="comparison-card">
            <div className="comparison-head">
              <span>Decision Point</span>
              <span>List With Marino</span>
              <span>Direct Sale Option</span>
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
              <p className="eyebrow">Next Step</p>
              <h2>Start the conversation before the property starts costing you time.</h2>
              <p>
                Reach out for a listing strategy, an investment conversation, or
                a direct-solution review. Marino&apos;s public social profiles and
                business bio point to the same thing: this is a relationship-led
                real estate brand, not a generic lead form.
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
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
