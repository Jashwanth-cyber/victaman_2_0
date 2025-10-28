"use client";
import { useEffect, useRef, useState } from "react";
import { Brain, Zap, Shield } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI Intelligence",
    desc: "Smart solutions powered by artificial intelligence",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Rapid development cycles with agile methodologies",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    desc: "Enterprise-grade security and reliability",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32"
    >
      {/* Scoped animations */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-spin-med  { animation: spin 15s linear infinite reverse; }
        .animate-spin-fast { animation: spin 10s linear infinite; }
        .animate-pulse-glow {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(251,191,36,0.6); }
          50%      { box-shadow: 0 0 40px rgba(251,191,36,1); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute top-16 right-8 md:right-12 w-64 h-64 md:w-80 md:h-80 bg-yellow-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-16 left-8 md:left-12 w-64 h-64 md:w-80 md:h-80 bg-yellow-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ---------- LEFT: TEXT & FEATURES ---------- */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-yellow-500">Victaman</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Victaman is an AI-driven digital solutions company dedicated to
              transforming businesses. We help startups and enterprises innovate,
              automate, and scale through cutting-edge technology and intelligent
              design.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
             With a passionate team of tech-savvy professionals, marketing experts, and the best recruiters, we dare to offer the latest digital technologies, marketing, and recruitment solutions to our clients worldwide.
            </p>

            {/* Feature Cards */}
            <div className="space-y-5">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className={`flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 
                      transition-all duration-700 hover:border-yellow-400 hover:bg-yellow-50
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------- RIGHT: ANIMATED VISUAL ---------- */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative p-8 md:p-10">
              <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-white/70 to-yellow-50 border border-yellow-200 backdrop-blur-sm p-8 md:p-10 shadow-xl">
                <div className="flex justify-center">
                  <div className="relative w-64 h-64 md:w-72 md:h-72">

                    {/* Orbit rings */}
                    <div className="absolute inset-0 border-2 border-yellow-200 rounded-full animate-spin-slow" />
                    <div className="absolute inset-4 border-2 border-yellow-300 rounded-full animate-spin-med" />
                    <div className="absolute inset-8 border-2 border-yellow-400 rounded-full animate-spin-fast" />

                    {/* Center AI Brain */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                        <Brain className="w-14 h-14 md:w-16 md:h-16 text-black" />
                      </div>
                    </div>

                    {/* Orbiting dots */}
                    {[0, 120, 240].map((angle, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-yellow-500 rounded-full animate-spin-fast"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `rotate(${angle}deg) translateY(-100px) translateX(-50%)`,
                          animationDelay: `${i * 0.4}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-5 mt-10">
                  <div className="text-center p-4 rounded-lg bg-white/20 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-yellow-600">50+</div>
                    <div className="text-sm text-gray-700 mt-1">Projects</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/20 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-yellow-600">30+</div>
                    <div className="text-sm text-gray-700 mt-1">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}