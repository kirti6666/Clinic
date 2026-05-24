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

      {/* Strong gradient that fades image seamlessly into the next section (bg-mist) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-mist/10 to-mist pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl">
        <h1 
          className="font-serif font-bold text-white mb-4 drop-shadow-md leading-tight w-full"
          style={{ fontSize: "clamp(1.8rem, 5vw, 5rem)" }}
        >
          Your Skin Deserves the Best Care
        </h1>
        <p className="text-mist tracking-[0.2em] text-xs md:text-sm mb-8 uppercase font-semibold drop-shadow-md">
          DermisproSkinHairLaserClinic
        </p>
        <button
          onClick={() => window.dispatchEvent(new Event("openBookingModal"))}
          className="w-full md:w-auto min-h-[44px] bg-sage text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-forest transition-all hover:shadow-lg hover:-translate-y-1"
        >
          Book Your Appointment Now
        </button>
      </div>
    </section>
  );
}
