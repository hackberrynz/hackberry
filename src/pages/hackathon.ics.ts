import type { APIRoute } from "astro";
import { event } from "../data/data.ts";

export const GET: APIRoute = () => {
	const body = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		`PRODID:-//${event.name}//EN`,
		"BEGIN:VEVENT",
		`UID:${event.uid}`,
		`DTSTAMP:${new Date().toISOString().replace(/[-:]|\.\d{3}/g, "")}`,
		`DTSTART:${event.start
			.toISOString()
			.replace(/[-:]/g, "")
			.replace(/\.\d{3}/, "")}`,
		`DTEND:${event.end
			.toISOString()
			.replace(/[-:]/g, "")
			.replace(/\.\d{3}/, "")}`,
		`SUMMARY:${event.name}`,
		`LOCATION:${event.address}`,
		`URL:${event.url}`,
		`DESCRIPTION:${event.description}`,
		"END:VEVENT",
		"END:VCALENDAR",
	].join("\r\n");

	return new Response(body, {
		headers: { "Content-Type": "text/calendar; charset=utf-8" },
	});
};
