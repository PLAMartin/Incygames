import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoPath = path.join(process.cwd(), "src/app/icon.png");
  const logoData = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFFFFF",
      }}
    >
      <img
        src={logoSrc}
        alt=""
        width={220}
        height={220}
        style={{ borderRadius: 40 }}
      />
      <div
        style={{
          marginTop: 40,
          fontSize: 64,
          fontWeight: 700,
          color: "#202E6B",
        }}
      >
        Incygames
      </div>
      <div style={{ marginTop: 12, fontSize: 32, color: "#5B6482" }}>
        Simple, useful software
      </div>
    </div>,
    { ...size },
  );
}
