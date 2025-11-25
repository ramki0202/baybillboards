import React from "react";

const HighlightsSection = () => {
  return (
    <section className="bg-white pb-[60px] lg:pb-[120px]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start lg:items-center">
        {/* Left content */}
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.25em] text-neutral-500 uppercase">
            Site Highlights
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-neutral-900">
            Premium Sites Across
            <br className="hidden sm:block" />
            Hawke&apos;s Bay
          </h2>
        </div>

        {/* Right content */}
        <div className="space-y-6">
          {/* Main highlight with arrow and underline */}
          <div className="group cursor-pointer">
            <div className="flex items-start gap-3 relative">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center transition-all duration-300">
                <span className="text-red-500" style={{ fontSize: "32px" }}>
                  &rarr;
                </span>
              </span>
              <div className="flex-1 border-b border-gray-300 pb-3">
                <p className="text-[32px] text-neutral-900">
                  High-visibility highway billboards
                </p>
              </div>
            </div>
          </div>

          {/* Sub-points */}
          <div className="group cursor-pointer">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-red-500" style={{ fontSize: "32px" }}>
                  &rarr;
                </span>
              </span>
              <div className="">
                <p className="text-[32px] text-neutral-900">
                  6x3m and 12x3m options available
                </p>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-red-500" style={{ fontSize: "32px" }}>
                  &rarr;
                </span>
              </span>
              <div className="">
                <p className="text-[32px] text-neutral-900">
                  Ideal for brand awareness and local impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
