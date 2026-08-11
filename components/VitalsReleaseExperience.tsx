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

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-lockup${compact ? " brand-lockup--compact" : ""}`}>
      <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
        <path d="M7 8.5 22 36 37 8.5l-8.1 5.1L22 27l-6.9-13.4L7 8.5Z" />
        <path d="M14 7.5 22 22l8-14.5" />
      </svg>
      <span>Vitals Protocol</span>
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

        <div className="chapter-glimpses" aria-hidden={!active}>
          {chapter.details.map((detail) => (
            <div className="chapter-glimpse" key={detail.label}>
              <span className="glimpse-icon">{detailIcons[detail.label]}</span>
              <span>
                <strong>{detail.label}</strong>
                <small>{detail.title}</small>
              </span>
            </div>
          ))}
        </div>

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
            <button type="button" className="modal-primary-action">
              Follow this chapter
              <span aria-hidden="true">↗</span>
            </button>
            <small>Connect this button to your waitlist, product page, or release notification flow.</small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function VitalsReleaseExperience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openedId, setOpenedId] = useState<string | null>(null);

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

    const applyPointer = () => {
      root.style.setProperty("--pointer-x", `${pointerX}px`);
      root.style.setProperty("--pointer-y", `${pointerY}px`);
      animationFrame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * -12;
      pointerY = (event.clientY / window.innerHeight - 0.5) * -8;
      if (!animationFrame) animationFrame = requestAnimationFrame(applyPointer);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

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
    <main ref={rootRef} className="vitals-experience">
      <div className="scene" aria-hidden="true">
        <img src="/vitals/coastal-compound.webp" alt="" className="scene-image" />
        <div className="scene-light" />
        <div className="scene-shade" />
        <div className="scene-grain" />
        <div className="ocean-shimmer" />
      </div>

      <AmbientVortex />

      <header className="site-header">
        <BrandMark />
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#release-sequence">Release sequence</a>
          <a href="#manifesto">Manifesto</a>
          <button type="button" onClick={() => setOpenedId("reps")}>
            Enter chapter 01
          </button>
        </nav>
      </header>

      <section className="hero-copy" id="manifesto">
        <span className="hero-kicker">The Vitals release sequence · 01—08</span>
        <h1>
          A protocol for
          <br />
          becoming more alive.
        </h1>
        <p>
          Products arrive as chapters. Each one solves a real behavior loop; together they become
          a compounding system for human performance and longevity.
        </p>
      </section>

      <section className="release-section" id="release-sequence" aria-label="Vitals product chapters">
        <div className="release-meta">
          <div>
            <span>Product universe</span>
            <strong>Four chapters revealed</strong>
          </div>
          <p>Hover to open a glimpse. Select a chapter for the full thesis and mechanism.</p>
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
        <span>Vitals Protocol · Build in public</span>
        <div className="footer-progress" aria-label="Four of eight chapters revealed">
          <i style={{ width: "50%" }} />
        </div>
        <span>04 / 08 revealed</span>
      </footer>

      {openedChapter ? (
        <ChapterModal chapter={openedChapter} onClose={() => setOpenedId(null)} />
      ) : null}
    </main>
  );
}
