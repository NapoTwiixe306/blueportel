"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";

import { accommodations, type AccommodationId } from "../../data/accommodations";
import BookingCalendar from "./BookingCalendar";

const LEAD_DAYS = 3; // doit rester aligné avec MIN_LEAD_DAYS côté serveur

// Préfixes téléphoniques proposés (audience FR / BE / NL en priorité)
const PHONE_PREFIXES = [
  { code: "+32", label: "🇧🇪 +32" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+31", label: "🇳🇱 +31" },
  { code: "+352", label: "🇱🇺 +352" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+41", label: "🇨🇭 +41" },
  { code: "+34", label: "🇪🇸 +34" },
  { code: "+39", label: "🇮🇹 +39" },
];

type Locale = "fr" | "en" | "nl";

type QuoteResponse = {
  available: boolean;
  code?: string;
  message?: string;
  nights?: number;
  minNights?: number;
  eur?: { total: string; deposit: string; balance: string; nightly: string };
};

const T: Record<Locale, Record<string, string>> = {
  fr: {
    title: "Réserver en ligne",
    checkIn: "Arrivée",
    checkOut: "Départ",
    guests: "Voyageurs",
    name: "Nom complet",
    email: "Email",
    phone: "Téléphone",
    message: "Message (optionnel)",
    nights: "nuits",
    total: "Total séjour",
    deposit: "Acompte à payer maintenant (30%)",
    balance: "Solde (30 j avant l'arrivée)",
    available: "Dates disponibles",
    unavailable: "Ces dates ne sont pas disponibles",
    submit: "Payer l'acompte et réserver",
    submitting: "Redirection vers le paiement…",
    secure: "Paiement sécurisé Mollie. Caution de 200 € gérée séparément. Solde réglé avant l'arrivée.",
    pickDates: "Choisissez vos dates pour voir le prix.",
    errGeneric: "Une erreur est survenue. Réessayez.",
    datesTitle: "Votre séjour",
    contactTitle: "Vos coordonnées",
    subtitle: "Acompte 30 % aujourd'hui, solde avant l'arrivée.",
    perNight: "/ nuit",
  },
  en: {
    title: "Book online",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    message: "Message (optional)",
    nights: "nights",
    total: "Stay total",
    deposit: "Deposit due now (30%)",
    balance: "Balance (30 days before arrival)",
    available: "Dates available",
    unavailable: "These dates are not available",
    submit: "Pay deposit & book",
    submitting: "Redirecting to payment…",
    secure: "Secure Mollie payment. €200 security deposit handled separately. Balance paid before arrival.",
    pickDates: "Pick your dates to see the price.",
    errGeneric: "Something went wrong. Please try again.",
    datesTitle: "Your stay",
    contactTitle: "Your details",
    subtitle: "30% deposit today, balance before arrival.",
    perNight: "/ night",
  },
  nl: {
    title: "Online reserveren",
    checkIn: "Aankomst",
    checkOut: "Vertrek",
    guests: "Reizigers",
    name: "Volledige naam",
    email: "E-mail",
    phone: "Telefoon",
    message: "Bericht (optioneel)",
    nights: "nachten",
    total: "Totaal verblijf",
    deposit: "Voorschot nu te betalen (30%)",
    balance: "Saldo (30 dagen voor aankomst)",
    available: "Data beschikbaar",
    unavailable: "Deze data zijn niet beschikbaar",
    submit: "Voorschot betalen & reserveren",
    submitting: "Doorverwijzen naar betaling…",
    secure: "Veilige Mollie-betaling. Waarborg van € 200 apart geregeld. Saldo vóór aankomst betaald.",
    pickDates: "Kies uw data om de prijs te zien.",
    errGeneric: "Er ging iets mis. Probeer opnieuw.",
    datesTitle: "Uw verblijf",
    contactTitle: "Uw gegevens",
    subtitle: "30% voorschot vandaag, saldo vóór aankomst.",
    perNight: "/ nacht",
  },
};

type Props = { property: AccommodationId; locale: string };

export default function BookingForm({ property, locale }: Props) {
  const lang: Locale = locale === "en" || locale === "nl" ? locale : "fr";
  const t = T[lang];
  const capacity = accommodations[property].capacity;

  const fmtDate = (iso: string) =>
    new Intl.DateTimeFormat(lang === "en" ? "en-GB" : lang === "nl" ? "nl-NL" : "fr-FR", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(new Date(`${iso}T00:00:00`));

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [quoting, setQuoting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [blocked, setBlocked] = useState<Set<string>>(new Set());
  const [firstAvailableIso, setFirstAvailableIso] = useState("");

  // Première date réservable = aujourd'hui + délai minimum avant arrivée
  const minIso = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + LEAD_DAYS);
    return d.toISOString().slice(0, 10);
  }, []);

  // Jours indisponibles (mêmes données que la page Disponibilités : OTA + résas directes)
  useEffect(() => {
    let active = true;
    fetch(`/api/availability?property=${property}`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((d: { days?: { date: string; status: string }[]; nextAvailable?: { from: string } | null }) => {
        if (!active) return;
        const set = new Set<string>();
        for (const day of d.days ?? []) if (day.status === "booked") set.add(day.date);
        setBlocked(set);
        if (d.nextAvailable?.from) setFirstAvailableIso(d.nextAvailable.from);
      })
      .catch(() => active && setBlocked(new Set()));
    return () => {
      active = false;
    };
  }, [property]);

  // Devis live quand les deux dates sont saisies
  useEffect(() => {
    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setQuote(null);
      return;
    }
    let active = true;
    setQuoting(true);
    const url = `/api/booking/quote?property=${property}&checkIn=${checkIn}&checkOut=${checkOut}`;
    fetch(url, { headers: { Accept: "application/json" } })
      .then((r) => r.json() as Promise<QuoteResponse>)
      .then((q) => active && setQuote(q))
      .catch(() => active && setQuote(null))
      .finally(() => active && setQuoting(false));
    return () => {
      active = false;
    };
  }, [property, checkIn, checkOut]);

  const canSubmit = useMemo(
    () =>
      !submitting &&
      !!quote?.available &&
      !!checkIn &&
      !!checkOut &&
      name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      phonePrefix !== "" &&
      phone.replace(/\D/g, "").length >= 6 &&
      guests >= 1,
    [submitting, quote, checkIn, checkOut, name, email, phonePrefix, phone, guests]
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          property,
          checkIn,
          checkOut,
          guests,
          guestName: name,
          guestEmail: email,
          guestPhone: `${phonePrefix} ${phone.trim()}`,
          message,
          locale: lang,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.checkoutUrl) {
        setError(data.error || t.errGeneric);
        setSubmitting(false);
        return;
      }
      window.location.href = data.checkoutUrl; // redirection vers Mollie
    } catch {
      setError(t.errGeneric);
      setSubmitting(false);
    }
  };

  const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-gray-500";
  const inputBase =
    "rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";
  const inputClass = `w-full ${inputBase}`;
  const fieldH = "h-12";

  return (
    <form
      onSubmit={onSubmit}
      className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50"
    >
      {/* En-tête */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-5 text-white">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-bold leading-tight">{t.title}</h3>
            <p className="text-xs text-blue-100">{t.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6 sm:p-7">
        {/* Dates + voyageurs */}
        <div>
          <p className="mb-3 text-sm font-bold text-gray-900">{t.datesTitle}</p>

          {/* Récap des dates choisies */}
          <div className="mb-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">{t.checkIn}</p>
              <p className="text-sm font-bold text-gray-900">{checkIn ? fmtDate(checkIn) : "—"}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">{t.checkOut}</p>
              <p className="text-sm font-bold text-gray-900">{checkOut ? fmtDate(checkOut) : "—"}</p>
            </div>
          </div>

          <BookingCalendar
            key={firstAvailableIso || "min"}
            locale={lang}
            blocked={blocked}
            minIso={minIso}
            initialIso={firstAvailableIso}
            checkIn={checkIn}
            checkOut={checkOut}
            onChange={(ci, co) => {
              setCheckIn(ci);
              setCheckOut(co);
            }}
          />

          <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-blue-600" /> {t.checkIn}/{t.checkOut}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-blue-100" /> {t.nights}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-gray-100" />{" "}
              {lang === "en" ? "Unavailable" : lang === "nl" ? "Niet beschikbaar" : "Indisponible"}
            </span>
          </div>

          <div className="mt-4">
            <label className={labelClass} htmlFor="bf-guests">{t.guests}</label>
            <select
              id="bf-guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className={`${fieldH} ${inputClass} cursor-pointer`}
            >
              {Array.from({ length: capacity }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Devis / disponibilité */}
        <div
          className={`rounded-2xl border px-4 py-4 text-sm transition ${
            !quoting && quote?.available
              ? "border-emerald-200 bg-emerald-50/70"
              : !quoting && quote && !quote.available
                ? "border-red-200 bg-red-50/70"
                : "border-gray-100 bg-gray-50"
          }`}
        >
          {quoting && (
            <span className="flex items-center gap-2 text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> …
            </span>
          )}
          {!quoting && !quote && <p className="text-gray-500">{t.pickDates}</p>}
          {!quoting && quote && !quote.available && (
            <p className="font-semibold text-red-600">{quote.message || t.unavailable}</p>
          )}
          {!quoting && quote?.available && quote.eur && (
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                {t.available} · {quote.nights} {t.nights}
              </span>

              <div className="mt-4 flex items-end justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                <span className="text-sm font-medium text-gray-600">{t.deposit}</span>
                <span className="text-2xl font-extrabold text-blue-600">{quote.eur.deposit} €</span>
              </div>

              <div className="mt-2 space-y-1 px-1 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>{t.total}</span>
                  <span className="font-medium text-gray-700">{quote.eur.total} €</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.balance}</span>
                  <span>{quote.eur.balance} €</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Coordonnées */}
        <div>
          <p className="mb-3 text-sm font-bold text-gray-900">{t.contactTitle}</p>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder={t.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`${fieldH} ${inputClass}`}
            />
            <input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${fieldH} ${inputClass}`}
            />
            <div className="flex gap-2">
              <select
                value={phonePrefix}
                onChange={(e) => setPhonePrefix(e.target.value)}
                required
                aria-label={lang === "en" ? "Country code" : lang === "nl" ? "Landcode" : "Indicatif"}
                className={`${fieldH} ${inputBase} w-28 shrink-0 cursor-pointer ${
                  phonePrefix === "" ? "text-gray-400" : ""
                }`}
              >
                <option value="" disabled>
                  {lang === "en" ? "Code" : lang === "nl" ? "Code" : "Indicatif"}
                </option>
                {PHONE_PREFIXES.map((p) => (
                  <option key={p.code} value={p.code} className="text-gray-900">
                    {p.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder={t.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={`${fieldH} ${inputBase} min-w-0 flex-1`}
              />
            </div>
            <textarea
              placeholder={t.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              className={`${inputClass} py-3`}
            />
          </div>
        </div>

        {error && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> {t.submitting}
            </>
          ) : (
            t.submit
          )}
        </button>

        <p className="flex items-start gap-1.5 text-xs text-gray-400">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
          {t.secure}
        </p>
      </div>
    </form>
  );
}
