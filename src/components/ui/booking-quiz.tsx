"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * Self-contained 6-step quiz. Submits to /api/lead with event="lead_submitted".
 * On qualified completion: redirects to wa.me with quiz answers prefilled.
 * Geo: Israel-wide; disqualifies only when region matches OUT_OF_SERVICE_REGIONS
 *      (currently empty — operator [F.1.4] confirms exclusions, e.g. West Bank
 *      settlements / Eilat / far-north). Set the placeholder list below.
 * Vehicle-gates to passenger cars only.
 */

type Answers = {
  region:
    | "center"
    | "shfela"
    | "south"
    | "north"
    | "jerusalem"
    | "haifa-krayot"
    | "sharon"
    | "far-south"
    | "far-north"
    | "out-of-area"
    | "";
  city: string;
  vehicleType: "passenger" | "commercial" | "other" | "";
  paintCondition: "fade" | "peel" | "scratch" | "presale" | "";
  yearBucket: "lt2010" | "2010_2015" | "2016_2020" | "gt2020" | "";
  firstName: string;
  phone: string;
};

const REGION_LABELS: Record<string, string> = {
  center: "מרכז (תל אביב, פתח תקווה, רמת גן, גבעתיים, חולון, בת ים)",
  shfela: "שפלה (אשדוד, ראשון לציון, רחובות, מודיעין, נס ציונה)",
  south: "דרום (אשקלון, באר שבע, קריית גת, אופקים, שדרות)",
  sharon: "שרון (נתניה, רעננה, כפר סבא, הרצליה, הוד השרון)",
  jerusalem: "ירושלים והסביבה (ירושלים, מבשרת, בית שמש)",
  "haifa-krayot": "חיפה והקריות (חיפה, קריית ים, קריית מוצקין, קריית ביאליק)",
  north: "צפון (עכו, נהריה, כרמיאל, נצרת, יוקנעם)",
  "far-south": "דרום רחוק (אילת)",
  "far-north": 'צפון רחוק (קריית שמונה, מטולה)',
  "out-of-area": "אזור אחר / לא בארץ",
};

// Operator-pending disqualifier list. Empty for now — qualifies all Israeli regions.
// [OPERATOR F.1.4]: confirm West Bank settlements / Eilat / far-north handling.
const OUT_OF_SERVICE_REGIONS: Answers["region"][] = ["out-of-area"];

const VEHICLE_LABELS: Record<string, string> = {
  passenger: "רכב פרטי",
  commercial: "מסחרי",
  other: "אחר",
};

const PAINT_LABELS: Record<string, string> = {
  fade: "דהייה / שחיקת שמש",
  peel: "התקלפות שכבת לק",
  scratch: "שריטות / נזקי שטח קטנים",
  presale: "רענון לפני מכירה",
};

const YEAR_LABELS: Record<string, string> = {
  lt2010: "לפני 2010",
  "2010_2015": "2010–2015",
  "2016_2020": "2016–2020",
  gt2020: "2020 ואילך",
};

const TOTAL_STEPS = 6;

const initial: Answers = {
  region: "",
  city: "",
  vehicleType: "",
  paintCondition: "",
  yearBucket: "",
  firstName: "",
  phone: "",
};

function getUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const k of ["utm_campaign", "utm_adset", "utm_ad", "utm_source", "utm_medium", "fbclid"]) {
    const v = sp.get(k);
    if (v) out[k] = v;
  }
  return out;
}

