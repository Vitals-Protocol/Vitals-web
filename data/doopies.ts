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

/** Tiny stills for the Guts chapter hover glimpse. */
export const featuredDoopies: Doopie[] = [
  {
    id: "shift",
    name: "Shift",
    trait: "Golden hour",
    src: "/vitals/doopies/thumbs/featured-shift.webp",
  },
  {
    id: "cap",
    name: "Cap",
    trait: "Mycelium drip",
    src: "/vitals/doopies/thumbs/featured-cap.webp",
  },
  {
    id: "vr",
    name: "Signal",
    trait: "Always online",
    src: "/vitals/doopies/thumbs/featured-vr.webp",
  },
  {
    id: "foil",
    name: "Foil",
    trait: "Everybody knows",
    src: "/vitals/doopies/thumbs/featured-foil.webp",
  },
];
