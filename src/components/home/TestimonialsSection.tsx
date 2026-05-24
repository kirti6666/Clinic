import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      treatment: "PRP Hair Therapy",
      quote: "I was struggling with severe hair fall for almost a year, and after taking PRP sessions here, I noticed visible improvement in hair density and reduced hair loss within a few months. The doctors were extremely professional and supportive throughout the treatment.",
    },
    {
      name: "Rahul Verma",
      treatment: "Hair Transplant",
      quote: "My hair transplant experience was excellent from consultation to recovery. The results look very natural, and the confidence I've gained after the treatment is unbelievable. Highly recommended clinic for hair restoration treatments.",
    },
    {
      name: "Sneha Kapoor",
      treatment: "HIFU Anti-Aging Treatment",
      quote: "I opted for HIFU skin tightening treatment and the results were amazing. My skin feels firmer, more lifted, and youthful without any surgery or downtime. The clinic staff and doctors made the entire experience very comfortable.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest font-bold mb-4">What Our Patients Say</h2>
          <div className="w-24 h-1 bg-sage mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="w-full bg-ivory border border-sage-light rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              {/* Before/After Images */}
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:h-48 border-b border-sage-light">
                <div className="flex-1 h-32 min-[380px]:h-auto border-b min-[380px]:border-b-0 min-[380px]:border-r border-sage-light relative overflow-hidden group/img">
                  <Image src={`/before-${i + 1}.jpg`} alt="Before Treatment" fill sizes="(max-width: 380px) 100vw, (max-width: 768px) 50vw, 15vw" className="object-cover transition-transform duration-500 group-hover/img:scale-105" />
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] md:text-xs px-2 py-1 rounded shadow-sm z-10">Before</div>
                </div>
                <div className="flex-1 h-32 min-[380px]:h-auto relative overflow-hidden group/img">
                  <Image src={`/after-${i + 1}.jpg`} alt="After Treatment" fill sizes="(max-width: 380px) 100vw, (max-width: 768px) 50vw, 15vw" className="object-cover transition-transform duration-500 group-hover/img:scale-105" />
                  <div className="absolute bottom-2 left-2 bg-sage text-white text-[10px] md:text-xs px-2 py-1 rounded shadow-sm z-10">After</div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex text-sage mb-4 gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={20} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-deep-forest/80 italic mb-5 md:mb-6 flex-1 text-sm md:text-base leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <div>
                  <h4 className="text-forest font-bold font-serif text-lg">{t.name}</h4>
                  <p className="text-sage text-xs md:text-sm font-medium">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
