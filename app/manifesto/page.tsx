import type { Metadata } from "next";
import { BrandMark } from "@/components/VitalsReleaseExperience";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "The Vitals Protocol vision: products released as chapters, each solving a real behavior loop, compounding into one system for human performance and longevity.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: "The Vitals Manifesto",
    description:
      "Products as chapters. Health as a compounding system. The vision behind the Vitals Protocol release sequence.",
  },
};

const principles = [
  {
    index: "Principle 01",
    title: "Behavior loops, not dashboards",
    body: "Most health products hand you a wall of numbers and call it progress. Vitals products are built around a single behavior loop each — something a real person can start, repeat, and feel compounding within days, not quarters.",
  },
  {
    index: "Principle 02",
    title: "Every product is a chapter",
    body: "Reps, Doop, Biohacking, Longevity — each release stands alone as a useful product, and each one makes the others more powerful. The sequence is the strategy: reveal, prove, then connect.",
  },
  {
    index: "Principle 03",
    title: "One identity, one state",
    body: "Every chapter reads from and contributes to a shared health profile. Progress earned in one product carries into the next, so the system gets more personal the longer you live inside it.",
  },
];

const upcoming = [
  { title: "Tokenomics", note: "Coming soon" },
  { title: "Whitepaper", note: "Coming soon" },
  { title: "Community", note: "Coming soon" },
];

export default function ManifestoPage() {
  return (
    <main className="vitals-experience manifesto-page">
      <div className="scene" aria-hidden="true">
        <img src="/vitals/coastal-compound.webp" alt="" className="scene-image" />
        <div className="scene-light" />
        <div className="scene-shade" />
        <div className="scene-grain" />
      </div>

      <header className="site-header">
        <BrandMark />
        <nav className="manifesto-nav" aria-label="Manifesto navigation">
          <a href="/">Release sequence</a>
          <a href="/" aria-label="Back to the release experience">
            ← Back
          </a>
        </nav>
      </header>

      <div className="manifesto-wrap">
        <section className="manifesto-hero" aria-labelledby="manifesto-title">
          <span className="hero-kicker">The Vitals manifesto</span>
          <h1 id="manifesto-title">Products as chapters. Health as a system.</h1>
          <p className="manifesto-lede">
            Vitals Protocol is a release sequence, not a single app. Each chapter is a focused
            product that solves one real behavior loop — training, eating, measuring, recovering —
            and together they compound into a single system for human performance and longevity.
            We build in public: what is live is live, what is coming is labeled, and nothing is
            vaporware.
          </p>
        </section>

        <hr className="manifesto-rule" />

        <section className="manifesto-grid" aria-label="Manifesto principles">
          {principles.map((principle) => (
            <article className="manifesto-card" key={principle.index}>
              <span className="manifesto-index">{principle.index}</span>
              <h2>{principle.title}</h2>
              <p>{principle.body}</p>
            </article>
          ))}
        </section>

        <hr className="manifesto-rule" />

        <section aria-label="Upcoming documents">
          <span className="hero-kicker">The library · opening next</span>
          <div className="manifesto-soon" style={{ marginTop: "18px" }}>
            {upcoming.map((item) => (
              <div className="manifesto-soon-tile" key={item.title}>
                <span>{item.title}</span>
                <span>{item.note}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="site-footer site-footer--compact">
        <div className="footer-bottom">
          <span>© 2026 Vitals Protocol</span>
          <span>All apps maintained by Salus Labs, Inc.</span>
          <span>Manifesto · v1</span>
          <span>Build in public</span>
        </div>
      </footer>
    </main>
  );
}
