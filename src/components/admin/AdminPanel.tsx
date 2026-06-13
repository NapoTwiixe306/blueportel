"use client";

import { useEffect, useState } from "react";
import { Loader2, Lock, Save, LogOut, CheckCircle2 } from "lucide-react";

type RateValue = { nightlyCents: number; minNights: number };
type Season = "basse" | "moyenne" | "haute";
type Property = "horizon" | "prestige";
type RatesMap = Record<Property, Record<Season, RateValue>>;

const PROPERTIES: Property[] = ["horizon", "prestige"];
const SEASONS: Season[] = ["basse", "moyenne", "haute"];
const PROPERTY_LABEL: Record<Property, string> = { horizon: "Horizon", prestige: "Prestige" };
const SEASON_LABEL: Record<Season, string> = { basse: "Basse saison", moyenne: "Moyenne saison", haute: "Haute saison" };

type Row = { property: Property; season: Season; euros: string; minNights: string };

function toRows(rates: RatesMap): Row[] {
  return PROPERTIES.flatMap((property) =>
    SEASONS.map((season) => ({
      property,
      season,
      euros: (rates[property][season].nightlyCents / 100).toFixed(2),
      minNights: String(rates[property][season].minNights),
    }))
  );
}

export default function AdminPanel() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  const loadRates = async () => {
    const res = await fetch("/api/admin/rates", { cache: "no-store" });
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    const data = (await res.json()) as { rates: RatesMap };
    setRows(toRows(data.rates));
    setAuthed(true);
  };

  useEffect(() => {
    loadRates();
  }, []);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const d = await res.json();
        setLoginError(d.error || "Échec de connexion");
        return;
      }
      setPassword("");
      await loadRates();
    } finally {
      setBusy(false);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
  };

  const updateRow = (i: number, field: "euros" | "minNights", value: string) => {
    setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, [field]: value } : r)));
    setSaved(false);
  };

  const save = async () => {
    setSaving(true);
    setSaved(false);
    try {
      const payload = rows.map((r) => ({
        property: r.property,
        season: r.season,
        nightlyCents: Math.round(parseFloat(r.euros.replace(",", ".")) * 100),
        minNights: parseInt(r.minNights, 10),
      }));
      const res = await fetch("/api/admin/rates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rates: payload }),
      });
      if (res.ok) {
        const data = (await res.json()) as { rates: RatesMap };
        setRows(toRows(data.rates));
        setSaved(true);
      }
    } finally {
      setSaving(false);
    }
  };

  // Chargement initial
  if (authed === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loader2 className="h-6 w-6 animate-spin text-blue-600" aria-hidden="true" />
      </div>
    );
  }

  // Écran de connexion
  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <form onSubmit={login} className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <Lock className="h-5 w-5 text-blue-600" aria-hidden="true" />
            <h1 className="text-lg font-bold text-gray-900">Admin — Tarifs</h1>
          </div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
          {loginError && <p className="mt-3 text-sm font-medium text-red-600">{loginError}</p>}
          <button
            type="submit"
            disabled={busy || !password}
            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-bold text-white transition hover:bg-blue-700 disabled:bg-gray-300"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : "Se connecter"}
          </button>
        </form>
      </div>
    );
  }

  // Éditeur de tarifs
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Tarifs des réservations directes</h1>
          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-800"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" /> Déconnexion
          </button>
        </div>

        {PROPERTIES.map((property) => (
          <div key={property} className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
              <h2 className="font-bold text-gray-900">{PROPERTY_LABEL[property]}</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {rows
                .map((r, i) => ({ r, i }))
                .filter(({ r }) => r.property === property)
                .map(({ r, i }) => (
                  <div key={r.season} className="flex items-center gap-3 px-5 py-3">
                    <span className="w-32 text-sm font-medium text-gray-700">{SEASON_LABEL[r.season]}</span>
                    <label className="flex items-center gap-1.5 text-sm text-gray-500">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={r.euros}
                        onChange={(e) => updateRow(i, "euros", e.target.value)}
                        className="h-10 w-24 rounded-lg border border-gray-200 bg-gray-50 px-3 text-right text-sm text-gray-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                      € / nuit
                    </label>
                    <label className="ml-auto flex items-center gap-1.5 text-sm text-gray-500">
                      min
                      <input
                        type="number"
                        min="1"
                        step="1"
                        value={r.minNights}
                        onChange={(e) => updateRow(i, "minNights", e.target.value)}
                        className="h-10 w-16 rounded-lg border border-gray-200 bg-gray-50 px-3 text-right text-sm text-gray-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                      nuits
                    </label>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={save}
            disabled={saving}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 disabled:bg-gray-300"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Save className="h-4 w-4" aria-hidden="true" />
            )}
            Enregistrer
          </button>
          {saved && (
            <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Tarifs enregistrés
            </span>
          )}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          L&apos;acompte (30 %) et le délai minimum de réservation sont fixés dans le code. Les
          changements de tarifs ici sont pris en compte immédiatement.
        </p>
      </div>
    </div>
  );
}
