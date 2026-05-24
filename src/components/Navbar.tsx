"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Doctors", href: "/#doctors" },
    { label: "Services", href: "/#services" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Enquiry", href: "/#enquiry" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-6xl z-50">
        <div className="bg-ivory/80 backdrop-blur-xl border border-sage-light/40 rounded-full px-4 md:px-6 py-2.5 flex justify-between items-center shadow-[0_4px_40px_rgba(0,0,0,0.08)]">
          <Link
            href="/"
            className="text-forest tracking-widest uppercase text-[10px] sm:text-xs md:text-sm font-serif truncate"
          >
            DermisproSkinHairLaserClinic
          </Link>
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center text-forest/70 hover:text-forest transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full md:w-80 h-full bg-white shadow-xl flex flex-col z-50"
            >
              <div className="flex justify-end p-4 border-b border-sage-light/30">
                <button
                  onClick={() => setIsOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-sage hover:text-forest transition-colors"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-2 px-4 flex flex-col">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-lg font-medium text-forest hover:text-sage transition-colors border-b border-sage-light/10 last:border-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
