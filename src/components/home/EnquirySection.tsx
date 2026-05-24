"use client";

import { useState } from "react";

export default function EnquirySection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest font-bold mb-3 md:mb-4">
            Have a Question? We're Here to Help
          </h2>
          <p className="text-sage text-base md:text-lg font-medium px-2">
            Fill in the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="w-full max-w-[600px] mx-auto bg-mist border border-sage-light rounded-2xl shadow-sm p-5 md:p-10">
          {isSubmitted ? (
            <div className="py-12 text-center text-forest font-serif text-xl md:text-2xl">
              Thank you! We'll reach out to you within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Full Name</label>
                <input required type="text" className="w-full h-12 bg-ivory border border-sage-light rounded-lg px-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Phone Number</label>
                <input required type="tel" pattern="[0-9]{10}" maxLength={10} placeholder="10-digit number" className="w-full h-12 bg-ivory border border-sage-light rounded-lg px-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Your Question</label>
                <textarea required rows={4} className="w-full bg-ivory border border-sage-light rounded-lg px-4 py-3 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all resize-y min-h-[100px]" />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Treatment Selection</label>
                <select className="w-full h-12 bg-ivory border border-sage-light rounded-lg px-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all">
                  <option value="">Select Treatment (Optional)</option>
                  <option value="Hair Transplant">Hair Transplant</option>
                  <option value="PRP Therapy">PRP Therapy</option>
                  <option value="GFC Therapy">GFC Therapy</option>
                  <option value="HIFU Anti-Aging">HIFU Anti-Aging</option>
                  <option value="Laser Treatment">Laser Treatment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Preferred Date</label>
                <input type="date" className="w-full h-12 bg-ivory border border-sage-light rounded-lg px-4 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Message / Additional Notes</label>
                <textarea rows={4} className="w-full bg-ivory border border-sage-light rounded-lg px-4 py-3 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all resize-y min-h-[100px]" />
              </div>

              <div className="pt-2 md:pt-4 space-y-3 md:space-y-4">
                <button
                  type="submit"
                  className="w-full h-[52px] min-h-[44px] bg-sage text-white rounded-full font-medium text-base md:text-lg hover:bg-forest transition-colors shadow-sm"
                >
                  Send Enquiry
                </button>

                <a
                  href="https://wa.me/919684023073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[52px] min-h-[44px] inline-flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-full font-medium text-base md:text-lg hover:bg-[#1DA851] transition-colors shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
