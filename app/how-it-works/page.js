import Link from "next/link";
import { SiteShell } from "../../components/site-shell";

const steps = [
  {
    title: "Consultation",
    body:
      "Begin with a direct conversation about the property, your timing, and what matters most to you."
  },
  {
    title: "Positioning",
    body:
      "Marino helps shape the right strategy with a clearer view of market context, presentation, and next steps."
  },
  {
    title: "Execution",
    body:
      "Once the direction is defined, the transaction moves forward with steadier communication and cleaner expectations."
  }
];

export const metadata = {
  title: "Process | Marino Castro",
  description: "See Marino Castro's real estate process for buyers, sellers, and investors in New Jersey."
};

export default function HowItWorksPage() {
  return (
    <SiteShell currentPath="/how-it-works">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Process</p>
          <h1>A cleaner path from consultation to closing.</h1>
          <p>
            The process is designed to feel calm, direct, and tailored to the
            property rather than built around a generic sales script.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container process-minimal-grid">
          {steps.map((item, index) => (
            <article className="process-minimal-card" key={item.title}>
              <span>{`0${index + 1}`}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta-panel">
          <p className="eyebrow">Next Step</p>
          <h2>Start the conversation and define the right direction.</h2>
          <p>
            Reach out directly to discuss your property, timing, and the kind
            of outcome you want.
          </p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/contact-us">
              Contact Marino
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
