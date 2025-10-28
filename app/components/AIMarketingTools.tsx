"use client";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  BarChart3,
  PenTool,
  Zap,
  Mail,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface Tool {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  from: string;
  to: string;
}

const tools: Tool[] = [
  {
    icon: Brain,
    title: "AI SEO Platforms",
    description: "AI-powered visibility on generative search engines.",
    features: [
      "ChatGPT, Gemini, Perplexity visibility",
      "AI competitor tracking",
      "Keyword opportunity ID",
      "AI search ranking",
    ],
    from: "from-yellow-400",
    to: "to-orange-400",
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Real-time insights with predictive analytics.",
    features: [
      "GA4 + AI dashboards",
      "Customer behavior tracking",
      "Real-time performance",
      "Predictive insights",
    ],
    from: "from-blue-400",
    to: "to-cyan-400",
  },
  {
    icon: PenTool,
    title: "AI Content Creation",
    description: "Scalable content with human refinement.",
    features: [
      "Blog & landing pages",
      "Social media content",
      "Ad copy generation",
      "Brand voice sync",
    ],
    from: "from-purple-400",
    to: "to-pink-400",
  },
  {
    icon: Zap,
    title: "PPC Automation",
    description: "AI-driven bid and placement optimization.",
    features: [
      "Dynamic bidding",
      "Smart ad placement",
      "Advanced targeting",
      "ROAS optimization",
    ],
    from: "from-green-400",
    to: "to-emerald-400",
  },
  {
    icon: Mail,
    title: "AI Email & Personalization",
    description: "Smart segmentation and engagement.",
    features: [
      "Smart segmentation",
      "Personalized recs",
      "Campaign automation",
      "Engagement boost",
    ],
    from: "from-pink-400",
    to: "to-rose-400",
  },
  {
    icon: TrendingUp,
    title: "Predictive Targeting",
    description: "Forecast behavior and market trends.",
    features: [
      "Behavior prediction",
      "Campaign forecasting",
      "Trend analysis",
      "Smart segmentation",
    ],
    from: "from-indigo-400",
    to: "to-purple-400",
  },
];

export default function AIMarketingTools() {
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
      className="relative overflow-hidden bg-black py-20 md:py-28 lg:py-32"
    >
      {/* Subtle background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Core AI Marketing{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Tools
            </span>
          </h2>
          <p
            className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Cutting-edge AI tools that power intelligent, data-driven marketing.
          </p>
        </div>

        {/* Perfect 3×2 Grid (6 boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.slice(0, 6).map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-800 
                  hover:border-yellow-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 
                  hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${idx * 80}ms` : "0ms" }}
              >
                {/* Icon */}
                <div className="mb-5 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.from} ${tool.to} rounded-lg blur-xl 
                      opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                  <div
                    className={`relative w-12 h-12 bg-gradient-to-br ${tool.from}/20 ${tool.to}/20 
                      rounded-lg flex items-center justify-center group-hover:${tool.from}/30 group-hover:${tool.to}/30 
                      transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors mb-2">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4">
                  {tool.description}
                </p>

                {/* Features (2 + more) */}
                <ul className="space-y-1.5 pt-3 border-t border-gray-700">
                  {tool.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {tool.features.length > 2 && (
                    <li className="text-xs text-yellow-400 font-medium pt-1">
                      +{tool.features.length - 2} more
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 p-8 md:p-10 rounded-xl bg-gradient-to-r from-gray-900 to-black border border-yellow-400/30 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Scale with AI?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-base md:text-lg">
            Let’s build your AI-powered marketing engine.
          </p>
          <button className="px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-lg font-bold hover:shadow-xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            Get AI Strategy
          </button>
        </div>
      </div>
    </section>
  );
}