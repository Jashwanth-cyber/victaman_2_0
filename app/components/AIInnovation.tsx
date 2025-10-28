"use client";
import { useEffect, useRef, useState } from "react";
import { Brain, BarChart3, Zap, TrendingUp, Code } from "lucide-react";

interface InnovationItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  from: string;
  to: string;
}

const innovations: InnovationItem[] = [
  {
    icon: Brain,
    title: "Smart Development",
    description:
      "AI-powered coding and architecture optimization for faster, smarter development",
    from: "from-yellow-400",
    to: "to-orange-400",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time data insights and predictive analytics for informed decisions",
    from: "from-blue-400",
    to: "to-cyan-400",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Intelligent workflow automation that saves time and reduces manual errors",
    from: "from-purple-400",
    to: "to-pink-400",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description:
      "AI-driven optimization for peak performance and user experience",
    from: "from-green-400",
    to: "to-emerald-400",
  },
];

export default function AIInnovation() {
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32"
    >
      {/* Subtle background gradients (invisible on white, for depth) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-yellow-400/5 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            AI Innovation at the <span className="text-yellow-500">Core</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            How we leverage artificial intelligence across development, analytics,
            and marketing to deliver exceptional results
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16">

          {/* Left: Stats */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Intelligent Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We integrate AI at every stage to enhance creativity, speed, and accuracy.
              </p>
            </div>

            {/* Stats */}
            {[
              { number: "10x", label: "Faster Development", from: "from-yellow-400", to: "to-orange-400", border: "border-yellow-400/30" },
              { number: "99.9%", label: "System Uptime", from: "from-blue-400", to: "to-cyan-400", border: "border-blue-400/30" },
              { number: "50%", label: "Cost Reduction", from: "from-green-400", to: "to-emerald-400", border: "border-green-400/30" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl bg-gradient-to-r ${stat.from}/10 ${stat.to}/10 border ${stat.border} 
                  transition-all duration-700 hover:scale-105 hover:shadow-lg
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
                style={{ transitionDelay: isVisible ? `${idx * 120}ms` : "0ms" }}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.from} ${stat.to} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Animated Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center p-8 shadow-xl">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Orbiting rings */}
                <div className="absolute w-32 h-32 border-2 border-yellow-400/30 rounded-full animate-spin" />
                <div
                  className="absolute w-48 h-48 border border-yellow-400/20 rounded-full animate-spin"
                  style={{ animationDuration: "8s", animationDirection: "reverse" }}
                />
                <div className="absolute w-64 h-64 border border-yellow-400/10 rounded-full animate-pulse" />

                {/* Center Code Icon */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-xl opacity-60 animate-pulse" />
                  <Code className="relative w-12 h-12 md:w-14 md:h-14 text-yellow-600 z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {innovations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-xl bg-white border border-gray-200 
                  hover:border-yellow-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 
                  hover:-translate-y-1 cursor-default
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${idx * 100}ms` : "0ms" }}
              >
                {/* Icon */}
                <div className="mb-5">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.from}/20 ${item.to}/20 
                      flex items-center justify-center group-hover:${item.from}/30 group-hover:${item.to}/30 
                      transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}