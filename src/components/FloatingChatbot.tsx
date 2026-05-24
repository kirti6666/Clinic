"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "bot",
      text: "Hi! I'm your DermisPro Assistant. What would you like to know?",
    },
  ]);

  const quickReplies = [
    {
      label: "What treatments do you offer?",
      reply: "We offer Hair Transplant, PRP Therapy, GFC Therapy, HIFU Anti-Aging, and Laser Treatments. Click 'Our Services' to explore details!",
    },
    {
      label: "How do I book an appointment?",
      reply: "Click the 'Book Your Appointment Now' button on the home page or contact us at +91 9684023073!",
    },
    {
      label: "Where are you located?",
      reply: "We are located at 102, Gera's Park View Plaza, EON Free Zone, Kharadi, Pune – 411014.",
    },
    {
      label: "What are your timings?",
      reply: "Our working hours are [PLACEHOLDER]. You can also reach us on WhatsApp anytime!",
    },
    {
      label: "Talk to a doctor",
      reply: "Please call us at +91 9684023073 or chat on WhatsApp and our team will connect you with the right doctor!",
    },
  ];

  const handleSend = (text: string, isQuickReply: boolean = false) => {
    if (!text.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), sender: "user", text },
    ];

    if (isQuickReply) {
      const match = quickReplies.find((q) => q.label === text);
      if (match) {
        newMessages.push({
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: match.reply,
        });
      }
    } else {
      newMessages.push({
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "For detailed queries, please call us at +91 9684023073 or use the Enquiry section below!",
      });
    }

    setMessages(newMessages);
    setInputText("");
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-[72px] md:bottom-[80px] right-0 w-[90vw] md:w-[320px] h-[70vh] md:h-[420px] max-h-[calc(100vh-120px)] bg-ivory rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-sage-light"
          >
            {/* Header */}
            <div className="bg-forest text-white p-3 md:p-4 flex justify-between items-center z-20">
              <h3 className="font-medium text-sm md:text-base">DermisPro Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-mist transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 flex flex-col gap-3 bg-ivory pb-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === "user"
                      ? "bg-sage text-white self-end rounded-tr-sm"
                      : "bg-mist text-deep-forest self-start rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Quick Replies & Input */}
            <div className="p-3 bg-white border-t border-sage-light z-20">
              <div className="flex gap-2 mb-3 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => handleSend(qr.label, true)}
                    className="whitespace-nowrap flex-none text-sm md:text-xs bg-mist border border-sage-light/50 text-forest px-4 py-2 md:py-1.5 rounded-full hover:bg-sage hover:text-white transition-colors"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputText);
                }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 text-sm outline-none px-3 h-12 bg-ivory border border-sage-light rounded-lg focus:border-sage focus:ring-1 focus:ring-sage"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="text-sage disabled:opacity-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-14 md:h-14 bg-sage rounded-full flex items-center justify-center text-white shadow-lg hover:bg-forest transition-colors ml-auto relative z-10"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
