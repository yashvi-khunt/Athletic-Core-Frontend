import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import { ProgramItem } from "@/types/site";
import Link from "next/link";

export default function HomePage() {
  // Sample program data - replace with real data from your API/database
  const programs: ProgramItem[] = [
    {
      id: "1",
      name: "Large Group / Team Training",
      slug: "team-training",
      description:
        "Dynamic, high-energy sessions perfect for team environments. Emphasizes competition, teamwork, and athletic performance.",
      image: "/images/hero.jpg",
      price: "40",
      duration: "60 min",
      level: "6 Athletes",
    },
    {
      id: "2",
      name: "Small Group Training",
      slug: "small-group",
      description:
        "Focused coaching in a semi-private setting. Skill-specific feedback and drills ideal for athletes looking to refine technique.",
      image: "/images/hero.jpg",
      price: "60",
      duration: "60 min",
      level: "2-6 Athletes",
    },
    {
      id: "3",
      name: "Private 1-on-1 Training",
      slug: "private-training",
      description:
        "Customized performance plan. Direct coaching and progress tracking tailored to the athlete's sport, goals, and level.",
      image: "/images/hero.jpg",
      price: "75",
      duration: "60 min",
      level: "1-on-1",
    },
  ];

  const developmentAreas = [
    "Explosiveness & Acceleration",
    "Agility, Change of Direction & Footwork",
    "Strength & Power Output",
    "Core Stability & Balance",
    "Conditioning & Endurance",
    "Injury Prevention & Recovery Habits",
  ];

  const sports = [
    "Baseball",
    "Basketball",
    "Football",
    "Volleyball",
    "Track & Field",
    "And more...",
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Programs Section */}
      <section id="programs" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-heading-1 mb-4">
              Our <span className="text-lime">Training</span> Programs
            </h2>
            <p className="text-lg text-slate-600">
              Choose the training format that fits your goals. All programs are
              designed around sport demands and position-specific movements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} item={program} />
            ))}
          </div>
        </div>
      </section>

      {/* About/Philosophy Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-lime-400">
                  Our Training Philosophy
                </span>
                <h2 className="text-heading-1 mt-3 mb-4">
                  What Sets <span className="text-lime">C.O.R.E.</span> Athlete
                  Apart
                </h2>
              </div>

              <p className="text-lg text-white/90 leading-relaxed">
                <span className="text-lime-400 font-bold">C.O.R.E.</span> ={" "}
                <span className="font-semibold">
                  Creating. Opportunities. Realigning. Expectations.
                </span>
              </p>

              <div className="space-y-4 text-white/80">
                <p className="leading-relaxed">
                  Focused on long-term athletic development, our training is
                  built around sport demands and position-specific movements.
                </p>
                <p className="leading-relaxed">
                  We enhance confidence, resilience, and game performance
                  through proven results from elite-level training, experienced
                  multi-sport athlete leadership, and science-based programming.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>

            {/* Image or Stats */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-dark border border-lime-400/20 p-6">
                  <div className="text-4xl font-bold text-lime-400 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wide">
                    Athletes Trained
                  </div>
                </div>
                <div className="card-dark border border-lime-400/20 p-6">
                  <div className="text-4xl font-bold text-lime-400 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wide">
                    Success Rate
                  </div>
                </div>
                <div className="card-dark border border-lime-400/20 p-6">
                  <div className="text-4xl font-bold text-lime-400 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wide">
                    Sports Covered
                  </div>
                </div>
                <div className="card-dark border border-lime-400/20 p-6">
                  <div className="text-4xl font-bold text-lime-400 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wide">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athletic Development Areas */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Development Areas */}
            <div>
              <h2 className="text-heading-2 mb-6">
                Athletic <span className="text-lime">Development</span> Areas
              </h2>
              <ul className="space-y-3">
                {developmentAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-lime-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-slate-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sports We Train */}
            <div>
              <h2 className="text-heading-2 mb-6">
                <span className="text-lime">Sports</span> We Train
              </h2>
              <ul className="space-y-3">
                {sports.map((sport, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-lime-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-slate-700">{sport}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-lime text-black">
        <div className="container text-center">
          <h2 className="text-heading-1 mb-6">
            Ready to Elevate Your Performance?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of athletes who have transformed their game with CORE
            ATHLETE training programs. Book your session today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-black text-lime-400 rounded-full font-semibold uppercase tracking-wide hover:bg-slate-900 transition-all transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/programs"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold uppercase tracking-wide hover:bg-slate-100 transition-all transform hover:scale-105"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
