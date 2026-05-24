import Link from "next/link";
import Image from "next/image";

export default function DoctorsServicesSection() {
  return (
    <section className="bg-mist py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Doctors Card */}
        <div className="w-full bg-ivory rounded-2xl overflow-hidden shadow-lg border border-sage-light flex flex-col group">
          <div className="h-48 md:h-64 relative overflow-hidden group">
            <Image src="/doctors-team.jpg" alt="Our Doctors" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-1 text-center items-center">
            <h2 className="text-2xl md:text-3xl font-serif text-forest mb-3">Meet Our Doctors</h2>
            <p className="text-deep-forest/80 mb-6 md:mb-8 flex-1 text-sm md:text-base">Expert hands, compassionate care</p>
            <Link
              href="/doctors"
              className="w-full md:w-auto min-h-[44px] inline-flex items-center justify-center bg-sage text-white px-8 py-3 rounded-full font-medium hover:bg-forest transition-all hover:shadow-md"
            >
              View Doctors
            </Link>
          </div>
        </div>

        {/* Services Card */}
        <div className="w-full bg-ivory rounded-2xl overflow-hidden shadow-lg border border-sage-light flex flex-col group">
          <div className="h-48 md:h-64 relative overflow-hidden group">
            <Image src="/services-overview.jpg" alt="Our Services" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-1 text-center items-center">
            <h2 className="text-2xl md:text-3xl font-serif text-forest mb-3">Our Services</h2>
            <p className="text-deep-forest/80 mb-6 md:mb-8 flex-1 text-sm md:text-base">Advanced treatments for lasting results</p>
            <Link
              href="/services"
              className="w-full md:w-auto min-h-[44px] inline-flex items-center justify-center bg-sage text-white px-8 py-3 rounded-full font-medium hover:bg-forest transition-all hover:shadow-md"
            >
              View Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
