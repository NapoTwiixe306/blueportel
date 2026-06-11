import { Waves, MapPin, Sunset, Home, BadgeCheck, Users } from "lucide-react";

type WhyItem = {
  icon: "waves" | "map" | "sunset" | "home" | "badge" | "users";
  title: string;
  description: string;
};

type WhyBluePortelProps = {
  title: string;
  subtitle: string;
  items: WhyItem[];
};

const iconMap: Record<WhyItem["icon"], typeof Waves> = {
  waves: Waves,
  map: MapPin,
  sunset: Sunset,
  home: Home,
  badge: BadgeCheck,
  users: Users,
};

export default function WhyBluePortel({ title, subtitle, items }: WhyBluePortelProps) {
  return (
    <section
      className="w-full px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white"
      aria-label={title}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Pourquoi BluePortel
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export type { WhyItem };
