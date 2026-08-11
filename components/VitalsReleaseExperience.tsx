"use client";

import {
  CSSProperties,
  KeyboardEvent,
  PointerEvent as ReactPointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import AmbientVortex from "./AmbientVortex";
import {
  Chapter,
  ChapterDetail,
  chapters,
  isRedacted,
  ReleaseChapter,
} from "@/data/chapters";

const detailIcons: Record<ChapterDetail["label"], React.ReactNode> = {
  App: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </svg>
  ),
  Thesis: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4h9l3 3v13H6z" />
      <path d="M14 4v4h4M9 12h6M9 16h4" />
    </svg>
  ),
  Mechanism: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  ),
  Roadmap: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 18c4-7 7-2 10-8 1.4-2.8 3.4-3.7 6-4" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="14" cy="10" r="2" />
      <circle cx="20" cy="6" r="2" />
    </svg>
  ),
};

export function BrandMark({ compact = false, large = false }: { compact?: boolean; large?: boolean }) {
  return (
    <div
      className={`brand-lockup${compact ? " brand-lockup--compact" : ""}${
        large ? " brand-lockup--large" : ""
      }`}
    >
      <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
        <path d="M7 8.5 22 36 37 8.5l-8.1 5.1L22 27l-6.9-13.4L7 8.5Z" />
        <path d="M14 7.5 22 22l8-14.5" />
      </svg>
      <span>Vitals Protocol</span>
    </div>
  );
}

const socials = [
  {
    label: "X",
    href: "https://x.com/vitalsprotocol",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 4.5l15 15M19.5 4.5l-15 15" />
      </svg>
    ),
  },
];

