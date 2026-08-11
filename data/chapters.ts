export type ChapterDetail = {
  label: "App" | "Thesis" | "Mechanism" | "Roadmap";
  eyebrow: string;
  title: string;
  body: string;
};

export type Chapter = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  status: string;
  release: string;
  tagline: string;
  summary: string;
  media: {
    type: "image" | "video";
    src: string;
    poster?: string;
    alt: string;
    position?: string;
  };
  accent: string;
  details: ChapterDetail[];
  signals: string[];
  link?: {
    href: string;
    label: string;
  };
  redacted?: false;
};

export type RedactedChapter = {
  id: string;
  number: string;
  redacted: true;
};

export type ReleaseChapter = Chapter | RedactedChapter;

/**
 * Replace a chapter image with any image or looping MP4:
 *
 * media: {
 *   type: "video",
 *   src: "/vitals/videos/reps-loop.mp4",
 *   poster: "/vitals/chapter-reps.webp",
 *   alt: "Reps product animation"
 * }
 */
export const chapters: ReleaseChapter[] = [
  {
    id: "reps",
    number: "01",
    title: "Reps",
    shortTitle: "Reps",
    status: "Active",
    release: "Chapter one · live",
    tagline: "Every candle is a rep count.",
    summary:
      "A crypto-fitness game that turns market movement into a physical challenge, with on-device rep counting and shareable competition loops.",
    link: {
      href: "https://playreps.xyz",
      label: "playreps.xyz",
    },
    media: {
      type: "image",
      src: "/vitals/chapter-reps.webp",
      alt: "Athletes completing a Reps workout beside the coast",
      position: "50% 54%",
    },
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
    status: "Launching soon",
    release: "Chapter two · launching soon",
    tagline: "Fuel that changes when you do.",
    summary:
      "A gut-health companion that connects goals, routines, food decisions, and real-world adherence — already available on the App Store and Google Play.",
    link: {
      href: "https://doopapp.com",
      label: "doopapp.com",
    },
    media: {
      type: "image",
      src: "/vitals/chapter-nutrition.webp",
      alt: "A warm adaptive nutrition workspace",
      position: "50% 52%",
    },
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
    id: "biohacking",
    number: "03",
    title: "Biohacking",
    shortTitle: "Biohacking",
    status: "In development",
    release: "Chapter three · in development",
    tagline: "Make progress measurable.",
    summary:
      "A biohacking workspace that connects labs, wearables, behavior, and goals into a clear view of what is changing and what to try next.",
    media: {
      type: "image",
      src: "/vitals/chapter-biomarkers.webp",
      alt: "A person standing inside a futuristic biomarker chamber",
      position: "50% 52%",
    },
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
    status: "In development",
    release: "Chapter four · in development",
    tagline: "A system that compounds the right years.",
    summary:
      "The orchestration layer: coordinating movement, nutrition, recovery, measurement, and future interventions around one long-term health objective.",
    media: {
      type: "image",
      src: "/vitals/chapter-longevity.webp",
      alt: "A calm figure overlooking a mountain longevity interface",
      position: "50% 51%",
    },
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

export function isRedacted(chapter: ReleaseChapter): chapter is RedactedChapter {
  return chapter.redacted === true;
}
