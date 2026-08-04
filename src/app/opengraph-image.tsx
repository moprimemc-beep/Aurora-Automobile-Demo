import { ImageResponse } from "next/og";
import { company } from "@/lib/content/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #07080a 0%, #14161a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #c9a468",
              borderRadius: "50%",
              color: "#c9a468",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <span style={{ color: "#9a9c9f", fontSize: 22, letterSpacing: 4 }}>
            AURORA AUTOMOBILE
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 48,
            color: "#f6f5f1",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          <span>Premiumfahrzeuge.</span>
          <span>Persönlich beraten.</span>
          <span style={{ color: "#ddc190" }}>Vertrauen erfahren.</span>
        </div>

        <div style={{ display: "flex", marginTop: 48, color: "#6b6d71", fontSize: 24 }}>
          {company.address.city} · Autohaus &amp; Meisterwerkstatt
        </div>
      </div>
    ),
    { ...size },
  );
}
