import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact-us", label: "Contact Us" }
];

export function SiteShell({ currentPath = "/", children }) {
  return (
    <div className="site-frame">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Talk to Marino about listings, investors, and direct-sale options</span>
          <div className="utility-actions">
            <a href="tel:9738513790">(973) 851-3790</a>
            <a
              href="https://www.instagram.com/marinocastro23/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/marino.castro/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            <span className="brand-mark">MC</span>
            <span>
              <strong>Marino Castro</strong>
              <small>New Jersey Real Estate Agent And Investor</small>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={currentPath === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="button button-solid" href="/contact-us">
            Contact Marino
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Contact Details</h3>
            <p>
              Newark, NJ
              <br />
              Serving surrounding New Jersey communities
            </p>
            <p>
              <a href="tel:9738513790">(973) 851-3790</a>
              <br />
              <a href="mailto:ocastro@buymyhome.net">ocastro@buymyhome.net</a>
            </p>
          </div>
          <div>
            <h4>Important Links</h4>
            <ul className="footer-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Follow Marino</h4>
            <p>
              Keep up with Marino&apos;s public updates, real estate content, and
              community presence across social media.
            </p>
            <div className="footer-social">
              <a
                className="button button-solid footer-button"
                href="https://www.instagram.com/marinocastro23/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="button button-ghost footer-button"
                href="https://www.facebook.com/marino.castro/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>Copyright (c) 2026 Marino Castro</p>
        </div>
      </footer>
    </div>
  );
}
