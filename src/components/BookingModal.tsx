"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener("openBookingModal", handleOpen);
    return () => window.removeEventListener("openBookingModal", handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm md:bg-black/40"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full h-full md:h-auto md:max-w-md bg-[#FAF9F6] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:max-h-[90vh]"
          >
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => setIsModalOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-forest/70 hover:text-forest transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col">
              <div className="text-center mb-8 mt-6">
                <h2 className="text-4xl md:text-5xl font-serif text-[#1C2319] mb-3">DermisPro</h2>
                <p className="text-sage text-sm tracking-widest font-light uppercase">Book Appointment</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-xs font-light text-forest/70 mb-1.5 uppercase tracking-wide">Name</label>
                  <input type="text" placeholder="Your Name" required className="w-full h-12 bg-white rounded-xl px-4 text-forest placeholder:text-forest/30 focus:outline-none focus:ring-1 focus:ring-sage/30 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-transparent" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-light text-forest/70 mb-1.5 uppercase tracking-wide">Age</label>
                    <input type="number" placeholder="25" required min="1" className="w-full h-12 bg-white rounded-xl px-4 text-forest placeholder:text-forest/30 focus:outline-none focus:ring-1 focus:ring-sage/30 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-light text-forest/70 mb-1.5 uppercase tracking-wide">Sex</label>
                    <select required className="w-full h-12 bg-white rounded-xl px-4 text-forest focus:outline-none focus:ring-1 focus:ring-sage/30 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-transparent appearance-none">
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-light text-forest/70 mb-1.5 uppercase tracking-wide">Treatment</label>
                  <select required className="w-full h-12 bg-white rounded-xl px-4 text-forest focus:outline-none focus:ring-1 focus:ring-sage/30 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-transparent appearance-none">
                    <option value="">Select Treatment</option>
                    <option value="Hair Transplant">Hair Transplant</option>
                    <option value="PRP Therapy">PRP Therapy</option>
                    <option value="GFC Therapy">GFC Therapy</option>
                    <option value="HIFU Anti-Aging">HIFU Anti-Aging</option>
                    <option value="Laser Treatment">Laser Treatment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-light text-forest/70 mb-1.5 uppercase tracking-wide">Doctor</label>
                  <select className="w-full h-12 bg-white rounded-xl px-4 text-forest focus:outline-none focus:ring-1 focus:ring-sage/30 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-transparent appearance-none">
                    <option value="">Any Doctor</option>
                    <option value="Dr. Aarav Mehta">Dr. Aarav Mehta</option>
                    <option value="Dr. Kiara Sharma">Dr. Kiara Sharma</option>
                    <option value="Dr. Rohan Verma">Dr. Rohan Verma</option>
                    <option value="Dr. Ananya Kapoor">Dr. Ananya Kapoor</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-light text-forest/70 mb-1.5 uppercase tracking-wide">Date</label>
                    <input type="date" required className="w-full h-12 bg-white rounded-xl px-4 text-sm text-forest focus:outline-none focus:ring-1 focus:ring-sage/30 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-light text-forest/70 mb-1.5 uppercase tracking-wide">Time</label>
                    <input type="time" required className="w-full h-12 bg-white rounded-xl px-4 text-sm text-forest focus:outline-none focus:ring-1 focus:ring-sage/30 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-transparent" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-14 border border-sage text-sage rounded-full font-light tracking-wide hover:bg-sage hover:text-white transition-colors mt-8 mb-4"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
