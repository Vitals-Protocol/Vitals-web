const ASSET = "../public/vitals";

const chapters = [
  {
    id: "reps",
    number: "01",
    title: "Reps",
    shortTitle: "Reps",
    status: "Released",
    release: "Chapter one · live",
    tagline: "Every candle is a rep count.",
    summary:
      "A crypto-fitness game that turns market movement into a physical challenge, with on-device rep counting and shareable competition loops.",
    media: { type: "image", src: `${ASSET}/chapter-reps.webp`, alt: "Reps workout" },
    accent: "#f0b66b",
    details: [
      {
        label: "App",
        eyebrow: "The product",
        title: "The chart becomes the workout.",
        body: "Users open a challenge, follow the candle-generated movement sequence, and let the camera count completed push-ups and squats on-device.",
      },
      {
        label: "Thesis",
        eyebrow: "Why it exists",
        title: "Turn attention into action.",
        body: "Market culture already creates ritual, competition, and identity. Reps redirects that energy into a visible physical behavior people can complete and share.",
      },
      {
        label: "Mechanism",
        eyebrow: "How it compounds",
        title: "Challenges create proof of effort.",
        body: "Timed boxes, streaks, partner releases, leaderboards, and completion rewards create a repeatable loop from anticipation to effort to social proof.",
      },
      {
        label: "Roadmap",
        eyebrow: "Where it goes",
        title: "A programmable arena for fitness culture.",
        body: "Partner skins, community challenges, richer movement libraries, live events, and an identity layer that carries progress across every future Vitals product.",
      },
    ],
    signals: ["On-device counting", "Challenge boxes", "Partner launches", "Proof of effort"],
  },
  {
    id: "nutrition",
    number: "02",
    title: "Adaptive Nutrition",
    shortTitle: "Nutrition",
    status: "In development",
    release: "Chapter two · next",
    tagline: "Fuel that changes when you do.",
    summary:
      "A responsive nutrition layer that connects goals, routines, food decisions, and real-world adherence instead of producing another static meal plan.",
    media: { type: "image", src: `${ASSET}/chapter-nutrition.webp`, alt: "Adaptive nutrition" },
    accent: "#ddbd74",
    details: [
      {
        label: "App",
        eyebrow: "The product",
        title: "A daily operating layer for food.",
        body: "Planning, logging, shopping, and course-correcting live in one adaptive flow that learns what the user can actually sustain.",
      },
      {
        label: "Thesis",
        eyebrow: "Why it exists",
        title: "The best plan is the one that survives reality.",
        body: "Nutrition products optimize recommendations. Vitals optimizes adherence by responding to schedule, appetite, training load, preferences, and imperfect days.",
      },
      {
        label: "Mechanism",
        eyebrow: "How it compounds",
        title: "Observe, adjust, reduce friction.",
        body: "Each decision updates the next recommendation. The system narrows choices, surfaces substitutions, and reinforces patterns that move the user toward the goal.",
      },
      {
        label: "Roadmap",
        eyebrow: "Where it goes",
        title: "From guidance to an autonomous health workflow.",
        body: "Household modes, grocery orchestration, restaurant intelligence, metabolic context, and products that can coordinate around the same user state.",
      },
    ],
    signals: ["Adaptive plans", "Grocery workflow", "Context-aware swaps", "Adherence engine"],
  },
  {
    id: "biomarkers",
    number: "03",
    title: "Biomarker OS",
    shortTitle: "Biomarkers",
    status: "Research",
    release: "Chapter three · forming",
    tagline: "Make progress measurable.",
    summary:
      "A longitudinal health profile that connects labs, wearables, behavior, and goals into a clear view of what is changing and what to do next.",
    media: { type: "image", src: `${ASSET}/chapter-biomarkers.webp`, alt: "Biomarker chamber" },
    accent: "#8cc7cf",
    details: [
      {
        label: "App",
        eyebrow: "The product",
        title: "One evolving health state.",
        body: "Labs, wearables, symptoms, routines, and interventions are organized into a comprehensible timeline instead of scattered dashboards.",
      },
      {
        label: "Thesis",
        eyebrow: "Why it exists",
        title: "Behavior matters when outcomes move.",
        body: "People need a bridge between what they do every day and the slower biological signals that show whether the plan is working.",
      },
      {
        label: "Mechanism",
        eyebrow: "How it compounds",
        title: "Baseline, intervene, measure, learn.",
        body: "The protocol tracks confidence, trend, and context, then turns the next useful measurement or behavior into a clear action—not a wall of numbers.",
      },
      {
        label: "Roadmap",
        eyebrow: "Where it goes",
        title: "A shared intelligence layer across the portfolio.",
        body: "Every Vitals product can read from and contribute to the same health state, allowing recommendations and incentives to become increasingly personal over time.",
      },
    ],
    signals: ["Unified timeline", "Trend confidence", "Intervention loops", "Shared health state"],
  },
  {
    id: "longevity",
    number: "04",
    title: "Longevity Protocol",
    shortTitle: "Longevity",
    status: "Vision",
    release: "Chapter four · horizon",
    tagline: "A system that compounds the right years.",
    summary:
      "The orchestration layer: coordinating movement, nutrition, recovery, measurement, and future interventions around one long-term health objective.",
    media: { type: "image", src: `${ASSET}/chapter-longevity.webp`, alt: "Longevity interface" },
    accent: "#a8d0b2",
    details: [
      {
        label: "App",
        eyebrow: "The product",
        title: "A protocol, not another dashboard.",
        body: "The user sees a small number of coordinated priorities, the reason each matters, and the next action across every connected Vitals experience.",
      },
      {
        label: "Thesis",
        eyebrow: "Why it exists",
        title: "Health is a compounding system.",
        body: "Long-term outcomes emerge from thousands of small decisions. The opportunity is to make those decisions coherent, motivating, and responsive over years.",
      },
      {
        label: "Mechanism",
        eyebrow: "How it compounds",
        title: "One identity, one state, many interventions.",
        body: "A shared profile coordinates products, learns from outcomes, and changes the protocol as goals, constraints, and biological signals evolve.",
      },
      {
        label: "Roadmap",
        eyebrow: "Where it goes",
        title: "The operating system for a healthier life.",
        body: "New devices, diagnostics, services, communities, and research can become chapters in the same system without fragmenting the user experience.",
      },
    ],
    signals: ["Coordinated priorities", "Longitudinal identity", "Protocol updates", "Portfolio orchestration"],
  },
  { id: "redacted-05", number: "05", redacted: true },
  { id: "redacted-06", number: "06", redacted: true },
  { id: "redacted-07", number: "07", redacted: true },
  { id: "redacted-08", number: "08", redacted: true },
];