function HeroMark() {
  return (
    <div className="hero-mark-tilt" aria-hidden="true">
      <div className="hero-mark-float">
        <svg className="hero-mark" viewBox="0 0 44 44">
          <defs>
            <linearGradient id="hero-mark-gold" x1="0.1" y1="0" x2="0.75" y2="1">
              <stop offset="0" stopColor="#fff0d4" />
              <stop offset="0.42" stopColor="#eec27f" />
              <stop offset="0.78" stopColor="#a8763a" />
              <stop offset="1" stopColor="#6e4a1e" />
            </linearGradient>
          </defs>
          <path
            d="M7 8.5 22 36 37 8.5l-8.1 5.1L22 27l-6.9-13.4L7 8.5Z"
            fill="url(#hero-mark-gold)"
          />
          <path
            d="M14 7.5 22 22l8-14.5"
            fill="none"
            stroke="rgba(255, 246, 226, 0.8)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function ChapterMedia({ chapter, modal = false }: { chapter: Chapter; modal?: boolean }) {
  if (chapter.media.type === "video") {
    return (
      <video
        className={modal ? "modal-media-element" : "chapter-media-element"}
        src={chapter.media.src}
        poster={chapter.media.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={chapter.media.alt}
        style={{ objectPosition: chapter.media.position }}
      />
    );
  }

  return (
    <img
      className={modal ? "modal-media-element" : "chapter-media-element"}
      src={chapter.media.src}
      alt={chapter.media.alt}
      draggable={false}
      style={{ objectPosition: chapter.media.position }}
    />
  );
}

function ChapterCard({
  chapter,
  active,
  siblingActive,
  onActivate,
  onDeactivate,
  onOpen,
}: {
  chapter: ReleaseChapter;
  active: boolean;
  siblingActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onOpen: () => void;
}) {
  if (isRedacted(chapter)) {
    return (
      <article
        className="chapter-card chapter-card--redacted"
        data-sibling-active={siblingActive || undefined}
        aria-label={`Chapter ${chapter.number}, redacted`}
      >
        <div className="redacted-noise" />
        <div className="redacted-corners" aria-hidden="true" />
        <div className="redacted-center">
          <BrandMark compact />
          <span>REDACTED</span>
          <small>Chapter {chapter.number}</small>
        </div>
      </article>
    );
  }

  const style = { "--chapter-accent": chapter.accent } as CSSProperties;

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      className="chapter-card chapter-card--revealed"
      data-active={active || undefined}
      data-sibling-active={siblingActive || undefined}
      style={style}
      tabIndex={0}
      role="button"
      aria-label={`Open chapter ${chapter.number}: ${chapter.title}`}
      onPointerEnter={onActivate}
      onPointerLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
    >
      <div className="chapter-media">
        <ChapterMedia chapter={chapter} />
        <div className="chapter-media-grade" />
        <div className="chapter-media-vignette" />
      </div>

      <div className="chapter-edge-light" aria-hidden="true" />
      <div className="chapter-sheen" aria-hidden="true" />

      <header className="chapter-card-header">
        <span className="chapter-index">Chapter {chapter.number}</span>
        <span className="chapter-status">
          <i />
          {chapter.status}
        </span>
      </header>

      <div className="chapter-card-copy">
        <div className="chapter-title-row">
          <div>
            <h2>{chapter.shortTitle}</h2>
            <p className="chapter-tagline">{chapter.tagline}</p>
          </div>
          <span className="chapter-arrow" aria-hidden="true">
            ↗
          </span>
        </div>

        <p className="chapter-summary">{chapter.summary}</p>

        {chapter.link ? (
          <a
            className="chapter-link"
            href={chapter.link.href}
            target="_blank"
            rel="noreferrer"
            aria-hidden={!active}
            tabIndex={active ? 0 : -1}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            <span>Visit {chapter.link.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="chapter-soon" aria-hidden={!active}>
            Full thesis — coming soon
          </span>
        )}

        <div className="chapter-card-footer">
          <span>{chapter.release}</span>
          <strong>Enter chapter</strong>
        </div>
      </div>
    </article>
  );
}

function ChapterModal({ chapter, onClose }: { chapter: Chapter; onClose: () => void }) {
  const [selectedLabel, setSelectedLabel] = useState<ChapterDetail["label"]>("App");
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const selectedDetail =
    chapter.details.find((detail) => detail.label === selectedLabel) ?? chapter.details[0];

  useEffect(() => {
    setSelectedLabel("App");
    window.setTimeout(() => closeRef.current?.focus(), 60);
  }, [chapter.id]);

  return (
    <div
      className="chapter-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <section
        className="chapter-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chapter-modal-title"
        style={{ "--chapter-accent": chapter.accent } as CSSProperties}
      >
        <button ref={closeRef} className="modal-close" type="button" onClick={onClose}>
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close chapter</span>
        </button>

        <div className="modal-visual">
          <ChapterMedia chapter={chapter} modal />
          <div className="modal-visual-grade" />
          <div className="modal-visual-copy">
            <span>Chapter {chapter.number}</span>
            <h2>{chapter.title}</h2>
            <p>{chapter.tagline}</p>
          </div>
        </div>

        <div className="modal-content">
          <div className="modal-eyebrow">
            <BrandMark compact />
            <span>{chapter.status}</span>
          </div>

          <div className="modal-tabs" role="tablist" aria-label={`${chapter.title} details`}>
            {chapter.details.map((detail) => (
              <button
                key={detail.label}
                type="button"
                role="tab"
                aria-selected={selectedLabel === detail.label}
                className={selectedLabel === detail.label ? "is-selected" : undefined}
                onClick={() => setSelectedLabel(detail.label)}
              >
                <span>{detailIcons[detail.label]}</span>
                {detail.label}
              </button>
            ))}
          </div>

          <div className="modal-detail" key={selectedDetail.label}>
            <span>{selectedDetail.eyebrow}</span>
            <h3 id="chapter-modal-title">{selectedDetail.title}</h3>
            <p>{selectedDetail.body}</p>
          </div>

          <div className="modal-signals">
            {chapter.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>

          <div className="modal-actions">
            {chapter.link ? (
              <a
                className="modal-primary-action"
                href={chapter.link.href}
                target="_blank"
                rel="noreferrer"
              >
                Visit {chapter.link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <button type="button" className="modal-primary-action">
                Follow this chapter
                <span aria-hidden="true">↗</span>
              </button>
            )}
            <small>
              {chapter.link
                ? "Opens the live product in a new tab."
                : "Connect this button to your waitlist, product page, or release notification flow."}
            </small>
          </div>
        </div>
      </section>
    </div>
  );
}

function IntroOverlay({ leaving }: { leaving: boolean }) {
  return (
    <div className="intro-overlay" data-leaving={leaving || undefined} aria-hidden="true">
      <div className="intro-image-wrap">
        <img
          src="/vitals/coastal-compound.webp"
          alt=""
          className="intro-image"
          draggable={false}
        />
      </div>
      <div className="intro-veil" />
      <div className="intro-grain" />
      <div className="intro-brand">
        <BrandMark large />
        <span className="intro-tagline">The release sequence begins</span>
        <i className="intro-line" />
      </div>
    </div>
  );
}

export default function VitalsReleaseExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openedId, setOpenedId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [intro, setIntro] = useState<"playing" | "leaving" | "done">("playing");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIntro("done");
      return;
    }
    const leaveTimer = window.setTimeout(() => setIntro("leaving"), 2300);
    const doneTimer = window.setTimeout(() => setIntro("done"), 3150);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const openedChapter = useMemo(() => {
    const match = chapters.find((chapter) => chapter.id === openedId);
    return match && !isRedacted(match) ? match : null;
  }, [openedId]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let tiltX = 0;
    let tiltY = 0;

    const applyPointer = () => {
      root.style.setProperty("--pointer-x", `${pointerX}px`);
      root.style.setProperty("--pointer-y", `${pointerY}px`);
      root.style.setProperty("--tilt-x", tiltX.toFixed(4));
      root.style.setProperty("--tilt-y", tiltY.toFixed(4));
      animationFrame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * -12;
      pointerY = (event.clientY / window.innerHeight - 0.5) * -8;
      tiltX = (event.clientX / window.innerWidth - 0.5) * 2;
      tiltY = (event.clientY / window.innerHeight - 0.5) * 2;
      if (!animationFrame) animationFrame = requestAnimationFrame(applyPointer);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!openedChapter) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpenedId(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openedChapter]);

  const handleRailPointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") setActiveId(null);
  };

  return (
    <main ref={rootRef} className="vitals-experience" data-intro={intro}>
      <div className="scene" aria-hidden="true">
        <img src="/vitals/coastal-compound.webp" alt="" className="scene-image" />
        <div className="scene-light" />
        <div className="scene-shade" />
        <div className="scene-grain" />
        <div className="ocean-shimmer" />
      </div>

      <AmbientVortex />

      {intro !== "done" ? <IntroOverlay leaving={intro === "leaving"} /> : null}

      <header className="site-header">
        <BrandMark />
        <div className="site-menu">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          {menuOpen ? (
            <>
              <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
              <nav className="menu-panel" aria-label="Primary navigation">
                <a href="#release-sequence" onClick={() => setMenuOpen(false)}>
                  <small>01</small>
                  Release sequence
                </a>
                <a href="/manifesto" onClick={() => setMenuOpen(false)}>
                  <small>02</small>
                  Manifesto
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setOpenedId("reps");
                  }}
                >
                  <small>03</small>
                  Enter chapter 01
                </button>
              </nav>
            </>
          ) : null}
        </div>
      </header>

      <section className="hero" id="top">
        <HeroMark />
        <span className="hero-wordmark">Vitals Protocol</span>
        <h1>
          A protocol for
          <br />
          becoming more alive.
        </h1>
        <p className="hero-sub">Health is wealth.</p>
      </section>

      <section className="release-section" id="release-sequence" aria-label="Vitals product chapters">
        <div className="release-meta">
          <div>
            <span>Product universe</span>
            <strong>Four chapters revealed</strong>
          </div>
        </div>

        <div className="chapter-stage">
          <div className="chapter-track" aria-hidden="true">
            <span />
          </div>

          <div className="chapter-rail" onPointerLeave={handleRailPointerLeave}>
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                active={activeId === chapter.id}
                siblingActive={Boolean(activeId && activeId !== chapter.id)}
                onActivate={() => {
                  if (!isRedacted(chapter)) setActiveId(chapter.id);
                }}
                onDeactivate={() => {
                  if (activeId === chapter.id) setActiveId(null);
                }}
                onOpen={() => {
                  if (!isRedacted(chapter)) setOpenedId(chapter.id);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <BrandMark />
            <p>
              A protocol for becoming more alive.
              <br />
              Health is wealth.
            </p>
            <div className="footer-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Vitals Protocol on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <div>
              <span>Chapters</span>
              <a href="https://playreps.xyz" target="_blank" rel="noreferrer">
                Reps <em>live</em>
              </a>
              <a href="https://doopapp.com" target="_blank" rel="noreferrer">
                Doop <em>launching soon</em>
              </a>
              <a href="#release-sequence">Biohacking</a>
              <a href="#release-sequence">Longevity</a>
            </div>
            <div>
              <span>Protocol</span>
              <a href="/manifesto">Manifesto</a>
              <a href="/manifesto">Tokenomics <em>soon</em></a>
              <a href="/manifesto">Whitepaper <em>soon</em></a>
              <a href="#release-sequence">Release sequence</a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Vitals Protocol</span>
          <span>All apps maintained by Salus Labs, Inc.</span>
          <span>04 / 08 chapters revealed</span>
          <span>Build in public</span>
        </div>
      </footer>

      {openedChapter ? (
        <ChapterModal chapter={openedChapter} onClose={() => setOpenedId(null)} />
      ) : null}
    </main>
  );
}
