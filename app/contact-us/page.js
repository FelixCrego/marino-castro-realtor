import { PrivateConsultationCard } from "../../components/private-consultation-card";
import { SiteShell } from "../../components/site-shell";

export const metadata = {
  title: "Contact | Marino Castro",
  description: "Schedule a private real estate consultation with Marino Castro in New Jersey."
};

export default function ContactPage() {
  return (
    <SiteShell currentPath="/contact-us">
      <section className="page-hero contact-hero-clean">
        <div className="container signature-grid clean-two-col">
          <div className="signature-copy">
            <p className="eyebrow">Contact</p>
            <h1>Start with a private real estate conversation.</h1>
            <p>
              Reach out to Marino Castro for buyer guidance, seller
              representation, or a more strategic discussion about a New Jersey
              property.
            </p>

            <div className="contact-stack clean-contact-stack">
              <div className="info-card contact-card">
                <span>Phone</span>
                <a href="tel:9738513790">(973) 851-3790</a>
              </div>
              <div className="info-card contact-card">
                <span>Email</span>
                <strong>
                  <a href="mailto:ocastro@buymyhome.net">ocastro@buymyhome.net</a>
                </strong>
              </div>
            </div>
          </div>

          <PrivateConsultationCard />
        </div>
      </section>
    </SiteShell>
  );
}
