const domain = "hackberry.nz";
const url = `https://${domain}`;
const start = new Date("2027-02-27T09:00:00+13:00");
const end = new Date("2027-02-27T21:00:00+13:00");
const hours = 12;

// event details
export const event = {
	name: "Hackberry",
	url: url,
	uid: "hackberry-2027@example.com",
	address: "148 Durham Street, Tauranga 3110",
	venue: "Basestation",
	start: start,
	end: end,
	hours: hours,
	description: `${hours} hours of youth hacking. More details at ${url}`,
	signUp: "https://forms.fillout.com/t/sdomEGAG6hus",
	ogImage: new URL("/og.png", url).href,
};

export const contact = {
	email: `team@${domain}`,
	discord: `hackberrynz`,
	discord_id: "1568440369346252920",
	instagram: "@hackberry.nz",
	github: "hackberrynz",
};

export const eventSchema = {
	"@context": "https://schema.org",
	"@type": "Event",
	name: event.name,
	description: event.description,
	startDate: start,
	endDate: end,
	eventStatus: "https://schema.org/EventScheduled",
	eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
	location: {
		"@type": "Place",
		name: "Basestation",
		address: {
			"@type": "PostalAddress",
			streetAddress: "148 Durham Street",
			addressLocality: "Tauranga",
			postalCode: "3110",
			addressCountry: "NZ",
		},
	},
	image: ["/event-16x9.png", "event-4x3.png", "event-1x1.png"],
	organizer: {
		"@type": "Organization",
		name: event.name,
		url: url,
	},
	offers: {
		"@type": "Offer",
		url: event.signUp,
		price: "0",
		priceCurrency: "NZD",
		availability: "https://schema.org/InStock",
	},
};
