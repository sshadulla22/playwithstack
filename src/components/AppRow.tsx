import { ArrowUpRight, Globe } from "lucide-react";
import type { StackApp } from "../data/apps";

interface Props {
  app: StackApp;
  delay: number;
}

export default function AppRow({ app, delay }: Props) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noreferrer"
      className="anim-rise group relative block overflow-hidden border-t border-line outline-none focus-visible:ring-2 focus-visible:ring-acc"
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Launch ${app.name} — ${app.headline}`}
    >
      {/* accent sweep */}
      <div className="row-sweep absolute inset-0 origin-bottom scale-y-0 bg-acc group-hover:scale-y-100 group-focus-visible:scale-y-100" />

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-12 items-center gap-x-6 gap-y-5 px-5 py-9 transition-colors duration-500 group-hover:text-acc-ink group-focus-visible:text-acc-ink sm:px-8 md:py-12 lg:px-12">
        {/* index + key hint */}
        <div className="col-span-12 flex items-center gap-4 lg:col-span-1 lg:flex-col lg:items-start lg:gap-2">
          <span className="font-mono text-sm tracking-widest text-fog transition-colors duration-500 group-hover:text-acc-ink/60">
            {app.index}
          </span>
          <span className="hidden h-8 w-8 items-center justify-center rounded-md border border-line font-mono text-[11px] text-fog transition-colors duration-500 group-hover:border-acc-ink/30 group-hover:text-acc-ink/70 lg:flex">
            {app.key}
          </span>
        </div>

        {/* name + headline */}
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-acc transition-colors duration-500 group-hover:bg-acc-ink" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-fog transition-colors duration-500 group-hover:text-acc-ink/70">
              {app.meta}
            </span>
          </div>
          <h2 className="mt-3 text-[2.6rem] font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {app.name}
          </h2>
          <p className="mt-3 font-mono text-sm italic text-fog transition-colors duration-500 group-hover:text-acc-ink/70 sm:text-base">
            {app.headline}
          </p>
        </div>

        {/* description + tags */}
        <div className="col-span-12 lg:col-span-4">
          <p className="max-w-md text-sm leading-relaxed text-fog transition-colors duration-500 group-hover:text-acc-ink/80 sm:text-[15px]">
            {app.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {app.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-fog transition-colors duration-500 group-hover:border-acc-ink/25 group-hover:text-acc-ink/75"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* host + launch */}
        <div className="col-span-12 flex items-center justify-between gap-6 lg:col-span-2 lg:justify-end">
          <span className="flex min-w-0 items-center gap-2 font-mono text-[11px] text-fog transition-colors duration-500 group-hover:text-acc-ink/70">
            <Globe className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{app.host}</span>
          </span>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line text-chalk transition-all duration-500 group-hover:border-acc-ink group-hover:bg-acc-ink group-hover:text-acc md:h-16 md:w-16">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45 md:h-6 md:w-6" />
          </span>
        </div>
      </div>
    </a>
  );
}
