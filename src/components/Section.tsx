import { ReactNode } from "react";
import type { Section as SectionType } from "../types/site";
import ProgramCard from "./ProgramCard";

export default function Section({
  section,
  children,
  className = "",
}: {
  section: SectionType;
  children?: ReactNode;
  className?: string;
}) {
  const hasItems = section.items && section.items.length > 0;

  return (
    <section id={section.id} className={`section ${className}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-heading-2 text-slate-900 mb-4">
            {section.title}
          </h2>
          {section.description && (
            <p className="text-lg text-slate-600 leading-relaxed">
              {section.description}
            </p>
          )}
        </div>

        {/* Section Content */}
        {children ? (
          <div>{children}</div>
        ) : hasItems ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {section.items?.map((item) => (
              <ProgramCard key={item.name} item={item} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
