import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Udit Sharma - AI Engineer · Agentic Systems & LLM Orchestration";
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
          justifyContent: "space-between",
          backgroundColor: "#0d0d0d",
          backgroundImage:
            "radial-gradient(60% 60% at 80% 0%, rgba(59,130,246,0.18), transparent 60%)",
          padding: "72px",
          color: "#f2f2f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              border: "1px solid #333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            US
          </div>
          <div style={{ fontSize: 26, color: "#888" }}>udit sharma</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            AI Engineer
          </div>
          <div style={{ fontSize: 38, color: "#aaaaaa", letterSpacing: "-0.01em" }}>
            Agentic Systems · Multi-Agent Orchestration · RAG · LLM Workflows
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#888" }}>
          <span>github.com/uditstocks</span>
          <span>Open-source contributor · LangChain</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