const icon = (label) => {
  const icons = {
    App: '<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 7h6M9 11h6M9 15h3"/>',
    Thesis: '<path d="M6 4h9l3 3v13H6z"/><path d="M14 4v4h4M9 12h6M9 16h4"/>',
    Mechanism:
      '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
    Roadmap:
      '<path d="M4 18c4-7 7-2 10-8 1.4-2.8 3.4-3.7 6-4"/><circle cx="5" cy="18" r="2"/><circle cx="14" cy="10" r="2"/><circle cx="20" cy="6" r="2"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[label]}</svg>`;
};

const brand = (compact = false) => `
  <div class="brand-lockup${compact ? " brand-lockup--compact" : ""}">
    <svg class="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
      <path d="M7 8.5 22 36 37 8.5l-8.1 5.1L22 27l-6.9-13.4L7 8.5Z"></path>
      <path d="M14 7.5 22 22l8-14.5"></path>
    </svg>
    <span>Vitals Protocol</span>
  </div>`;

function mediaMarkup(chapter, modal = false) {
  const className = modal ? "modal-media-element" : "chapter-media-element";
  if (chapter.media.type === "video") {
    return `<video class="${className}" src="${chapter.media.src}" poster="${chapter.media.poster || ""}" autoplay muted loop playsinline aria-label="${chapter.media.alt}"></video>`;
  }
  return `<img class="${className}" src="${chapter.media.src}" alt="${chapter.media.alt}" draggable="false"/>`;
}

const rail = document.getElementById("chapter-rail");
let activeId = null;

function renderRail() {
  rail.innerHTML = chapters
    .map((chapter) => {
      if (chapter.redacted) {
        return `
          <article class="chapter-card chapter-card--redacted" data-id="${chapter.id}" aria-label="Chapter ${chapter.number}, redacted">
            <div class="redacted-noise"></div>
            <div class="redacted-corners" aria-hidden="true"></div>
            <div class="redacted-center">
              ${brand(true)}
              <span>REDACTED</span>
              <small>Chapter ${chapter.number}</small>
            </div>
          </article>`;
      }
      return `
        <article class="chapter-card chapter-card--revealed" data-id="${chapter.id}" tabindex="0" role="button" aria-label="Open chapter ${chapter.number}: ${chapter.title}" style="--chapter-accent:${chapter.accent}">
          <div class="chapter-media">
            ${mediaMarkup(chapter)}
            <div class="chapter-media-grade"></div>
            <div class="chapter-media-vignette"></div>
          </div>
          <div class="chapter-edge-light" aria-hidden="true"></div>
          <div class="chapter-sheen" aria-hidden="true"></div>
          <header class="chapter-card-header">
            <span class="chapter-index">Chapter ${chapter.number}</span>
            <span class="chapter-status"><i></i>${chapter.status}</span>
          </header>
          <div class="chapter-card-copy">
            <div class="chapter-title-row">
              <div>
                <h2>${chapter.shortTitle}</h2>
                <p class="chapter-tagline">${chapter.tagline}</p>
              </div>
              <span class="chapter-arrow" aria-hidden="true">↗</span>
            </div>
            <p class="chapter-summary">${chapter.summary}</p>
            <div class="chapter-glimpses" aria-hidden="true">
              ${chapter.details
                .map(
                  (detail) => `
                    <div class="chapter-glimpse">
                      <span class="glimpse-icon">${icon(detail.label)}</span>
                      <span><strong>${detail.label}</strong><small>${detail.title}</small></span>
                    </div>`,
                )
                .join("")}
            </div>
            <div class="chapter-card-footer"><span>${chapter.release}</span><strong>Enter chapter</strong></div>
          </div>
        </article>`;
    })
    .join("");

  for (const card of rail.querySelectorAll(".chapter-card--revealed")) {
    const id = card.dataset.id;
    card.addEventListener("pointerenter", () => setActive(id));
    card.addEventListener("pointerleave", () => setActive(null));
    card.addEventListener("focus", () => setActive(id));
    card.addEventListener("blur", () => setActive(null));
    card.addEventListener("click", () => openChapter(id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openChapter(id);
      }
    });
  }
}

