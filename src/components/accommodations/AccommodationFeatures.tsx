import { ChevronRight, Wifi, Wind, Car, Waves, Umbrella, Utensils, BedDouble, Bath } from "lucide-react";
import type { Accommodation } from "../../data/accommodations";

type AccommodationFeaturesProps = {
  accommodation: Accommodation;
  labels: {
    included: string;
    notIncluded: string;
  };
};

const amenityList = [
  { key: "hasSeaView", label: "Vue mer", Icon: Waves },
  { key: "hasBeachAccess", label: "Accès direct plage", Icon: Umbrella },
  { key: "hasWifi", label: "Wi-Fi haut débit", Icon: Wifi },
  { key: "hasAC", label: "Climatisation", Icon: Wind },
  { key: "hasParking", label: "Parking privé", Icon: Car },
  { key: "hasTerrace", label: "Terrasse privée", Icon: Umbrella },
] as const;

export default function AccommodationFeatures({ accommodation, labels }: AccommodationFeaturesProps) {
  return (
    <div className="space-y-8">
      {/* Amenities */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {amenityList.map(({ key, label, Icon }) => {
            const active = accommodation[key as keyof Accommodation] as boolean;
            return (
              <div
                key={key}
                className={`flex items-center gap-2.5 rounded-xl p-3 ${
                  active ? "bg-blue-50 text-blue-700" : "bg-gray-50 text-gray-400"
                }`}
              >
                <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Equipment by category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {accommodation.equipment.map((block) => (
          <div
            key={block.category}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <h4 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-gray-100">
              {block.category}
            </h4>
            <ul className="space-y-2">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <ChevronRight className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
