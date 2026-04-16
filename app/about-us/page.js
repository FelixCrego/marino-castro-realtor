import Link from "next/link";
import { SiteShell } from "../../components/site-shell";

export const metadata = {
  title: "About Us | Marino Castro",
  description: "Learn about Marino Castro's New Jersey real estate and investment approach."
};

export default function AboutPage() {
  return (
    <SiteShell currentPath="/about-us">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">About Us</p>
          <h1>Built for clients who need real estate options, not generic pitches.</h1>
          <p>
            Marino Castro&apos;s public profile combines faith, family values, and
            real estate experience with a practical investor mindset.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <h2>New Jersey focus, practical execution.</h2>
            <p>
              Public business listings describe Marino as a real estate
              investor, wholesaler, and licensed agent with more than 20 years
              in the industry. That blend shapes how the site is written: clear
              strategy, direct communication, and flexibility around the kind of
              transaction you actually need.
            </p>
            <p>
              The positioning is intentionally broader than a standard
              agent-only site. It speaks to homeowners, investors, and families
              dealing with inherited homes, repairs, vacancies, or timing
              pressure across New Jersey.
            </p>
          </div>
          <div className="info-card profile-card">
            <strong>Base</strong>
            <p>Newark, NJ and surrounding communities</p>
            <strong>Phone</strong>
            <a href="tel:9738513790">(973) 851-3790</a>
            <strong>Email</strong>
            <a href="mailto:ocastro@buymyhome.net">ocastro@buymyhome.net</a>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container narrow center-text">
          <p className="eyebrow">Core Positioning</p>
          <h2>Representation when the market makes sense. Direct solutions when it does not.</h2>
          <p>
            Marino&apos;s edge is not forcing every client into one lane. The right
            answer might be a strategic listing, an investor conversation, or a
            faster as-is solution.
          </p>
          <Link className="button button-solid" href="/contact-us">
            Start The Conversation
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
