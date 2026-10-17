import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#08090C",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 8,
          border: "1.5px solid #FF2638",
          fontWeight: 900,
          fontFamily: "sans-serif",
        }}
      >
        <span>A</span>
        <span style={{ color: "#FF2638" }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
