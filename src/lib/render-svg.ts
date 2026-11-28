import { readFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";

type Sides = { top?: number; bottom?: number; left?: number; right?: number };

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

export interface RenderSvgOptions {
  /** Path to the SVG, relative to the project root (e.g. "public/favicon.svg") */
  svgPath: string;
  width: number;
  height: number;
  /** A single number for all sides, or per-side values (missing sides default to 0) */
  padding?: number | Sides;
  /** Any CSS color string (e.g. "#15191e", "rgb(...)"). Omit for a transparent background. */
  background?: string;
}

export async function renderSvg({
  svgPath,
  width,
  height,
  padding = 0,
  background,
}: RenderSvgOptions): Promise<Buffer> {
  const {
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
  } = typeof padding === "number"
      ? { top: padding, bottom: padding, left: padding, right: padding }
      : padding;

  const innerWidth = width - left - right;
  const innerHeight = height - top - bottom;

  if (innerWidth <= 0 || innerHeight <= 0) {
    throw new Error(
      `Padding is too large for a ${width}x${height} canvas (inner area ${innerWidth}x${innerHeight})`,
    );
  }

  const sharpBackground = background ?? TRANSPARENT;

  const svg = await readFile(svgPath);
  const rendered = new Resvg(svg, {
    ...(background && { background }),
    font: { loadSystemFonts: true },
  })
    .render()
    .asPng();

  return sharp(rendered)
    .resize(innerWidth, innerHeight, {
      fit: "contain",
      background: sharpBackground,
    })
    .extend({ top, bottom, left, right, background: sharpBackground })
    .png()
    .toBuffer();
}

export function pngResponse(png: Buffer): Response {
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
}
