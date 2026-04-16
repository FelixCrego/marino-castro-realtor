const routes = ["", "/about-us", "/how-it-works", "/faqs", "/contact-us"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `https://marino-castro-realtor.vercel.app${route}`,
    lastModified: new Date()
  }));
}
