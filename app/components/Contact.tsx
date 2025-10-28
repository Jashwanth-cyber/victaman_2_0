"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitMessage("Thank you! We'll reply within 24 hours.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch {
      setSubmitMessage("Oops! Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
            }`}
          >
            Let's Build the Future{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
            }`}
          >
            Ready to transform your business with AI? Let’s start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">

          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            {[
              { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
              { icon: Mail, title: "Email", content: "hello@victaman.com" },
              { icon: MapPin, title: "Location", content: "San Francisco, CA" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group flex gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
                    hover:border-yellow-400/40 hover:bg-white/10 transition-all duration-400 cursor-default
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 
                    group-hover:from-yellow-400/30 group-hover:to-orange-400/30 transition-all flex-shrink-0">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300 mt-1">{item.content}</p>
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div
              className={`pt-8 border-t border-white/10 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-white font-semibold mb-5 text-lg">Connect With Us</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, label: "LinkedIn", href: "#" },
                  { Icon: Twitter, label: "Twitter", href: "#" },
                  { Icon: Facebook, label: "Facebook", href: "#" },
                  { Icon: Instagram, label: "Instagram", href: "#" },
                ].map(({ Icon, label, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 
                      flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black 
                      hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/30 
                      transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 
                backdrop-blur-xl border border-white/20 shadow-2xl space-y-6"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 
                      text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                      focus:ring-yellow-400/50 focus:border-yellow-400/60 transition-all 
                      backdrop-blur-sm text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 
                      text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                      focus:ring-yellow-400/50 focus:border-yellow-400/60 transition-all 
                      backdrop-blur-sm text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 
                      text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                      focus:ring-yellow-400/50 focus:border-yellow-400/60 transition-all 
                      backdrop-blur-sm resize-none text-base"
                    placeholder="Tell us about your project or idea..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 
                  text-black rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-yellow-400/50 
                  transition-all duration-300 flex items-center justify-center gap-3 
                  disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Feedback Message */}
              {submitMessage && (
                <div
                  className={`p-4 rounded-xl text-center text-sm font-medium transition-all duration-500 
                    ${submitMessage.includes("Oops") 
                      ? "bg-red-500/20 border border-red-500/50 text-red-300" 
                      : "bg-green-500/20 border border-green-500/50 text-green-300"
                    }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </section>
  );
}