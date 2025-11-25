"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const galleryImages = [
  { src: "/image/location1.webp", alt: "Billboard location 1" },
  { src: "/image/location2.webp", alt: "Billboard location 2" },
  { src: "/image/location3.webp", alt: "Billboard location 3" },
];

export default function GallerySection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-gray-50 py-16" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-gray-500 mb-4">OUR WORK</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Gallery</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of billboard campaigns and designs.
          </p>
        </div>

        <div className="relative max-w-[1700px] mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white shadow rounded-full hover:bg-gray-100 transition"
          >
            <span className="text-xl">←</span>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white shadow rounded-full hover:bg-gray-100 transition"
          >
            <span className="text-xl">→</span>
          </button>

          {/* Fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1.1}
            loop={true}
            centeredSlides={true}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 1.2 },
              1280: { slidesPerView: 1.2 },
            }}
            className="select-none"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
