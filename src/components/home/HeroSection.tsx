"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-mist">
      <Image
        src="/hero.jpg"
        alt="DermisPro Clinic Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Strong dark gradient for elegant text contrast, fading to mist at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-mist pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mt-16">
        <h1 
          className="font-serif text-white mb-6 tracking-wide leading-[1.15] drop-shadow-xl"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        >
          Your Skin Deserves <br className="hidden sm:block" /> the Best Care
        </h1>
        <p className="text-white tracking-[0.15em] sm:tracking-[0.2em] text-xs md:text-sm mb-8 font-bold uppercase drop-shadow-md">
          DermisproSkinHairLaserClinic
        </p>
        <button
          onClick={() => window.dispatchEvent(new Event("openBookingModal"))}
          className="w-[85%] max-w-[300px] sm:max-w-none sm:w-auto min-h-[44px] bg-sage text-white px-8 py-3.5 rounded-full font-medium text-sm md:text-base tracking-wide hover:bg-forest transition-all hover:shadow-md hover:-translate-y-0.5"
        >
          Book Appointment
        </button>
      </div>
    </section>
  );
}
