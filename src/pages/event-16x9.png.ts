import type { APIRoute } from "astro";
import { pngResponse, renderSvg } from "../lib/render-svg";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderSvg({
      svgPath: "src/assets/og.svg",
      width: 1280,
      height: 720,
      background: "#15191e",
    }),
  );
