"use client";

import { useEffect, useRef } from "react";

type Particle = {
  t: number;
  speed: number;
  lane: number;
  offset: number;
  size: number;
  alpha: number;
  warmth: number;
};

type Point = { x: number; y: number };

function curvePoint(
  t: number,
  lane: number,
  width: number,
  height: number,
  pointerX: number,
  pointerY: number,
): Point {
  const laneOffset = (lane - 4.5) * 0.015;
  const phase = lane * 0.085;
  const theta = t * Math.PI * 2.08 - 0.62 + phase;
  const eased = 0.06 + Math.pow(t, 0.82) * 0.56;
  const centerX = width * (0.5 + pointerX * 0.014);
  const centerY = height * (0.28 + pointerY * 0.01);
  const radiusX = width * (eased + laneOffset);
  const radiusY = height * (0.06 + eased * 0.32 + laneOffset * 0.45);

  return {
    x:
      centerX +
      Math.cos(theta) * radiusX +
      width * (t - 0.5) * 0.055 +
      Math.sin(t * Math.PI * 3 + lane) * width * 0.004,
    y:
      centerY +
      Math.sin(theta) * radiusY +
      height * (t - 0.5) * 0.042 +
      Math.cos(t * Math.PI * 2.4 + lane) * height * 0.004,
  };
}

export default function AmbientVortex() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let lastTime = performance.now();
    let pointerX = 0;
    let pointerY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;

    const particles: Particle[] = Array.from({ length: reducedMotion ? 170 : 260 }, (_, index) => ({
      t: Math.random(),
      speed: 0.000018 + Math.random() * 0.000028,
      lane: index % 10,
      offset: Math.random() * 0.02 - 0.01,
      size: 0.45 + Math.random() * 1.35,
      alpha: 0.15 + Math.random() * 0.55,
      warmth: Math.random(),
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetPointerX = event.clientX / window.innerWidth - 0.5;
      targetPointerY = event.clientY / window.innerHeight - 0.5;
    };

    let lastDraw = 0;

    const draw = (time: number) => {
      frame = 0;

      if (document.hidden) return; // paused; restarted by the visibility listener

      // Cap at ~30fps — the drift is slow enough that 60fps is wasted work.
      if (time - lastDraw < 33) {
        frame = requestAnimationFrame(draw);
        return;
      }

      const delta = Math.min(64, time - lastTime);
      lastTime = time;
      lastDraw = time;

      pointerX += (targetPointerX - pointerX) * 0.025;
      pointerY += (targetPointerY - pointerY) * 0.025;

      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = "screen";

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.t = (particle.t + particle.speed * delta) % 1;
        }

        const t = (particle.t + particle.offset + 1) % 1;
        const start = curvePoint(t, particle.lane, width, height, pointerX, pointerY);
        const end = curvePoint(
          Math.min(0.999, t + 0.0035 + particle.size * 0.0007),
          particle.lane,
          width,
          height,
          pointerX,
          pointerY,
        );

        const edgeFade = Math.sin(Math.PI * Math.min(1, Math.max(0, t))) ** 0.7;
        const verticalFade = Math.max(0, Math.min(1, 1.25 - start.y / (height * 0.82)));
        const alpha = particle.alpha * edgeFade * verticalFade * 0.52;

        if (alpha <= 0.01) continue;

        const warm = particle.warmth > 0.72;
        context.strokeStyle = warm
          ? `rgba(255, 219, 164, ${alpha})`
          : `rgba(238, 248, 245, ${alpha})`;
        context.lineWidth = particle.size;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
      }

      context.restore();

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const onVisibilityChange = () => {
      if (!document.hidden && !reducedMotion && !frame) {
        lastTime = performance.now();
        lastDraw = 0;
        frame = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (reducedMotion) {
      draw(performance.now());
    } else {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-vortex" aria-hidden="true" />;
}
