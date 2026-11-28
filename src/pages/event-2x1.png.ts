import type { APIRoute } from "astro";
import { pngResponse, renderSvg } from "../lib/render-svg";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderSvg({
      svgPath: "src/assets/og.svg",
      width: 3200,
      height: 1600,
      background: "#15191e",
    }),
  );
