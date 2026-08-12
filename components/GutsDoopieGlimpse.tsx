"use client";

import { useEffect, useRef } from "react";
import { doopiePreview, featuredDoopies } from "@/data/doopies";

/** Tiny stealth NFT teaser revealed when the Guts chapter card expands. */
export default function GutsDoopieGlimpse({ active }: { active: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const previews = featuredDoopies.slice(0, 4);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (active && canHover) {
      if (!video.src) video.src = doopiePreview.src;
      const play = video.play();
      if (play) play.catch(() => undefined);
      return;
    }

    video.pause();
  }, [active]);

  return (
    <div
      className="guts-doopie-glimpse"
      data-active={active || undefined}
    >
      <div className="guts-doopie-glimpse-head">
        <span>Stealth</span>
        <strong>Retro NFTs</strong>
        <em>Coming soon</em>
      </div>

      <div className="guts-doopie-strip" aria-hidden="true">
        <video
          ref={videoRef}
          className="guts-doopie-reel"
          poster={doopiePreview.poster}
          muted
          loop
          playsInline
          preload="none"
        />
        {previews.map((doopie) => (
          <img
            key={doopie.id}
            src={doopie.src}
            alt=""
            width={96}
            height={96}
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        ))}
        <span className="guts-doopie-more">+</span>
      </div>

      <dl className="guts-doopie-meta">
        <div>
          <dt>Drop</dt>
          <dd>
            <span className="guts-doopie-redacted" />
          </dd>
        </div>
        <div>
          <dt>Chain</dt>
          <dd>
            <span className="guts-doopie-redacted" />
          </dd>
        </div>
      </dl>
    </div>
  );
}
