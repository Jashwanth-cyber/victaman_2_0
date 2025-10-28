"use client";
import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Globe,
  Megaphone,
  Zap,
  ShoppingCart,
  Database,
  Share2,
  TrendingUp,
  Mail,
  Search,
  Brain,
} from "lucide-react";

interface Service {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  services: Service[];
}

const services: ServiceCategory[] = [
  {
    id: "app",
    name: "App Development",
    icon: Smartphone,
    services: [
      { title: "iOS Mobile App", icon: Smartphone },
      { title: "Android Mobile App", icon: Smartphone },
      { title: "Mobile App UI/UX", icon: Smartphone },
      { title: "Multi-Platform Mobile App", icon: Zap },
      { title: "Mobile App Strategy", icon: Zap },
      { title: "App Development", icon: Smartphone },
    ],
  },
  {
    id: "web",
    name: "Web Development",
    icon: Globe,
    services: [
      { title: "DevOps", icon: Database },
      { title: "ERP Applications", icon: Database },
      { title: "SaaS Development", icon: Globe },
      { title: "E-Commerce Solutions", icon: ShoppingCart },
      { title: "Content Management System", icon: Globe },
      { title: "Progressive Web Apps", icon: Zap },
    ],
  },
  {
    id: "ai-seo",
    name: "AI SEO",
    icon: Brain,
    services: [
      { title: "LLM Optimization", icon: Brain },
      { title: "ChatGPT Optimization", icon: Brain },
      { title: "Perplexity Optimization", icon: Brain },
      { title: "AI Search Visibility", icon: Search },
      { title: "Generative AI Ranking", icon: Zap },
      { title: "AI Content Strategy", icon: Megaphone },
    ],
  },
  {
    id: "marketing",
    name: "Branding & Marketing",
    icon: Megaphone,
    services: [
      { title: "PPC Campaign", icon: TrendingUp },
      { title: "Content Writing", icon: Megaphone },
      { title: "Performance Marketing", icon: TrendingUp },
      { title: "Social Media Promotions", icon: Share2 },
      { title: "Email & SMS Marketing", icon: Mail },
      { title: "Search Engine Optimization (SEO)", icon: Search },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("app");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const activeCategory = services.find((s) => s.id === activeTab)!;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 md:py-28 lg:py-32"
    >
      {/* Background blob */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p
            className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm ${
                  activeTab === service.id
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/40"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-yellow-400/50 hover:shadow-md"
                }`}
              >
                <Icon className="w-5 h-5" />
                {service.name}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 
                  hover:border-yellow-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/20 
                  hover:-translate-y-1 cursor-default backdrop-blur-sm
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${idx * 60}ms` : "0ms" }}
              >
                {/* Icon with glow */}
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-yellow-400/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-lg flex items-center justify-center group-hover:from-yellow-400/40 group-hover:to-orange-400/40 transition-all duration-300">
                    <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-yellow-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Learn more arrow */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center text-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 p-8 md:p-10 rounded-xl bg-gradient-to-r from-black to-gray-900 border border-yellow-400/20 text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-base md:text-lg">
            Let's discuss how we can help you achieve your goals with cutting-edge AI solutions.
          </p>
          <button className="px-8 py-3.5 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/50 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}