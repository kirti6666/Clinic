export default function Footer() {
  return (
    <footer className="bg-deep-forest text-mist py-10 md:py-12 px-4 sm:px-6 lg:px-8 w-full text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
        <h2 className="text-sm md:text-xl font-serif tracking-widest uppercase">
          DermisproSkinHairLaserClinic
        </h2>
        
        <div className="flex gap-4 md:gap-6 justify-center">
          <a
            href="https://www.instagram.com/dermisproskinhairlaserclinic?igsh=MXI3YnlmcG8yMTkwMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sage-light transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sage-light transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
        
        <div className="text-xs md:text-sm opacity-80 mt-2 text-center">
          &copy; {new Date().getFullYear()} DERMISPROSKINHAIRLASERCLINIC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
