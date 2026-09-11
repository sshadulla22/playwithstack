import { useEffect, useState } from "react";
import { Asterisk, ArrowDown, Command } from "lucide-react";
import Backdrop from "./components/Backdrop";
import AppRow from "./components/AppRow";
import { APPS } from "./data/apps";

const TICKER = [
  "CurriculumOS",
  "Roadmaps",
  "Playbook",
  "Components",
  "Every library",
  "Modules",
  "Copy & paste",
  "Full-stack",
];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export default function App() {
  const time = useClock();

  // press 1 / 2 / 3 to launch an app
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const app = APPS.find((a) => a.key === e.key);
      if (app) window.open(app.url, "_blank", "noopener,noreferrer");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="noise relative min-h-screen bg-ink text-chalk">
      <Backdrop />

      <div className="relative z-10">
        {/* ---------- header ---------- */}
        <header className="anim-rise-soft mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-acc font-mono text-sm font-semibold text-acc-ink">
              /s
            </span>
            <span className="font-mono text-sm font-medium tracking-[0.18em] uppercase">
              The Stack
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-widest text-fog">
            <span className="hidden items-center gap-2 sm:flex">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-acc" />
              03 APPS LIVE
            </span>
            <span className="tabular-nums">{time} LOCAL</span>
          </div>
        </header>

        {/* ---------- hero ---------- */}
        <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20 lg:px-12">
          <p
            className="anim-rise-soft font-mono text-[11px] uppercase tracking-[0.28em] text-acc"
            style={{ animationDelay: "80ms" }}
          >
            Hub — three tools, one doorway
          </p>
          <h1
            className="anim-rise mt-6 text-[13.5vw] font-semibold leading-[0.9] tracking-[-0.03em] sm:text-[11vw] lg:text-[9rem]"
            style={{ animationDelay: "180ms" }}
          >
            One hub.
            <br />
            <span className="font-normal italic text-fog">three tools.</span>
          </h1>
          <div
            className="anim-rise-soft mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between"
            style={{ animationDelay: "320ms" }}
          >
            <p className="max-w-md text-base leading-relaxed text-fog sm:text-lg">
              A curriculum that teaches you to build, and a playbook that
              hands you the pieces. Everything below opens in a new tab —
              pick a lane.
            </p>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-widest text-fog">
              <span className="flex h-6 w-6 items-center justify-center rounded border border-line">
                <Command className="h-3 w-3" />
              </span>
              <span>
                PRESS <span className="text-acc">1</span> —{" "}
                <span className="text-acc">3</span> TO LAUNCH
              </span>
            </div>
          </div>
        </section>

        {/* ---------- marquee ---------- */}
        <div
          className="anim-rise relative overflow-hidden border-y border-line bg-ink-2/60 py-4"
          style={{ animationDelay: "420ms" }}
        >
          <div className="marquee-track flex w-max items-center">
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center" aria-hidden={half === 1}>
                {TICKER.map((word) => (
                  <span
                    key={`${half}-${word}`}
                    className="flex items-center font-mono text-xs uppercase tracking-[0.3em] text-fog"
                  >
                    <span className="px-6">{word}</span>
                    <Asterisk className="h-3.5 w-3.5 text-acc" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- app index ---------- */}
        <main className="pb-4">
          <div className="anim-line h-px w-full bg-line" style={{ animationDelay: "480ms" }} />
          {APPS.map((app, i) => (
            <AppRow key={app.id} app={app} delay={520 + i * 140} />
          ))}
          <div className="border-t border-line" />
        </main>

        {/* ---------- footer ---------- */}
        <footer className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="font-mono text-[11px] tracking-widest text-fog">
            THE STACK — APP HUB
          </p>
          <p className="font-mono text-[11px] tracking-widest text-fog">
            CURRICULUM-OS × PLAYBOOK × ARENA
          </p>
          <p className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-fog">
            <ArrowDown className="h-3 w-3 text-acc" />
            ALL LINKS OPEN IN A NEW TAB
          </p>
        </footer>
      </div>
    </div>
  );
}
