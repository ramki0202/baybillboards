import React from "react";

const HighlightsSection = () => {
  return (
    <section className="bg-white py-20">
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
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center">
              <span className="text-xl text-orange-500">&rarr;</span>
            </span>
            <div className="flex-1 border-b border-orange-300 pb-3">
              <p className="text-lg font-medium text-neutral-900">
                High-visibility highway billboards
              </p>
            </div>
          </div>

          {/* Sub-points */}
          <div className="pl-9">
            <p className="text-base text-neutral-900">
              6x3m and 12x3m options available
            </p>
          </div>
          <div className="pl-9">
            <p className="text-base text-neutral-900">
              Ideal for brand awareness and local impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
