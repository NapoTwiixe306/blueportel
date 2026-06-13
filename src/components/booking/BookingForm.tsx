"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Loader2, ShieldCheck } from "lucide-react";

import { accommodations, type AccommodationId } from "../../data/accommodations";

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
    phone: "Téléphone (optionnel)",
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
  },
  en: {
    title: "Book online",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
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
  },
  nl: {
    title: "Online reserveren",
    checkIn: "Aankomst",
    checkOut: "Vertrek",
    guests: "Reizigers",
    name: "Volledige naam",
    email: "E-mail",
    phone: "Telefoon (optioneel)",
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
  },
};

type Props = { property: AccommodationId; locale: string };

export default function BookingForm({ property, locale }: Props) {
  const lang: Locale = locale === "en" || locale === "nl" ? locale : "fr";
  const t = T[lang];
  const capacity = accommodations[property].capacity;

  const today = new Date().toISOString().slice(0, 10);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [quoting, setQuoting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      guests >= 1,
    [submitting, quote, checkIn, checkOut, name, email, guests]
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
          guestPhone: phone,
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

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-blue-600" aria-hidden="true" />
        <h3 className="text-base font-bold text-gray-900">{t.title}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs font-semibold text-gray-600">
          {t.checkIn}
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
            className={`mt-1 ${inputClass}`}
          />
        </label>
        <label className="text-xs font-semibold text-gray-600">
          {t.checkOut}
          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
            className={`mt-1 ${inputClass}`}
          />
        </label>
      </div>

      <label className="mt-3 block text-xs font-semibold text-gray-600">
        {t.guests}
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className={`mt-1 ${inputClass}`}
        >
          {Array.from({ length: capacity }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>

      {/* Devis / disponibilité */}
      <div className="mt-4 rounded-xl bg-gray-50 px-4 py-3 text-sm">
        {quoting && (
          <span className="flex items-center gap-2 text-gray-500">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> …
          </span>
        )}
        {!quoting && !quote && <p className="text-gray-500">{t.pickDates}</p>}
        {!quoting && quote && !quote.available && (
          <p className="font-medium text-red-600">{quote.message || t.unavailable}</p>
        )}
        {!quoting && quote?.available && quote.eur && (
          <div className="space-y-1">
            <p className="font-semibold text-emerald-700">
              {t.available} · {quote.nights} {t.nights}
            </p>
            <div className="flex justify-between text-gray-600">
              <span>{t.total}</span>
              <span>{quote.eur.total} €</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900">
              <span>{t.deposit}</span>
              <span>{quote.eur.deposit} €</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>{t.balance}</span>
              <span>{quote.eur.balance} €</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3">
        <input
          type="text"
          placeholder={t.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClass}
        />
        <input
          type="email"
          placeholder={t.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClass}
        />
        <input
          type="tel"
          placeholder={t.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
        />
        <textarea
          placeholder={t.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={2}
          className={inputClass}
        />
      </div>

      {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> {t.submitting}
          </>
        ) : (
          t.submit
        )}
      </button>

      <p className="mt-3 flex items-start gap-1.5 text-xs text-gray-500">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
        {t.secure}
      </p>
    </form>
  );
}
