"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const slides = [
  { src: '/image/location1.png', alt: 'Billboard location 1' },
  { src: '/image/location2.png', alt: 'Billboard location 2' },
  { src: '/image/location3.png', alt: 'Billboard location 3' },
];

export default function LocationsSection() {
  return (
    <section className="bg-white py-16" id="locations">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs tracking-widest text-gray-500 mb-4">ALL-IN-ONE BILLBOARD SERVICES</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Premium Billboard Locations</h2>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto mb-12">
          Choose from our strategically positioned billboards across Hawke&apos;s Bay. From design to printing and installation, we manage it all for you.
        </p>
      </div>
      <div className="relative max-w-[1700px] mx-auto px-6">
        {/* Navigation buttons */}
        <button id="prevBtn" aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white shadow rounded-full hover:bg-gray-100 transition">
          <span className="text-xl">←</span>
        </button>
        <button id="nextBtn" aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white shadow rounded-full hover:bg-gray-100 transition">
          <span className="text-xl">→</span>
        </button>
        {/* Fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: '#prevBtn', nextEl: '#nextBtn' }}
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.6 },
          }}
          className="select-none"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} className="h-[420px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow">
                <Image src={s.src} alt={s.alt} fill className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}