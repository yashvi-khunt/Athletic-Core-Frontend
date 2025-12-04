import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image?: string;
  showStats?: boolean;
};

export default function Hero({
  title = "TRAIN WITH CORE ATHLETE",
  subtitle = "Creating. Opportunities. Realigning. Expectations. Build strength, speed, and confidence with our science-based training programs.",
  primaryButtonText = "View Programs",
  primaryButtonLink = "#programs",
  secondaryButtonText = "Get Started",
  secondaryButtonLink = "/contact",
  image = "/images/hero.jpg",
  showStats = true,
}: Props) {
  const stats = [
    { number: "500+", label: "Athletes Trained" },
    { number: "10+", label: "Sports Covered" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ];

  // Split title to highlight "CORE"
  const renderTitle = () => {
    const words = title.split(" ");
    return (
      <h1 className="text-display">
        {words.map((word, index) => {
          const isCoreWord = ["CORE", "ATHLETE", "TRAIN", "PERFORM"].includes(
            word.toUpperCase()
          );
          return (
            <span key={index}>
              {isCoreWord ? (
                <span className="text-lime">{word}</span>
              ) : (
                <span>{word}</span>
              )}{" "}
            </span>
          );
        })}
      </h1>
    );
  };

  return (
    <section className="hero relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Athletic training"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32 min-h-[70vh]">
          {/* Text Content */}
          <div className="space-y-6 fade-in-up">
            {renderTitle()}

            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed fade-in-up-delay-1">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 fade-in-up-delay-2">
              <Link href={primaryButtonLink} className="btn btn-primary">
                {primaryButtonText}
              </Link>
              <Link href={secondaryButtonLink} className="btn btn-secondary">
                {secondaryButtonText}
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          {showStats && (
            <div className="hidden lg:grid grid-cols-2 gap-6 fade-in-up-delay-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-dark border border-lime-400/20 hover:border-lime-400/40 transition-all group cursor-default"
                >
                  <div className="p-6 text-center">
                    <div className="text-5xl font-bold text-lime mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm uppercase tracking-wide opacity-80">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xs uppercase tracking-widest text-white">
          Scroll
        </span>
        <svg
          className="w-6 h-6 animate-bounce text-lime-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
