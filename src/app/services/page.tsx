import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Hair Transplant",
      desc: "Advanced FUE Hair Transplant treatment designed to restore natural hair growth, improve hair density, and rebuild confidence with long-lasting results. Performed by experienced specialists using modern sapphire blade technology for minimal downtime and natural-looking outcomes.",
      price: "Starting from ₹24,999/-"
    },
    {
      title: "HIFU Anti-Aging Treatment",
      desc: "Non-surgical HIFU skin tightening treatment that helps lift sagging skin, reduce wrinkles, improve jawline definition, and boost natural collagen production for a youthful appearance. Safe, painless, and requires minimal downtime.",
      price: "Starting from ₹5,999/-"
    },
    {
      title: "PRP Hair Therapy",
      desc: "PRP (Platelet-Rich Plasma) Therapy is an advanced hair regrowth treatment that uses the patient's own growth factors to strengthen hair follicles, reduce hair fall, and stimulate natural hair growth. Ideal for early-stage hair thinning and hair loss control.",
      price: "Starting from ₹10,000/- per session"
    },
    {
      title: "GFC Hair Therapy",
      desc: "GFC (Growth Factor Concentrate) Therapy is an advanced non-surgical hair restoration treatment that uses concentrated growth factors to nourish hair follicles, improve scalp health, and promote thicker, healthier hair growth with effective long-term results.",
      price: "Starting from ₹15,000/- per session"
    },
    {
      title: "Skin & Laser Treatment",
      desc: "Advanced skin and laser treatments designed to improve skin texture, reduce pigmentation, treat acne scars, and restore healthy glowing skin using modern dermatology technology and personalized skincare solutions.",
      price: "Starting from ₹3,999/-"
    }
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-mist min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex min-h-[44px] items-center gap-2 text-sage hover:text-forest font-medium transition-colors mb-6 md:mb-8 group p-2 -ml-2 rounded-lg hover:bg-sage/10">
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest font-bold mb-8 md:mb-12">Our Treatments</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-ivory border border-sage-light rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col group w-full">
              <div className="w-full h-[180px] md:h-auto md:aspect-[4/3] bg-mist rounded-xl mb-5 overflow-hidden group relative">
                <Image src={`/service-${idx + 1}.jpg`} alt={srv.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif font-bold text-forest mb-3">{srv.title}</h3>
              <p className="text-deep-forest/80 text-sm md:text-base leading-relaxed mb-6 flex-1">
                {srv.desc}
              </p>
              <div className="border-t border-sage-light pt-4 mb-5">
                <p className="font-semibold text-lg text-sage">{srv.price}</p>
              </div>
              <button className="w-full min-h-[44px] bg-sage text-white py-3 rounded-full font-medium hover:bg-forest transition-colors shadow-sm">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
