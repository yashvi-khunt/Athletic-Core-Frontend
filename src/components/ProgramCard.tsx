import React from "react";
import Image from "next/image";
import Link from "next/link";

export type ProgramItem = {
  id?: string;
  name: string;
  slug?: string;
  description?: string;
  image?: string;
  price?: string;
  duration?: string;
  level?: string;
};

type Props = {
  item: ProgramItem;
};

export default function ProgramCard({ item }: Props) {
  return (
    <article className="program-card group">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-200">
        <Image
          src={item.image ?? "/images/hero.jpg"}
          alt={item.name}
          fill
          className="program-image object-cover"
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 350px, 100vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-6 py-2 bg-lime-400 text-black rounded-full font-semibold text-sm uppercase tracking-wide transform scale-95 group-hover:scale-100 transition-transform">
            View Details
          </span>
        </div>

        {/* Level Badge */}
        {item.level && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wide text-lime-400 border border-lime-400/30">
            {item.level}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-400 transition-colors line-clamp-2">
            {item.name}
          </h3>

          {item.duration && (
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">
              {item.duration}
            </p>
          )}
        </div>

        {item.description && (
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {item.description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <Link
            href={item.slug ? `/programs/${item.slug}` : "#"}
            className="text-sm font-semibold text-lime-400 hover:text-lime-500 flex items-center gap-2 group/link"
          >
            Learn More
            <svg
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {item.price && (
            <span className="text-sm font-bold text-slate-900">
              ${item.price}
              <span className="text-xs text-slate-500 font-normal">/hr</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
