import { readFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";
import sharp from "sharp";

export const GET: APIRoute = async () => {
	const svg = await readFile("src/assets/og.svg");
	const resvg = new Resvg(svg, {
		background: "#15191e",
		font: {
			loadSystemFonts: true,
		},
	});
	const rendered = resvg.render().asPng();

	const png = await sharp(rendered)
		.resize(1200, 1200, { fit: "contain", background: "#15191e" })
		.flatten({ background: "#15191e" })
		.png()
		.toBuffer();

	return new Response(new Uint8Array(png), {
		headers: { "Content-Type": "image/png" },
	});
};
