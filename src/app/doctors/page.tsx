import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Aarav Mehta",
      role: "Senior Cosmetic Dermatologist & Hair Restoration Specialist",
      specialisation: "Hair Transplant, PRP Therapy, GFC Therapy, Advanced Skin & Laser Treatments",
      experience: "12+ Years Experience",
      certifications: "Certified FUE Hair Transplant Specialist · Advanced Aesthetic Medicine Certification · International Laser Therapy Certification · Fellowship in Cosmetic Dermatology"
    },
    {
      name: "Dr. Kiara Sharma",
      role: "Consultant Aesthetic Physician & Anti-Aging Expert",
      specialisation: "HIFU Skin Tightening, Anti-Aging Treatments, Botox & Fillers, Facial Rejuvenation",
      experience: "9+ Years Experience",
      certifications: "Certified Aesthetic Injector · Advanced HIFU Specialist Certification · Fellowship in Anti-Aging Medicine · International Certification in Facial Aesthetics"
    },
    {
      name: "Dr. Rohan Verma",
      role: "Senior Trichologist & Hair Regrowth Consultant",
      specialisation: "Hair Fall Treatment, Scalp Disorders, PRP & GFC Therapy, Non-Surgical Hair Restoration",
      experience: "10+ Years Experience",
      certifications: "Certified Clinical Trichologist · Advanced PRP Therapy Certification · Fellowship in Hair Restoration Medicine · Certified Scalp Micropigmentation Specialist"
    },
    {
      name: "Dr. Ananya Kapoor",
      role: "Senior Skin & Laser Specialist",
      specialisation: "Acne Treatment, Pigmentation Correction, Laser Skin Rejuvenation, Chemical Peels & Medi-Facials",
      experience: "8+ Years Experience",
      certifications: "Certified Laser Therapy Specialist · Advanced Chemical Peel Certification · Fellowship in Clinical Cosmetology · International Certification in Skin Rejuvenation"
    }
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-mist min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex min-h-[44px] items-center gap-2 text-sage hover:text-forest font-medium transition-colors mb-6 md:mb-8 group p-2 -ml-2 rounded-lg hover:bg-sage/10">
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest font-bold mb-8 md:mb-12">Our Expert Doctors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-ivory border border-sage-light rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col w-full">
              <div className="w-full h-[200px] md:h-auto md:aspect-square bg-mist rounded-xl mb-5 overflow-hidden group relative">
                <Image src={`/doctor-${idx + 1}.jpg`} alt={doc.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif font-bold text-forest mb-1">{doc.name}</h3>
              <p className="text-sage font-medium text-sm mb-4 leading-tight">{doc.role}</p>
              
              <div className="flex-1 space-y-4 text-sm text-deep-forest/90">
                <div>
                  <span className="font-semibold block text-forest mb-1">Specialisation:</span>
                  {doc.specialisation}
                </div>
                <div>
                  <span className="font-semibold block text-forest mb-1">Experience:</span>
                  {doc.experience}
                </div>
                <div>
                  <span className="font-semibold block text-forest mb-1">Certifications:</span>
                  {doc.certifications}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
