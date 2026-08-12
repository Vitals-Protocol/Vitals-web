export type Doopie = {
  id: string;
  name: string;
  trait: string;
  src: string;
};

export const doopiePreview = {
  src: "/vitals/doopies/preview-loop.mp4",
  poster: "/vitals/doopies/poster.webp",
};

/** Sharp stills used for the Guts chapter hover glimpse. */
export const featuredDoopies: Doopie[] = [
  {
    id: "shift",
    name: "Shift",
    trait: "Golden hour",
    src: "/vitals/doopies/featured-shift.webp",
  },
  {
    id: "cap",
    name: "Cap",
    trait: "Mycelium drip",
    src: "/vitals/doopies/featured-cap.webp",
  },
  {
    id: "vr",
    name: "Signal",
    trait: "Always online",
    src: "/vitals/doopies/featured-vr.webp",
  },
  {
    id: "foil",
    name: "Foil",
    trait: "Everybody knows",
    src: "/vitals/doopies/featured-foil.webp",
  },
  {
    id: "ace",
    name: "Ace",
    trait: "High roller",
    src: "/vitals/doopies/featured-ace.webp",
  },
  {
    id: "devil",
    name: "Horn",
    trait: "Paper thin",
    src: "/vitals/doopies/featured-devil.webp",
  },
];
