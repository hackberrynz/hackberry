import type { APIRoute } from "astro";
import { pngResponse, renderSvg } from "../lib/render-svg";

export const GET: APIRoute = async () =>
  pngResponse(
    await renderSvg({
      svgPath: "public/favicon.svg",
      width: 1080,
      height: 1080,
      background: "#15191e",
    }),
  );
