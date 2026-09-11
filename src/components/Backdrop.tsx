import { useEffect, useRef } from "react";

export default function Backdrop() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      glow.style.transform = `translate3d(${x - 350}px, ${y - 350}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      {/* dot grid */}
      <div className="dotgrid absolute inset-0" />
      {/* fade dot grid at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,transparent_30%,var(--color-ink)_92%)]" />
      {/* ambient accent blobs */}
      <div className="blob absolute -top-40 left-1/2 h-[34rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-acc)_13%,transparent),transparent_72%)]" />
      <div className="blob absolute -bottom-56 -left-40 h-[30rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-acc)_8%,transparent),transparent_72%)] [animation-delay:-8s]" />
      {/* pointer glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 hidden h-[700px] w-[700px] rounded-full opacity-70 md:block"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-acc) 10%, transparent), transparent 70%)",
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_50%,transparent_55%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
