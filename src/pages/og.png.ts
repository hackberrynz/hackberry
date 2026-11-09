import { readFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const svg = await readFile("src/assets/og.svg");
	const resvg = new Resvg(svg, {
		background: "#15191e",
		font: {
			loadSystemFonts: true,
		},
	});
	const png = resvg.render().asPng();

	return new Response(new Uint8Array(png), {
		headers: { "Content-Type": "image/png" },
	});
};
