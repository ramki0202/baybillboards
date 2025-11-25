import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background hero video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Videos/New_Zealand_Video_Generation.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-start p-6 md:p-10">
        <Image
          src="/image/bay-billboards.png"
          alt="Bay Billboards logo"
          width={180}
          height={60}
          priority
        />
        <a
          href="#enquire"
          className="bg-red-500 text-white text-sm md:text-base font-medium px-5 py-2 rounded shadow hover:bg-red-600 transition"
        >
          Enquire now
        </a>
      </div>
      {/* Center heading */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-16">
        <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight max-w-5xl text-center">
          High-Visibility Billboards
          <span className="block mt-4">in Hawke&apos;s Bay</span>
        </h1>
      </div>
    </section>
  );
}
