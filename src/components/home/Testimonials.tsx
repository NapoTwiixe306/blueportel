import { Star, Quote } from "lucide-react";

export type Testimonial = {
  name: string;
  date: string;
  rating: number;
  text: string;
  platform?: string;
};

type TestimonialsProps = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  stats: { label: string; value: string }[];
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((v) => (
        <Star
          key={v}
          className={`h-4 w-4 ${
            v <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : v - 0.5 <= rating
              ? "fill-amber-300 text-amber-300"
              : "text-gray-200"
          }`}
          aria-hidden="true"
        />
      ))}
      <span className="ml-1.5 text-xs text-slate-500 font-medium">{rating}/5</span>
    </div>
  );
}

export default function Testimonials({ title, subtitle, testimonials, stats }: TestimonialsProps) {
  return (
    <section
      className="w-full px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-50"
      aria-label="Témoignages clients"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Témoignages
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">{subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((review) => (
            <article
              key={review.name}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-start gap-3">
                <Quote className="w-8 h-8 text-blue-200 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{review.text}</p>
              {review.platform && (
                <p className="text-xs text-slate-400 pt-2 border-t border-gray-50">
                  Via {review.platform}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
