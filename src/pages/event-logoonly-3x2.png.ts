import type { APIRoute } from "astro";
import { pngResponse, renderSvg } from "../lib/render-svg";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderSvg({
      svgPath: "public/favicon.svg",
      width: 1500,
      height: 1000,
      padding: { top: 160, bottom: 160, left: 160, right: 160 },
      background: "#15191e",
    }),
  );