function setActive(id) {
  activeId = id;
  for (const card of rail.querySelectorAll(".chapter-card")) {
    const active = card.dataset.id === id;
    if (active) card.setAttribute("data-active", "true");
    else card.removeAttribute("data-active");
    if (id && !active) card.setAttribute("data-sibling-active", "true");
    else card.removeAttribute("data-sibling-active");
  }
}

rail.addEventListener("pointerleave", (event) => {
  if (event.pointerType !== "touch") setActive(null);
});

const modalRoot = document.getElementById("modal-root");
let selectedChapter = null;
let selectedLabel = "App";

function openChapter(id) {
  const chapter = chapters.find((item) => item.id === id && !item.redacted);
  if (!chapter) return;
  selectedChapter = chapter;
  selectedLabel = "App";
  renderModal();
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => modalRoot.querySelector(".modal-close")?.focus());
}

function closeModal() {
  selectedChapter = null;
  modalRoot.innerHTML = "";
  document.body.style.overflow = "";
}

function renderModal() {
  const chapter = selectedChapter;
  if (!chapter) return closeModal();
  const detail = chapter.details.find((item) => item.label === selectedLabel) || chapter.details[0];
  modalRoot.innerHTML = `
    <div class="chapter-modal-backdrop" role="presentation">
      <section class="chapter-modal" role="dialog" aria-modal="true" aria-labelledby="chapter-modal-title" style="--chapter-accent:${chapter.accent}">
        <button class="modal-close" type="button"><span aria-hidden="true">×</span><span class="sr-only">Close chapter</span></button>
        <div class="modal-visual">
          ${mediaMarkup(chapter, true)}
          <div class="modal-visual-grade"></div>
          <div class="modal-visual-copy"><span>Chapter ${chapter.number}</span><h2>${chapter.title}</h2><p>${chapter.tagline}</p></div>
        </div>
        <div class="modal-content">
          <div class="modal-eyebrow">${brand(true)}<span>${chapter.status}</span></div>
          <div class="modal-tabs" role="tablist" aria-label="${chapter.title} details">
            ${chapter.details
              .map(
                (item) => `<button type="button" role="tab" data-label="${item.label}" aria-selected="${item.label === selectedLabel}" class="${item.label === selectedLabel ? "is-selected" : ""}"><span>${icon(item.label)}</span>${item.label}</button>`,
              )
              .join("")}
          </div>
          <div class="modal-detail" key="${detail.label}"><span>${detail.eyebrow}</span><h3 id="chapter-modal-title">${detail.title}</h3><p>${detail.body}</p></div>
          <div class="modal-signals">${chapter.signals.map((signal) => `<span>${signal}</span>`).join("")}</div>
          <div class="modal-actions"><button type="button" class="modal-primary-action">Follow this chapter<span aria-hidden="true">↗</span></button><small>Connect this button to your waitlist, product page, or release notification flow.</small></div>
        </div>
      </section>
    </div>`;

  const backdrop = modalRoot.querySelector(".chapter-modal-backdrop");
  backdrop.addEventListener("mousedown", (event) => {
    if (event.target === backdrop) closeModal();
  });
  modalRoot.querySelector(".modal-close").addEventListener("click", closeModal);
  for (const tab of modalRoot.querySelectorAll(".modal-tabs button")) {
    tab.addEventListener("click", () => {
      selectedLabel = tab.dataset.label;
      renderModal();
    });
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && selectedChapter) closeModal();
});

