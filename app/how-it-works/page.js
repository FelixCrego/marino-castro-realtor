import Link from "next/link";
import { SiteShell } from "../../components/site-shell";

const details = [
  {
    title: "1. Share the goal",
    body:
      "Start with the basics: listing, buying, investing, or a direct-sale problem to solve. Marino uses that first conversation to find the right lane."
  },
  {
    title: "2. Review the property and market fit",
    body:
      "The property, neighborhood, timeline, and condition all matter. Some deals belong on-market. Others are better handled with a direct investor strategy."
  },
  {
    title: "3. Build the plan",
    body:
      "Once the best approach is clear, Marino helps map the next step, whether that means preparing a listing, reviewing terms, or structuring a faster exit."
  },
  {
    title: "4. Execute with clarity",
    body:
      "The goal is to move forward without confusion. You know what happens next, what the timing looks like, and who is handling each piece."
  }
];

export const metadata = {
  title: "How It Works | Marino Castro",
  description: "See Marino Castro's step-by-step process for listings, investing, and direct-sale options."
};

export default function HowItWorksPage() {
  return (
    <SiteShell currentPath="/how-it-works">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">How It Works</p>
          <h1>A straightforward process built around the right strategy.</h1>
          <p>
            The site keeps the simple flow of the reference layout, but the copy
            is adjusted for Marino&apos;s broader NJ service mix.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid halves">
          {details.map((item) => (
            <article className="info-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section accent-section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">No Pressure</p>
            <h2>Get the facts, compare the paths, and choose what actually fits.</h2>
          </div>
          <div>
            <p>
              Some properties need full representation. Others need speed and
              certainty. Marino&apos;s process is meant to clarify that early.
            </p>
            <Link className="button button-solid" href="/contact-us">
              Contact Marino
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
