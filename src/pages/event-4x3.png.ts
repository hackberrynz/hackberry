import type { APIRoute } from "astro";
import { pngResponse, renderSvg } from "../lib/render-svg";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderSvg({
      svgPath: "src/assets/og.svg",
      width: 1200,
      height: 900,
      background: "#15191e",
    }),
  );
