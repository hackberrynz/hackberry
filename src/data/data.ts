const domain = "hackberry.nz";
const url = `https://${domain}`;
const start = new Date("2027-02-27T08:30:00+13:00");
const end = new Date("2027-02-27T20:30:00+13:00");
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

export const schedule = [
	{
		start: start,
		title: "Doors open",
		desc: "Arrival and check in",
		icon: "lucide:door-open",
	},
	{
		start: new Date("2027-02-27T09:00:00+13:00"),
		title: "Kickoff",
		desc: "Challenge reveal and team forming",
		icon: "lucide:rocket",
	},
	{
		start: new Date("2027-02-27T09:30:00+13:00"),
		title: "Beginner Workshop",
		desc: "Get started",
		icon: "lucide:face-grinning",
	},
	{
		start: new Date("2027-02-27T12:30:00+13:00"),
		title: "Lunch",
		desc: "Take a break",
		icon: "lucide:grape",
	},
	{
		start: new Date("2027-02-27T17:30:00+13:00"),
		title: "Dinner",
		desc: "Take another break",
		icon: "lucide:pizza",
	},
	{
		start: new Date("2027-02-27T19:00:00+13:00"),
		title: "Demos and judging",
		desc: "Stop coding and share your work",
		icon: "lucide:podium",
	},
	{
		start: end,
		title: "Doors close",
		desc: "All done!",
		icon: "lucide:door-closed",
	},
];
