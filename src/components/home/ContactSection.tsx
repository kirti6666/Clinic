export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-mist">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest font-bold mb-4">Find Us</h2>
          <div className="w-24 h-1 bg-sage mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Details */}
          <div className="space-y-6 md:space-y-8 bg-ivory p-6 md:p-12 rounded-3xl border border-sage-light shadow-sm w-full">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-forest font-bold mb-4 md:mb-6 uppercase tracking-wider">
                🏥 DermisproSkinHairLaserClinic
              </h3>
            </div>
            
            <div className="space-y-5 md:space-y-6 text-deep-forest text-sm md:text-lg">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-xl md:text-2xl min-w-[24px]">📍</span>
                <p className="flex-1">
                  102, Gera's Park View Plaza,<br />
                  Gera Emerald Road, EON Free Zone,<br />
                  Kharadi, Pune – 411014
                </p>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-xl md:text-2xl min-w-[24px]">📞</span>
                <a href="tel:+919684023073" className="flex-1 hover:text-sage transition-colors font-medium min-h-[44px] flex items-center">
                  +91 9684023073
                </a>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-xl md:text-2xl min-w-[24px]">📧</span>
                <a href="mailto:dermispro@gmail.com" className="flex-1 hover:text-sage transition-colors font-medium min-h-[44px] flex items-center">
                  dermispro@gmail.com
                </a>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4 pt-1">
                <span className="text-xl md:text-2xl min-w-[24px]">🕐</span>
                <div className="flex-1">
                  <p className="font-medium">Working Hours:</p>
                  <p className="opacity-80 mt-1">[PLACEHOLDER]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[250px] md:h-[350px] bg-ivory rounded-3xl overflow-hidden border border-sage-light shadow-sm order-last">
            <iframe
              src="https://maps.google.com/maps?q=102,%20Gera's%20Park%20View%20Plaza,%20Kharadi,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