export function BookingQuiz() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitErr, setSubmitErr] = useState<string | null>(null);
  const [done, setDone] = useState<"qualified" | "disqualified" | null>(null);

  const disqualReason = useMemo(() => {
    if (a.region && OUT_OF_SERVICE_REGIONS.includes(a.region)) return "out_of_area";
    if (a.vehicleType === "commercial" || a.vehicleType === "other") return "non_passenger";
    return null;
  }, [a.region, a.vehicleType]);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const canAdvance = useMemo(() => {
    switch (step) {
      case 0: return !!a.region && a.city.trim().length >= 2;
      case 1: return !!a.vehicleType;
      case 2: return !!a.paintCondition;
      case 3: return !!a.yearBucket;
      case 4: return a.firstName.trim().length >= 2;
      case 5: return /^0?5\d{8}$/.test(a.phone.replace(/\D/g, ""));
      default: return false;
    }
  }, [step, a]);

  // Fire quiz_start once on first render
  useEffect(() => {
    if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: "quiz_start" });
    }
  }, []);

  const onPhoneChange = (v: string) => {
    setA((prev) => ({ ...prev, phone: v.replace(/[^\d\s\-+]/g, "") }));
  };

  const submit = async () => {
    setSubmitting(true);
    setSubmitErr(null);
    const utm = getUtm();
    const qualification = disqualReason ?? "qualified";
    const payload = {
      event: "lead_submitted",
      page: "/book",
      first_name: a.firstName.trim(),
      phone: a.phone.replace(/\D/g, ""),
      region: REGION_LABELS[a.region] || a.region,
      city: a.city.trim(),
      vehicle_type: VEHICLE_LABELS[a.vehicleType],
      paint_condition: PAINT_LABELS[a.paintCondition],
      year_bucket: YEAR_LABELS[a.yearBucket],
      qualification,
      ...utm,
    };

    // Build WA URL up-front and open the tab synchronously while we still
    // have the click's user-gesture context. After `await fetch`, Safari /
    // mobile browsers consider the gesture "consumed" and silently block
    // window.open. We fall back to same-tab navigation if the popup is blocked.
    let waTab: Window | null = null;
    let waUrl = "";
    if (qualification === "qualified") {
      const msg =
        `היי, מילאתי את השאלון באתר.\n` +
        `שם: ${a.firstName}\n` +
        `עיר: ${a.city}\n` +
        `אזור: ${REGION_LABELS[a.region]}\n` +
        `רכב: ${VEHICLE_LABELS[a.vehicleType]}\n` +
        `שנה: ${YEAR_LABELS[a.yearBucket]}\n` +
        `מצב: ${PAINT_LABELS[a.paintCondition]}`;
      waUrl = `https://wa.me/972527306191?text=${encodeURIComponent(msg)}`;
      waTab = window.open(waUrl, "_blank", "noopener,noreferrer");
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      });
      if (!res.ok) throw new Error("Lead submit failed: " + res.status);
    } catch (e) {
      setSubmitErr((e as Error).message);
      setSubmitting(false);
      if (waTab && !waTab.closed) waTab.close();
      return;
    }

    if (qualification === "qualified") {
      if (!waTab || waTab.closed) {
        // Popup blocked or closed before save completed — fall back to same-tab
        // navigation so the user still reaches WhatsApp.
        window.location.href = waUrl;
        return;
      }
      setDone("qualified");
    } else {
      setDone("disqualified");
    }
    setSubmitting(false);
  };

  if (done === "qualified") {
    return (
      <div style={panelStyle}>
        <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
          קיבלנו! פתחנו שיחה בוואטסאפ.
        </h3>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
          אם הוואטסאפ לא נפתח אוטומטית — הקליקו על הקישור למטה. נחזור אליכם תוך
          שעות עם זמינות מדויקת.
        </p>
        <a
          href={`https://wa.me/972527306191?text=${encodeURIComponent(
            "היי, מילאתי את השאלון באתר. שמי " + a.firstName
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--blue"
        >
          פתחו את הוואטסאפ
        </a>
      </div>
    );
  }

  if (done === "disqualified") {
    const reason =
      disqualReason === "out_of_area"
        ? "השירות שלנו פעיל בכל הארץ, אבל לא באזור שבחרתם."
        : "השירות שלנו פעיל לרכבים פרטיים בלבד כרגע.";
    return (
      <div style={panelStyle}>
        <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 14 }}>
          רגע, יש לנו חוסר התאמה.
        </h3>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
          {reason} שמרנו את הפרטים שלכם — אם נתרחב בעתיד, נחזור אליכם.
        </p>
        <a
          href="https://wa.me/972527306191"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--blue"
        >
          רוצים לדבר איתנו בכל מקרה? וואטסאפ
        </a>
      </div>
    );
  }

  return (
    <div style={panelStyle}>
      <ProgressBar step={step} total={TOTAL_STEPS} />

      <div style={{ minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {step === 0 && (
          <Question
            heading="באיזה אזור נמצא הרכב?"
            sub="אנחנו פועלים בכל הארץ. ההזמנה משויכת לאזור הקרוב ביותר."
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Choices
                value={a.region}
                onChange={(v) => setA({ ...a, region: v as Answers["region"] })}
                options={(Object.keys(REGION_LABELS) as Answers["region"][]).map((k) => ({
                  v: k as string,
                  label: REGION_LABELS[k as string],
                }))}
                vertical
              />
              <input
                type="text"
                value={a.city}
                onChange={(e) => setA({ ...a, city: e.target.value })}
                placeholder="עיר / יישוב מדויק (חובה)"
                style={inputStyle}
              />
            </div>
          </Question>
        )}

        {step === 1 && (
          <Question heading="איזה סוג רכב?" sub="₪3,490 + מע&quot;מ הוא לרכבים פרטיים בלבד.">
            <Choices
              value={a.vehicleType}
              onChange={(v) => setA({ ...a, vehicleType: v as Answers["vehicleType"] })}
              options={[
                { v: "passenger", label: "רכב פרטי" },
                { v: "commercial", label: "רכב מסחרי" },
                { v: "other", label: "אחר" },
              ]}
            />
          </Question>
        )}

        {step === 2 && (
          <Question heading="מה מצב הצבע הנוכחי?">
            <Choices
              value={a.paintCondition}
              onChange={(v) => setA({ ...a, paintCondition: v as Answers["paintCondition"] })}
              options={[
                { v: "fade", label: "דהייה / שחיקת שמש" },
                { v: "peel", label: "התקלפות שכבת לק" },
                { v: "scratch", label: "שריטות / נזקי שטח" },
                { v: "presale", label: "רענון לפני מכירה" },
              ]}
            />
          </Question>
        )}

        {step === 3 && (
          <Question heading="שנת ייצור?">
            <Choices
              value={a.yearBucket}
              onChange={(v) => setA({ ...a, yearBucket: v as Answers["yearBucket"] })}
              options={[
                { v: "lt2010", label: "לפני 2010" },
                { v: "2010_2015", label: "2010–2015" },
                { v: "2016_2020", label: "2016–2020" },
                { v: "gt2020", label: "2020 ואילך" },
              ]}
            />
          </Question>
        )}

        {step === 4 && (
          <Question heading="איך לקרוא לכם?">
            <input
              type="text"
              autoFocus
              value={a.firstName}
              onChange={(e) => setA({ ...a, firstName: e.target.value })}
              placeholder="השם הפרטי שלכם"
              style={inputStyle}
            />
          </Question>
        )}

        {step === 5 && (
          <Question heading="ולסיום — מה הטלפון?" sub="כדי שנוכל לחזור אליכם בוואטסאפ עם זמינות.">
            <input
              type="tel"
              autoFocus
              inputMode="tel"
              value={a.phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              placeholder="050-000-0000"
              style={inputStyle}
            />
          </Question>
        )}
      </div>

      {submitErr && (
        <p style={{ color: "#ff6b6b", fontSize: 14, marginTop: 12 }}>
          שליחה נכשלה: {submitErr}. נסו שוב או דברו איתנו בוואטסאפ.
        </p>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          gap: 12,
          marginTop: 28,
        }}
      >
        {step < TOTAL_STEPS - 1 ? (
          <button
            disabled={!canAdvance}
            onClick={() => {
              if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
                (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
                  event: `quiz_step_${step + 1}_complete`,
                });
              }
              next();
            }}
            className="btn btn--blue"
            style={{ opacity: canAdvance ? 1 : 0.4, cursor: canAdvance ? "pointer" : "not-allowed" }}
          >
            המשך
          </button>
        ) : (
          <button
            disabled={!canAdvance || submitting}
            onClick={submit}
            className="btn btn--blue"
            style={{ opacity: canAdvance && !submitting ? 1 : 0.4, cursor: canAdvance ? "pointer" : "not-allowed" }}
          >
            {submitting ? "שולח..." : "שלחו וקבלו תשובה בוואטסאפ"}
          </button>
        )}
        {step > 0 && (
          <button
            onClick={prev}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "var(--text-muted)",
              padding: "12px 24px",
              borderRadius: 8,
              fontSize: 14,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            חזרה
          </button>
        )}
      </div>
    </div>
  );
}

const panelStyle: React.CSSProperties = {
  background: "var(--bg-card)",
  borderRadius: 20,
  padding: 40,
  boxShadow: "0 0 30px rgba(57,101,200,0.15), 0 4px 12px rgba(0,0,0,0.3)",
  marginTop: 20,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontSize: 18,
  padding: "16px 20px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 10,
  color: "white",
  fontFamily: "inherit",
  outline: "none",
  textAlign: "right",
  direction: "rtl",
};

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = ((step + 1) / total) * 100;
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>
        <span>שלב {step + 1} מתוך {total}</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "var(--accent)",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

function Question({
  heading,
  sub,
  children,
}: {
  heading: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 style={{ fontSize: "clamp(22px, 2.6vw, 32px)", fontWeight: 700, lineHeight: 1.3, marginBottom: 8 }}>
        {heading}
      </h3>
      {sub && (
        <p style={{ color: "var(--text-muted)", marginBottom: 24, fontSize: 15, lineHeight: 1.6 }}>
          {sub}
        </p>
      )}
      <div style={{ marginTop: 12 }}>{children}</div>
    </div>
  );
}

function Choices({
  value,
  onChange,
  options,
  vertical = false,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { v: string; label: string }[];
  vertical?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: vertical ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 10,
      }}
    >
      {options.map((o) => {
        const active = value === o.v;
        return (
          <button
            key={o.v}
            onClick={() => onChange(o.v)}
            style={{
              padding: "14px 18px",
              background: active ? "var(--accent)" : "rgba(255,255,255,0.04)",
              border: active ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              color: active ? "white" : "rgba(255,255,255,0.92)",
              fontSize: 15,
              fontWeight: active ? 600 : 400,
              fontFamily: "inherit",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textAlign: "right",
              direction: "rtl",
            }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