document.querySelectorAll("[data-open-chapter]").forEach((button) => {
  button.addEventListener("click", () => openChapter(button.dataset.openChapter));
});

function setupParallax() {
  const root = document.getElementById("vitals-experience");
  let frame = 0;
  let x = 0;
  let y = 0;
  window.addEventListener(
    "pointermove",
    (event) => {
      x = (event.clientX / innerWidth - 0.5) * -12;
      y = (event.clientY / innerHeight - 0.5) * -8;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          root.style.setProperty("--pointer-x", `${x}px`);
          root.style.setProperty("--pointer-y", `${y}px`);
          frame = 0;
        });
      }
    },
    { passive: true },
  );
}

function setupVortex() {
  const canvas = document.getElementById("ambient-vortex");
  const context = canvas.getContext("2d", { alpha: true });
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 1;
  let height = 1;
  let dpr = 1;
  let animationFrame = 0;
  let last = performance.now();
  let pointerX = 0;
  let pointerY = 0;
  let targetX = 0;
  let targetY = 0;
  const particles = Array.from({ length: reduced ? 170 : 430 }, (_, index) => ({
    t: Math.random(),
    speed: 0.000018 + Math.random() * 0.000028,
    lane: index % 10,
    offset: Math.random() * 0.02 - 0.01,
    size: 0.45 + Math.random() * 1.35,
    alpha: 0.15 + Math.random() * 0.55,
    warmth: Math.random(),
  }));

  function curvePoint(t, lane) {
    const laneOffset = (lane - 4.5) * 0.015;
    const phase = lane * 0.085;
    const theta = t * Math.PI * 2.08 - 0.62 + phase;
    const eased = 0.06 + Math.pow(t, 0.82) * 0.56;
    const centerX = width * (0.5 + pointerX * 0.014);
    const centerY = height * (0.28 + pointerY * 0.01);
    const radiusX = width * (eased + laneOffset);
    const radiusY = height * (0.06 + eased * 0.32 + laneOffset * 0.45);
    return {
      x: centerX + Math.cos(theta) * radiusX + width * (t - 0.5) * 0.055 + Math.sin(t * Math.PI * 3 + lane) * width * 0.004,
      y: centerY + Math.sin(theta) * radiusY + height * (t - 0.5) * 0.042 + Math.cos(t * Math.PI * 2.4 + lane) * height * 0.004,
    };
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(time) {
    const delta = Math.min(32, time - last);
    last = time;
    pointerX += (targetX - pointerX) * 0.025;
    pointerY += (targetY - pointerY) * 0.025;
    context.clearRect(0, 0, width, height);
    context.save();
    context.globalCompositeOperation = "screen";
    for (const particle of particles) {
      if (!reduced) particle.t = (particle.t + particle.speed * delta) % 1;
      const t = (particle.t + particle.offset + 1) % 1;
      const start = curvePoint(t, particle.lane);
      const end = curvePoint(Math.min(0.999, t + 0.0035 + particle.size * 0.0007), particle.lane);
      const edgeFade = Math.sin(Math.PI * Math.max(0, Math.min(1, t))) ** 0.7;
      const verticalFade = Math.max(0, Math.min(1, 1.25 - start.y / (height * 0.82)));
      const alpha = particle.alpha * edgeFade * verticalFade * 0.52;
      if (alpha <= 0.01) continue;
      context.strokeStyle = particle.warmth > 0.72 ? `rgba(255,219,164,${alpha})` : `rgba(238,248,245,${alpha})`;
      context.lineWidth = particle.size;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.stroke();
    }
    context.restore();
    if (!reduced) animationFrame = requestAnimationFrame(draw);
  }

  addEventListener("resize", resize, { passive: true });
  addEventListener(
    "pointermove",
    (event) => {
      targetX = event.clientX / innerWidth - 0.5;
      targetY = event.clientY / innerHeight - 0.5;
    },
    { passive: true },
  );
  resize();
  if (reduced) draw(performance.now());
  else animationFrame = requestAnimationFrame(draw);
}

renderRail();
setupParallax();
setupVortex();
