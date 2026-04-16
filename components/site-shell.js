import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/how-it-works", label: "Process" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact-us", label: "Contact" }
];

export function SiteShell({ currentPath = "/", children }) {
  return (
    <div className="site-frame">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand brand-with-logo" href="/">
            <img
              src="/assets/marino-wordmark.svg"
              alt="Marino Castro"
              className="brand-logo premium-wordmark"
            />
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

          <div className="header-contact">
            <a className="header-phone" href="tel:9738513790">
              (973) 851-3790
            </a>
            <Link className="button button-solid" href="/contact-us">
              Private Consultation
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Marino Castro</h3>
            <p>
              Newark, New Jersey
              <br />
              Realtor and real estate investor serving surrounding NJ markets
            </p>
            <p>
              <a href="tel:9738513790">(973) 851-3790</a>
              <br />
              <a href="mailto:ocastro@buymyhome.net">ocastro@buymyhome.net</a>
            </p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul className="footer-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <p>
              Follow Marino on his public social channels or reach out directly
              for a private conversation.
            </p>
            <ul className="footer-links social-links">
              <li>
                <a
                  href="https://www.instagram.com/marinocastro23/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/marino.castro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>Copyright (c) 2026 Marino Castro</p>
        </div>
      </footer>
    </div>
  );
}
