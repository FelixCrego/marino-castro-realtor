import Link from "next/link";
import { SiteShell } from "../../components/site-shell";

export const metadata = {
  title: "About | Marino Castro",
  description: "Learn more about Marino Castro's real estate approach in New Jersey."
};

export default function AboutPage() {
  return (
    <SiteShell currentPath="/about-us">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">About</p>
          <h1>A more personal approach to New Jersey real estate.</h1>
          <p>
            Marino Castro is positioned for clients who value discretion, clear
            communication, and a more measured experience from first
            conversation to closing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container signature-grid clean-two-col">
          <div className="signature-copy">
            <h2>Experience, perspective, and local focus.</h2>
            <p>
              Marino&apos;s background combines years in real estate with an
              investor&apos;s understanding of property value, timing, and
              opportunity. That perspective helps clients make decisions with
              more clarity and less noise.
            </p>
            <p>
              The brand is intentionally presented with a cleaner, more refined
              feel: service-first, relationship-driven, and centered on New
              Jersey markets.
            </p>
          </div>

          <aside className="elegant-contact-card">
            <span>Based In</span>
            <h3>Newark, New Jersey</h3>
            <p>Serving surrounding communities with buyer, seller, and investment guidance.</p>
            <a href="tel:9738513790">(973) 851-3790</a>
            <a href="mailto:ocastro@buymyhome.net">ocastro@buymyhome.net</a>
          </aside>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta-panel">
          <p className="eyebrow">Private Consultation</p>
          <h2>Connect with Marino directly.</h2>
          <p>
            Reach out for a more thoughtful conversation about your next real
            estate move in New Jersey.
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
