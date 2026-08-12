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

    if (active) {
      const play = video.play();
      if (play) play.catch(() => undefined);
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [active]);

  return (
    <div
      className="guts-doopie-glimpse"
      data-active={active || undefined}
      aria-hidden={!active}
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
          src={doopiePreview.src}
          poster={doopiePreview.poster}
          muted
          loop
          playsInline
          preload="metadata"
        />
        {previews.map((doopie) => (
          <img key={doopie.id} src={doopie.src} alt="" draggable={false} />
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
