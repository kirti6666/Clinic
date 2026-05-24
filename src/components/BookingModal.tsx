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
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full h-full md:h-auto md:max-w-lg bg-ivory md:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:max-h-[90vh]"
          >
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-sage-light bg-ivory sticky top-0 z-10">
              <h2 className="text-xl md:text-2xl font-serif text-forest font-bold">Book Appointment</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-sage hover:text-forest transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 md:p-6 overflow-y-auto flex-1">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">Name</label>
                  <input type="text" required className="w-full h-12 border border-sage-light rounded-lg px-4 bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1">Age</label>
                    <input type="number" required min="1" className="w-full h-12 border border-sage-light rounded-lg px-4 bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1">Sex</label>
                    <select required className="w-full h-12 border border-sage-light rounded-lg px-4 bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage">
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">Treatment</label>
                  <select required className="w-full h-12 border border-sage-light rounded-lg px-4 bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage">
                    <option value="">Select Treatment</option>
                    <option value="Hair Transplant">Hair Transplant</option>
                    <option value="PRP Therapy">PRP Therapy</option>
                    <option value="GFC Therapy">GFC Therapy</option>
                    <option value="HIFU Anti-Aging">HIFU Anti-Aging</option>
                    <option value="Laser Treatment">Laser Treatment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">Preferred Doctor</label>
                  <select className="w-full h-12 border border-sage-light rounded-lg px-4 bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage">
                    <option value="">Any Doctor</option>
                    <option value="Dr. Aarav Mehta">Dr. Aarav Mehta</option>
                    <option value="Dr. Kiara Sharma">Dr. Kiara Sharma</option>
                    <option value="Dr. Rohan Verma">Dr. Rohan Verma</option>
                    <option value="Dr. Ananya Kapoor">Dr. Ananya Kapoor</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1">Preferred Date</label>
                    <input type="date" required className="w-full h-12 border border-sage-light rounded-lg px-4 bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1">Preferred Time</label>
                    <input type="time" required className="w-full h-12 border border-sage-light rounded-lg px-4 bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-sage text-white rounded-full font-medium hover:bg-forest transition-colors mt-6"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
