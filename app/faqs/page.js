import { SiteShell } from "../../components/site-shell";

const faqs = [
  {
    question: "Do you only work on direct-sale deals?",
    answer:
      "No. The site is positioned for both traditional representation and investor-style direct solutions, depending on the property and your timeline."
  },
  {
    question: "Do I need to repair the property first?",
    answer:
      "Not always. If the best path is a direct-sale option, Marino can review as-is scenarios. If listing is the better move, he can advise what improvements matter most."
  },
  {
    question: "Can you help with inherited or distressed properties?",
    answer:
      "Yes. Public business information tied to Marino highlights experience with probate, vacant homes, fire damage, and other motivated-seller situations."
  },
  {
    question: "Do you work with Spanish-speaking families?",
    answer:
      "Yes. Public business profiles describe Marino as fluent in Spanish, which is reflected in the way the site is positioned."
  },
  {
    question: "Can investors reach out through this site too?",
    answer:
      "Yes. The lead form and homepage copy are designed for sellers, buyers, and investors looking to discuss opportunities in New Jersey."
  }
];

export const metadata = {
  title: "FAQs | Marino Castro",
  description: "Answers to common questions about Marino Castro's real estate and investment services in New Jersey."
};

export default function FaqPage() {
  return (
    <SiteShell currentPath="/faqs">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h1>Answers to the questions clients ask before they commit.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container faq-list">
          {faqs.map((item) => (
            <article className="info-card faq-card" key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
