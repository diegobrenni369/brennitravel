import type { LucideIcon } from "lucide-react";

type FeatureItem = {
  title: string;
  description: string;
  icon: string | LucideIcon;
};

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "compact";
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  variant = "default",
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {subtitle && (
              <p className="text-accent-orange font-semibold uppercase tracking-wider text-sm mb-3">
                {subtitle}
              </p>
            )}

            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8`}>
          {features.map((feature, index) => {
            const Icon = typeof feature.icon !== "string" ? feature.icon : null;
            const iconText = typeof feature.icon === "string" ? feature.icon : null;

            return (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600">
                  {Icon ? (
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  ) : (
                    <span className="text-3xl md:text-4xl">{iconText}</span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-display font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}