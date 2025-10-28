"use client";
import { ArrowRight, Sparkles, Code, Hammer, Wrench, Palette, Laptop, Rocket, Lightbulb, Cloud, Globe, Terminal, Smartphone, Paintbrush, Settings, Database, Shield, Zap, Camera, Headphones, Mail, Mic, Monitor, Printer } from "lucide-react";
import Tilt from "react-parallax-tilt";

export default function Hero() {
  return (
    <>
      {/* -------------------------------------------------
           Dual Orbit: 9 + 12 Icons – Perfect Spacing
         ------------------------------------------------- */}
      <style jsx>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes orbit-ccw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(255,193,7,0.8)); }
          50%      { filter: drop-shadow(0 0 36px rgba(255,193,7,1)); }
        }

        .orbit-cw {
          position: absolute;
          inset: 0;
          animation: orbit-cw 42s linear infinite;
        }

        .orbit-ccw {
          position: absolute;
          inset: 0;
          animation: orbit-ccw 36s linear infinite;
        }

        .planet {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          box-shadow: 0 6px 16px rgba(0,0,0,0.18);
        }

        .spin-self {
          animation: spin var(--spin-speed) linear infinite;
        }

        .animate-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 via-yellow-300 to-orange-100 pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Subtle overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>

        {/* Bottom fade line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent" />

        {/* Grid */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center z-10 w-full">

          {/* ---------- LEFT: CONTENT (Perfect Padding) ---------- */}
          <div className="space-y-7 text-left max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/35 border border-white/60 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4.5 h-4.5 text-black" />
              <span className="text-sm font-bold text-black tracking-wide">TEAM VICTAMAN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-black leading-tight drop-shadow-md">
              We Don't Just Build —{" "}
              <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                We Create Experiences That Last
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-900 max-w-lg drop-shadow-sm leading-relaxed">
              Victaman delivers world-class app, web, and marketing solutions — powered by innovation and intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <button className="group px-9 py-3.5 bg-black text-yellow-400 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 flex items-center justify-center gap-2.5">
                Get Started
                <ArrowRight className="w-5.5 h-5.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-9 py-3.5 border-2 border-black text-black rounded-lg font-bold text-lg hover:bg-black/10 transition-all duration-300 backdrop-blur-sm">
                Explore Services
              </button>
            </div>
          </div>

          {/* ---------- RIGHT: DUAL ORBIT (Perfect Spacing) ---------- */}
          <div className="flex justify-center md:justify-end">
            <Tilt
              className="relative w-full max-w-md md:max-w-lg lg:max-w-xl aspect-square"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1800}
              scale={1.02}
              transitionSpeed={2200}
              gyroscope={true}
            >
              <div className="relative w-full h-full flex items-center justify-center">

                {/* === SUN: <Code /> — Perfectly Centered === */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
                    <div className="absolute inset-0 w-full h-full bg-yellow-400/70 blur-3xl rounded-full animate-glow" />
                    <div className="absolute inset-0 w-36 h-36 md:w-44 md:h-44 bg-yellow-300/50 blur-2xl rounded-full animate-glow" />
                    <Code className="relative w-24 h-24 md:w-32 md:h-32 text-black animate-glow drop-shadow-2xl" />
                  </div>
                </div>

                {/* === INNER ORBIT: 9 Icons (Clockwise) === */}
                <div className="orbit-cw">
                  {[
                    { Icon: Hammer,     bg: "bg-orange-500",  color: "text-white", spin: "3s",   angle: 0   },
                    { Icon: Wrench,     bg: "bg-red-600",     color: "text-white", spin: "4s",   angle: 40  },
                    { Icon: Palette,    bg: "bg-purple-600",  color: "text-white", spin: "5s",   angle: 80  },
                    { Icon: Laptop,     bg: "bg-blue-600",    color: "text-white", spin: "6s",   angle: 120 },
                    { Icon: Rocket,     bg: "bg-green-600",   color: "text-white", spin: "4s",   angle: 160 },
                    { Icon: Lightbulb,  bg: "bg-yellow-500",  color: "text-black", spin: "3.5s", angle: 200 },
                    { Icon: Cloud,      bg: "bg-cyan-500",    color: "text-white", spin: "5s",   angle: 240 },
                    { Icon: Globe,      bg: "bg-indigo-600",  color: "text-white", spin: "7s",   angle: 280 },
                    { Icon: Terminal,   bg: "bg-pink-600",    color: "text-white", spin: "4.5s", angle: 320 },
                  ].map(({ Icon, bg, color, spin, angle }, i) => {
                    const radius = 180;
                    const rad = (angle * Math.PI) / 180;
                    const x = radius * Math.cos(rad);
                    const y = radius * Math.sin(rad);

                    return (
                      <div
                        key={`inner-${i}`}
                        className="planet"
                        style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                      >
                        <div className={`w-full h-full ${bg} rounded-full flex items-center justify-center p-2.5`}>
                          <Icon className={`w-8 h-8 md:w-10 md:h-10 ${color} spin-self animate-glow`} style={{ "--spin-speed": spin } as React.CSSProperties} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* === OUTER ORBIT: 12 Icons (Counter-Clockwise) === */}
                <div className="orbit-ccw">
                  {[
                    { Icon: Smartphone, bg: "bg-teal-600",     color: "text-white", spin: "5s",   angle: 0   },
                    { Icon: Paintbrush, bg: "bg-amber-600",    color: "text-white", spin: "4s",   angle: 30  },
                    { Icon: Settings,   bg: "bg-gray-700",     color: "text-white", spin: "6s",   angle: 60  },
                    { Icon: Database,   bg: "bg-emerald-600",  color: "text-white", spin: "5.5s", angle: 90  },
                    { Icon: Shield,     bg: "bg-rose-600",     color: "text-white", spin: "4s",   angle: 120 },
                    { Icon: Zap,        bg: "bg-lime-600",     color: "text-black", spin: "3s",   angle: 150 },
                    { Icon: Camera,     bg: "bg-violet-600",   color: "text-white", spin: "4.5s", angle: 180 },
                    { Icon: Headphones, bg: "bg-fuchsia-600",  color: "text-white", spin: "5s",   angle: 210 },
                    { Icon: Mail,       bg: "bg-sky-600",      color: "text-white", spin: "6s",   angle: 240 },
                    { Icon: Mic,        bg: "bg-orange-700",   color: "text-white", spin: "4s",   angle: 270 },
                    { Icon: Monitor,    bg: "bg-slate-700",    color: "text-white", spin: "5.5s", angle: 300 },
                    { Icon: Printer,    bg: "bg-zinc-700",     color: "text-white", spin: "4.5s", angle: 330 },
                  ].map(({ Icon, bg, color, spin, angle }, i) => {
                    const radius = 280;
                    const rad = (angle * Math.PI) / 180;
                    const x = radius * Math.cos(rad);
                    const y = radius * Math.sin(rad);

                    return (
                      <div
                        key={`outer-${i}`}
                        className="planet"
                        style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                      >
                        <div className={`w-full h-full ${bg} rounded-full flex items-center justify-center p-2.5`}>
                          <Icon className={`w-8 h-8 md:w-10 md:h-10 ${color} spin-self animate-glow`} style={{ "--spin-speed": spin } as React.CSSProperties} />
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
}