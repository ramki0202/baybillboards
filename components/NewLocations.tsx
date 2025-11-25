"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const locationImages = [
  { src: "/image/location1.webp", alt: "Billboard location 1" },
  { src: "/image/location2.webp", alt: "Billboard location 2" },
  { src: "/image/location3.webp", alt: "Billboard location 3" },
  { src: "/image/location1.webp", alt: "Billboard location 4" },
  { src: "/image/location2.webp", alt: "Billboard location 5" },
  { src: "/image/location3.webp", alt: "Billboard location 6" },
];

export default function NewLocations() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-[60px] lg:py-[120px]" id="new-locations">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            All-in-One Billboard Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Premium Billboard Locations
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Choose from our strategically positioned billboards across Hawke's
            Bay. From design to printing and installation, we manage it all for
            you.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Navigation buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-100 transition"
        >
          <span className="text-xl">←</span>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-100 transition"
        >
          <span className="text-xl">→</span>
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="w-full pb-12"
        >
          {locationImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
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
    </section>
  );
}
