"use client";
import { useEffect, useRef, useState } from "react";

interface Member {
  name: string;
  role: string;
  description: string;
  image: string;
  color: string;
}

const team: Member[] = [
  {
    name: "Saurav Kumar",
    role: "Founder & CEO",
    description:
      "10+ years of progressive experience as a strong business strategic professional with a Master's degree from SRM University Chennai, focused on the information technology domain.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    description:
      "Expert in scalable AI systems and cloud architecture. Oversees all technical innovation.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    color: "from-purple-400 to-pink-400",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Marketing",
    description:
      "Data-driven marketer specializing in AI-powered campaigns and performance growth.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    color: "from-green-400 to-emerald-400",
  },
];

export default function LeadershipTeam() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isVisible, currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={carouselRef}
      className="py-20 md:py-28 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">

        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Meet Our <span className="text-yellow-500">Leadership</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Visionaries shaping the future of AI-driven digital transformation.
          </p>
        </div>

        {/* Big, Stylish Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-800 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {team.map((member, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-6 md:px-8">
                  <div
                    className={`group relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-white to-gray-50 
                      border-2 border-gray-100 shadow-lg hover:shadow-xl bg-clip-padding backdrop-blur-xl transition-all duration-500 
                      hover:-translate-y-2 hover:border-yellow-400/30
                      ${isVisible ? "opacity-100" : "opacity-0"}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {/* Gradient Glow Background */}
                    

                    {/* Glass overlay */}
                   
                    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                      {/* Large Profile Image */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden 
                            border-4 md:border-[6px] border-yellow-400/50 group-hover:border-yellow-400 
                            transition-all duration-500 shadow-2xl ring-4 ring-yellow-400/20 
                            group-hover:ring-yellow-400/40 group-hover:scale-105`}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Gradient ring effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${member.color} 
                            opacity-0 group-hover:opacity-30 rounded-full transition-opacity duration-500`}
                        />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 text-center md:text-left max-w-2xl">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-500">
                          {member.name}
                        </h3>
                        <p className="text-xl md:text-2xl lg:text-3xl text-yellow-600 font-semibold mt-2 tracking-wide">
                          {member.role}
                        </p>
                        <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed tracking-wide">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator (Centered, Larger) */}
          <div className="flex justify-center gap-3 mt-12">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === currentIndex
                    ? "bg-yellow-500 w-12 h-3 "
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}