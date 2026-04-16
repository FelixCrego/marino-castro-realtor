import { OfferForm } from "../../components/offer-form";
import { SiteShell } from "../../components/site-shell";

export const metadata = {
  title: "Contact Us | Marino Castro",
  description: "Contact Marino Castro about listings, investment opportunities, and direct-sale solutions in New Jersey."
};

export default function ContactPage() {
  return (
    <SiteShell currentPath="/contact-us">
      <section className="page-hero">
        <div className="container split-layout align-start">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h1>Tell Marino what you need and start the right real estate conversation.</h1>
            <p>
              Use the form for listings, seller questions, direct-sale
              scenarios, or NJ investment conversations.
            </p>
            <div className="contact-stack">
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
              <div className="info-card contact-card">
                <span>Social</span>
                <strong>
                  <a
                    href="https://www.instagram.com/marinocastro23/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  {" / "}
                  <a
                    href="https://www.facebook.com/marino.castro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </strong>
              </div>
            </div>
          </div>

          <OfferForm />
        </div>
      </section>
    </SiteShell>
  );
}
